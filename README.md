# Braille VIPMusic: Ferramenta de Musicografia Braille para Acessibilidade Musical

## Introdução

**Braille VIPMusic** é uma ferramenta digital de código aberto projetada para promover a inclusão de músicos cegos e pessoas com deficiência visual no aprendizado, prática e criação de musicografia Braille. Desenvolvida inicialmente para uso pessoal, a ferramenta evoluiu para atender a educadores, músicos e instituições culturais, oferecendo uma solução acessível, interativa e gratuita para o ensino e composição de partituras em Braille. Com suporte a múltiplos formatos (PDF, MusicXML, BRF, áudio) e funcionalidades como prática interativa, editor de partituras e lições de teoria musical, **Braille VIPMusic** é um recurso inovador para democratizar o acesso à música.

### Objetivo
- Capacitar músicos cegos a aprender, criar e compartilhar partituras em musicografia Braille de forma independente.
- Apoiar educadores e instituições culturais na inclusão de pessoas com deficiência visual em programas musicais.
- Contribuir para a preservação e disseminação da musicografia Braille, um patrimônio cultural essencial para a comunidade cega.

### Público-Alvo
- **Músicos cegos**: Iniciantes ou experientes, buscando autonomia no aprendizado musical.
- **Educadores**: Professores de música e educadores especiais que trabalham com inclusão.
- **Instituições culturais**: Escolas, ONGs, conservatórios e projetos sociais voltados à acessibilidade.
- **Comunidade geral**: Entusiastas da música e da inclusão que desejam explorar a musicografia Braille.

### Contexto
A musicografia Braille é um sistema padronizado que permite a pessoas cegas lerem e escreverem partituras musicais por meio do código Braille. No Brasil, ferramentas como o Musibraille são referência, mas a ausência de soluções digitais acessíveis e interativas limita o alcance do ensino musical inclusivo. **Braille VIPMusic** preenche essa lacuna, oferecendo uma plataforma web gratuita, compatível com leitores de tela e otimizada para uso em contextos educacionais e culturais.

## Utilidade Pública e Impacto Cultural

**Braille VIPMusic** é mais do que uma ferramenta técnica; é um projeto de impacto social e cultural que promove a inclusão e a equidade no acesso à música. Seus principais benefícios para a sociedade incluem:

- **Acessibilidade para Músicos Cegos**:
  - Permite que pessoas com deficiência visual aprendam música de forma autônoma, reduzindo barreiras de acesso a partituras e educação musical.
  - Oferece feedback sonoro e visual (alto contraste) compatível com leitores de tela (NVDA, VoiceOver, TalkBack), garantindo usabilidade universal.
  - Suporta a criação de partituras em Braille, empoderando músicos cegos a compor e compartilhar suas obras.

- **Apoio a Educadores e Instituições**:
  - Facilita o ensino de musicografia Braille em escolas de música, conservatórios e projetos sociais, com lições interativas e tutoriais guiados.
  - Reduz custos com materiais didáticos, pois exporta partituras em formatos acessíveis (BRF, PDF, MusicXML) compatíveis com impressoras Braille e softwares musicais.
  - Capacita professores sem experiência prévia em musicografia Braille, ampliando o alcance da educação inclusiva.

- **Preservação Cultural**:
  - Valoriza a musicografia Braille como patrimônio cultural da comunidade cega, promovendo sua continuidade e relevância.
  - Integra padrões brasileiros (Conselho Brasileiro de Musicografia Braille) e internacionais (International Manual of Braille Music Notation), conectando o Brasil a práticas globais de acessibilidade.

- **Impacto em Projetos de Incentivo Cultural**:
  - Alinhado às diretrizes da **Lei Rouanet** (Lei nº 8.313/1991) e editais estaduais/municipais, **Braille VIPMusic** contribui para a democratização do acesso à cultura, inclusão social e formação de público.
  - Pode ser integrado a oficinas, cursos e eventos culturais, promovendo a música como ferramenta de transformação social.
  - Atende às metas de acessibilidade previstas na **Lei Brasileira de Inclusão** (Lei nº 13.146/2015), reforçando o compromisso com os direitos das pessoas com deficiência.

- **Escalabilidade e Alcance**:
  - Como ferramenta de código aberto, pode ser adotada por ONGs, escolas públicas e iniciativas culturais sem custo, maximizando o impacto em comunidades de baixa renda.
  - Disponível em português, inglês e espanhol, a ferramenta tem potencial para alcançar músicos cegos em outros países, especialmente na América Latina.

## Funcionalidades

- **Prática Interativa**:
  - Exercícios de identificação de símbolos musicais em Braille (notas, pausas, dinâmicas).
  - Progressão de dificuldade (níveis 1–3: notas, pausas, sustenidos/bemóis).
  - Feedback sonoro (via Tone.js) e visual (cores de alto contraste).

- **Editor de Partituras**:
  - Entrada de texto para notas, acordes, dinâmicas e letras (e.g., `Dó4+Rés4, Letra: Amor`).
  - Visualização simultânea em notação padrão (VexFlow) e Braille.
  - Exportação para PDF (jsPDF), MusicXML (music21j), BRF, Musibraille e áudio (WAV).
  - Importação de MusicXML para edição.

