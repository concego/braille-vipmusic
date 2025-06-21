// script.js

// Configuração Tone.js
const synth = new Tone.Synth().toDestination();

// Mapeamento MusiBraille (simplificado)
const musibrailleTable = {
  'C4': '⠙⠼⠙', // Dó na 4ª oitava
  'D4': '⠑⠼⠙', // Ré na 4ª oitava
  'rest': '⠍', // Pausa
  'sharp': '⠩', // Sustenido
  // Adicionar mais símbolos conforme documentação MusiBraille
};

// Estado do dispositivo Braille
let brailleDevice = null;
let brailleOutput = '';

// Função para conectar ao dispositivo Braille
async function connectBrailleDevice() {
  try {
    // Tentar WebUSB
    const device = await navigator.usb.requestDevice({ filters: [] }); // Ajustar filters para dispositivos específicos
    await device.open();
    await device.selectConfiguration(1);
    await device.claimInterface(0);
    brailleDevice = device;
    console.log('Dispositivo Braille conectado:', device.productName);
    updateBrailleDisplay('Bem-vindo ao Braille VIPMusic');
    announce('Dispositivo Braille conectado');
  } catch (error) {
    console.error('Erro ao conectar via WebUSB:', error);
    // Tentar WebHID
    try {
      const devices = await navigator.hid.requestDevice({ filters: [] });
      if (devices.length > 0) {
        brailleDevice = devices[0];
        await brailleDevice.open();
        console.log('Dispositivo HID conectado:', brailleDevice.productName);
        updateBrailleDisplay('Bem-vindo ao Braille VIPMusic');
        announce('Dispositivo Braille conectado');
      }
    } catch (hidError) {
      console.error('Erro ao conectar via WebHID:', hidError);
      announce('Nenhum dispositivo Braille detectado. Use leitor de tela ou teclado.');
    }
  }
}

// Função para atualizar a linha Braille
async function updateBrailleDisplay(text) {
  if (!brailleDevice) return;

  try {
    // Traduzir texto para Braille (usando braille.js ou tabela manual)
    const brailleText = musibrailleTable[text] || toBraille(text); // toBraille é de braille.js
    brailleOutput = brailleText;

    // Enviar para dispositivo (simplificado)
    const encoder = new TextEncoder();
    const data = encoder.encode(brailleText);
    if (brailleDevice instanceof USBDevice) {
      await brailleDevice.transferOut(1, data); // Ajustar endpoint
    } else if (brailleDevice instanceof HIDDevice) {
      await brailleDevice.sendReport(0, data); // Ajustar report ID
    }
    console.log('Linha Braille atualizada:', brailleText);
  } catch (error) {
    console.error('Erro ao atualizar linha Braille:', error);
  }
}

// Função para anúncios acessíveis
function announce(message) {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'assertive');
  liveRegion.setAttribute('role', 'alert');
  liveRegion.style.position = 'absolute';
  liveRegion.style.left = '-9999px';
  liveRegion.textContent = message;
  document.body.appendChild(liveRegion);
  setTimeout(() => liveRegion.remove(), 1000);
}

// Função para gerar partitura Braille (placeholder)
function generateBrailleNotation(input) {
  // Exemplo simplificado
  const notes = input.split('+').map(note => musibrailleTable[note] || note);
  return notes.join(' ');
}

// Função para renderizar VexFlow (simplificado)
function renderVexFlow(input) {
  const vexflowOutput = document.getElementById('vexflowOutput');
  vexflowOutput.innerHTML = '';
  const vf = new Vex.Flow.Factory({ renderer: { elementId: 'vexflowOutput', width: 500, height: 200 } });
  const score = vf.EasyScore();
  score.addStave().addClef('treble').addTimeSignature('4/4');
  score.addVoice().addNotes(input);
  vf.draw();
}

// Prática interativa
function startPractice() {
  const symbols = Object.keys(musibrailleTable);
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const braille = musibrailleTable[symbol];
  document.getElementById('brailleOutput').textContent = braille;
  updateBrailleDisplay(`Identifique: ${braille}`);
  Tone.Transport.scheduleOnce((time) => {
    synth.triggerAttackRelease(symbol, '8n', time);
  }, '0');
}

// Editor de partituras
function updateEditor() {
  const input = document.getElementById('scoreInput').value;
  const brailleNotation = generateBrailleNotation(input);
  document.getElementById('brailleOutput').textContent = brailleNotation;
  updateBrailleDisplay(brailleNotation);
  renderVexFlow(input);
}

// Exportar PDF (simplificado)
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(document.getElementById('brailleOutput').textContent, 10, 10);
  doc.save('partitura.pdf');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Botões de navegação
  document.getElementById('tutorialBtn').addEventListener('click', () => showSection('tutorial'));
  document.getElementById('practiceBtn').addEventListener('click', () => showSection('practice'));
  document.getElementById('editorBtn').addEventListener('click', () => showSection('editor'));
  document.getElementById('theoryBtn').addEventListener('click', () => showSection('theory'));
  document.getElementById('referenceBtn').addEventListener('click', () => showSection('reference'));
  document.getElementById('connectBraille').addEventListener('click', connectBrailleDevice);
  document.getElementById('startPractice').addEventListener('click', startPractice);
  document.getElementById('renderScore').addEventListener('click', updateEditor);
  document.getElementById('exportPDF').addEventListener('click', exportPDF);

  // Função para mostrar seção
  function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
  }
});