- **Composição e Teoria Musical**:
  - Lições interativas sobre intervalos, escalas e ritmos, com exercícios e feedback.
  - Ferramentas de composição, como sugestão de progressões harmônicas (e.g., I-vi-IV-V).
  - Análise de acordes e escalas via music21j.

- **Tutorial Interativo**:
  - Guia inicial com 3 etapas (prática, editor, teoria), salvo em `localStorage`.
  - Instruções acessíveis por voz e texto.

- **Acessibilidade**:
  - Compatível com WCAG 2.1 AA (contraste ≥ 4.5:1, ARIA, navegação por teclado).
  - Suporte a leitores de tela e feedback sonoro para ações (correto, erro, salvar).
  - Interface responsiva para dispositivos móveis e desktops.

- **Multilíngue**: Disponível em português, inglês e espanhol.
- **Armazenamento**: Partituras salvas localmente via `localStorage`.

## Arquitetura Técnica

- **Frontend**:
  - **HTML5**: Estrutura semântica com ARIA para acessibilidade.
  - **CSS3**: Design responsivo, mobile-first, cores de alto contraste (#0066cc sobre #fff).
  - **JavaScript (ES6)**: Lógica principal, integração com bibliotecas.
- **Bibliotecas**:
  - **VexFlow (4.2.3)**: Renderização de notação musical padrão.
  - **music21j (0.9.4)**: Processamento de MusicXML e análise musical.
  - **jsPDF (2.5.1)**: Geração de PDFs com partitura e Braille.
  - **Tone.js (14.7.77)**: Síntese de áudio e exportação WAV.
- **Estrutura de Arquivos**:
  - `index.html`: Interface principal.
  - `styles.css`: Estilização acessível.
  - `script.js`: Lógica de prática, editor, composição e teoria.
- **Dependências**: Hospedadas via CDN (Unpkg) para simplicidade.
- **Acessibilidade**:
  - ARIA: `aria-live`, `role="alert"`, `aria-label`.
  - Testes simulados com Chrome DevTools, NVDA e VoiceOver.

## Instruções de Instalação e Uso

1. **Configuração**:
   - Baixe os arquivos `index.html`, `styles.css` e `script.js` do repositório.
   - Abra `index.html` em um navegador moderno (Chrome, Firefox, Edge).
   - Opcional: Hospede em GitHub Pages ou Netlify para acesso online.

2. **Navegação**:
   - Acesse o menu principal para selecionar Tutorial, Prática, Editor, Composição/Teoria ou Referência.
   - Escolha o idioma (português, inglês, espanhol) e instrumento (piano, flauta, violino).

3. **Funcionalidades**:
   - **Prática**: Identifique símbolos Braille, receba feedback sonoro/visual.
   - **Editor**: Insira partituras (e.g., `Dó4, Ré5, Letra: Sol`), visualize e exporte.
   - **Composição/Teoria**: Complete lições e use ferramentas de análise/composição.
   - **Tutorial**: Siga as etapas iniciais para familiarização.

4. **Exportação**:
   - Salve partituras em PDF, MusicXML, BRF, Musibraille ou áudio.
   - Partituras são armazenadas localmente via `localStorage`.

## Decisões de Design

- **Acessibilidade Prioritária**: Cumpre WCAG 2.1 AA, com suporte a leitores de tela e navegação por teclado, garantindo inclusão total.
- **Simplicidade**: Uso de `localStorage` para uso pessoal, sem dependência de servidores.
- **Compatibilidade com Musibraille**: Emula símbolos e intervalos para alinhamento com padrões brasileiros.
- **Multilíngue**: Suporte a português, inglês e espanhol para alcançar comunidades lusófonas e internacionais.
- **Autoaprendizado**: Tutorial e progressão de dificuldade incentivam aprendizado independente.
- **Exportação BRF**: Formato simplificado para impressoras Braille domésticas.

## Limitações

- Letras limitadas a alfabeto básico (tabela Braille parcial).
- Exportação BRF simplificada, sem suporte a layouts complexos (futuro: integração com liblouis).
- Lições de teoria introdutórias; tópicos avançados (e.g., harmonia funcional) em desenvolvimento.
- Testes de acessibilidade simulados; validação com usuários reais recomendada.

## Melhorias Futuras

- Integração com **liblouis** para exportação BRF avançada.
- Expansão de lições (modos gregos, contraponto).
- Exercícios de composição guiada (e.g., melodia sobre progressão).
- Testes com músicos cegos para refinamento da interface.
- Suporte a polifonia complexa via music21j.
- Hospedagem em servidor dedicado para uso em oficinas culturais.

## Relevância para Projetos de Incentivo Cultural

**Braille VIPMusic** é um projeto alinhado aos objetivos de leis de incentivo à cultura, como a **Lei Rouanet** (Lei nº 8.313/1991), e editais estaduais/municipais, por sua capacidade de:

- **Democratizar o Acesso à Cultura**: Oferece uma ferramenta gratuita que capacita músicos cegos a participar de atividades culturais, atendendo ao artigo 2º da Lei Rouanet.
- **Promover Inclusão Social**: Garante acessibilidade para pessoas com deficiência visual, alinhado à **Lei Brasileira de Inclusão** (Lei nº 13.146/2015).
- **Formar Público**: Engaja músicos, educadores e comunidades em atividades musicais inclusivas, ampliando o alcance cultural.
- **Fortalecer a Identidade Cultural**: Preserva a musicografia Braille como expressão cultural da comunidade cega, conectando-a a práticas musicais contemporâneas.
- **Impactar Comunidades Vulneráveis**: Pode ser implementado em escolas públicas, ONGs e projetos sociais, beneficiando populações de baixa renda.

### Aplicações em Projetos Culturais
- **Oficinas de Musicografia Braille**: Cursos presenciais ou online para músicos cegos e educadores, usando **Braille VIPMusic** como ferramenta didática.
- **Eventos Culturais**: Apresentações de composições criadas por músicos cegos, exibidas em formatos acessíveis (Braille, áudio).
- **Parcerias com Instituições**: Colaboração com conservatórios, ONGs (e.g., Fundação Dorina Nowill) e escolas de música para ampliar o alcance.
- **Material Didático**: Produção de guias e partituras em Braille para distribuição gratuita em projetos culturais.

### Benefícios para Editais
- **Baixo Custo**: Como software de código aberto, reduz despesas com infraestrutura.
- **Escalabilidade**: Pode ser adotado em múltiplos contextos (escolas, ONGs, eventos).
- **Mensuração de Impacto**: Permite coletar dados de uso (e.g., número de partituras criadas, usuários engajados) para relatórios de prestação de contas.
- **Inovação Tecnológica**: Combina tecnologia (VexFlow, music21j, Tone.js) com acessibilidade, destacando-se em editais que valorizam inovação.

## Referências Bibliográficas

1. **Musicografia Braille**:
   - International Manual of Braille Music Notation. (1996). Library of Congress. Disponível em: <https://www.loc.gov/nls/braille>.
   - Conselho Brasileiro de Musicografia Braille. (2012). Manual de Musicografia Braille. Disponível em: <http://www.cbbm.org.br>.
   - Musibraille Project. (2025). Documentação Oficial. Disponível em: <http://www.musibraille.org>.

2. **Acessibilidade**:
   - W3C. (2018). Web Content Accessibility Guidelines (WCAG) 2.1. Disponível em: <https://www.w3.org/TR/WCAG21/>.
   - Nielsen, J. (2020). Accessibility for Users with Disabilities. Nielsen Norman Group. Disponível em: <https://www.nngroup.com/articles/accessibility/>.
   - Apple. (2025). VoiceOver Developer Guide. Disponível em: <https://developer.apple.com/accessibility/voiceover/>.

3. **Teoria Musical e Composição**:
   - Aldwell, E., & Schachter, C. (2010). *Harmony and Voice Leading* (4th ed.). Cengage Learning.
   - Kostka, S., & Payne, D. (2016). *Tonal Harmony* (8th ed.). McGraw-Hill Education.
   - Piston, W. (1987). *Harmony* (5th ed.). W.W. Norton & Company.

4. **Tecnologias**:
   - VexFlow Documentation. (2025). Disponível em: <https://www.vexflow.com>.
   - music21 Documentation. (2025). Disponível em: <http://web.mit.edu/music21/doc/>.
   - Tone.js Documentation. (2025). Disponível em: <https://tonejs.github.io>.
   - jsPDF Documentation. (2025). Disponível em: <https://parall.ax/products/jspdf>.

5. **Inclusão e Cultura**:
   - Lei Rouanet (Lei nº 8.313/1991). Disponível em: <http://www.planalto.gov.br>.
   - Lei Brasileira de Inclusão (Lei nº 13.146/2015). Disponível em: <http://www.planalto.gov.br>.
   - RNIB. (2023). Braille Music Resources. Royal National Institute of Blind People. Disponível em: <https://www.rnib.org.uk>.

## Como Contribuir

- **Desenvolvedores**: Fork o repositório, implemente melhorias (e.g., suporte a liblouis) e envie pull requests.
- **Educadores**: Teste a ferramenta em oficinas e envie feedback.
- **Músicos Cegos**: Experimente a ferramenta e sugira ajustes para usabilidade.
- **Projetos Culturais**: Integre **Braille VIPMusic** em oficinas e eventos inclusivos.

## Licença

**Braille VIPMusic** é distribuído sob a licença MIT, permitindo uso, modificação e distribuição gratuita, com atribuição aos autores originais.

## Contato

Para dúvidas, sugestões ou parcerias, envie um e-mail para [inserir e-mail de contato] ou abra uma issue no repositório GitHub.

---

**Braille VIPMusic**: Música acessível para todos, unindo tecnologia, inclusão e cultura.# braille-vipmusic
