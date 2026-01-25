const profiles = {
  1: {
    name: "O Reformador (Tipo 1)",
    pain: "Medo de errar e não ser digno de amor.",
    childhood: "Recebeu amor condicionado a se comportar certo.",
    pattern: "Autocrítica e rigidez emocional.",
    strengths: "Ética, disciplina, consistência.",
    stoic: "Aceitação da imperfeição (Amor Fati).",
    exercise: "Faça algo imperfeito de propósito hoje.",
    reflection: "Você não precisa ser perfeito para merecer amor.",
    cta_title: "Liberte-se do seu Juiz Interno",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  2: {
    name: "O Ajudador (Tipo 2)",
    pain: "Medo de ser abandonado e não amado.",
    childhood: "Aprendeu que precisava agradar para ser amado.",
    pattern: "Carência e doação excessiva.",
    strengths: "Empatia, carisma, sensibilidade.",
    stoic: "Autossuficiência emocional.",
    exercise: "Diga 'não' sem se explicar hoje.",
    reflection: "Você merece amor sem precisar se sacrificar.",
    cta_title: "Aprenda a dizer NÃO e se priorizar",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  3: {
    name: "O Realizador (Tipo 3)",
    pain: "Medo de não valer nada se não tiver sucesso.",
    childhood: "Amor condicionado ao seu desempenho e notas.",
    pattern: "Uso de máscaras de sucesso e workaholismo.",
    strengths: "Foco, execução, liderança.",
    stoic: "Sinceridade e Virtude Real.",
    exercise: "Faça algo bom hoje sem contar para ninguém (nem postar).",
    reflection: "Você não é o seu desempenho. Você basta.",
    cta_title: "Desbloqueie seu sucesso sem esgotamento",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  4: {
    name: "O Individualista (Tipo 4)",
    pain: "Sensação de ser defeituoso ou incompleto.",
    childhood: "Sentiu-se invisível ou diferente da família.",
    pattern: "Drama interno e comparação constante.",
    strengths: "Criatividade, profundidade emocional.",
    stoic: "Equanimidade (Razão sobre a Emoção).",
    exercise: "Crie uma rotina mínima e siga-a mesmo sem vontade.",
    reflection: "Você já é inteiro. Nada te falta agora.",
    cta_title: "Transforme sua sensibilidade em poder de ação",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  5: {
    name: "O Observador (Tipo 5)",
    pain: "Medo de não ser capaz e ser invadido.",
    childhood: "Invasão emocional; sentiu que os recursos eram escassos.",
    pattern: "Isolamento, avareza de energia e racionalização.",
    strengths: "Estratégia, foco, sabedoria.",
    stoic: "Coragem Prática (Ação).",
    exercise: "Faça uma ação desconfortável hoje sem planejar antes.",
    reflection: "Você aprende vivendo, não apenas pensando.",
    cta_title: "Saia da paralisia e transforme teoria em resultado",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  6: {
    name: "O Leal (Tipo 6)",
    pain: "Medo do mundo ser perigoso e incerto.",
    childhood: "Cresceu em ambiente de insegurança.",
    pattern: "Ansiedade, dúvida e hipervigilância.",
    strengths: "Lealdade, responsabilidade, prevenção.",
    stoic: "Fé racional e Coragem.",
    exercise: "Tome uma decisão hoje sem pedir a opinião de ninguém.",
    reflection: "Você já é perfeitamente capaz de se guiar.",
    cta_title: "Domine sua mente e acabe com a ansiedade",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  7: {
    name: "O Entusiasta (Tipo 7)",
    pain: "Medo da dor, do tédio e de ficar preso.",
    childhood: "Evitou dor emocional focando no futuro.",
    pattern: "Distração constante e fuga do presente.",
    strengths: "Otimismo, energia, visão, criatividade.",
    stoic: "Temperança e Atenção Plena.",
    exercise: "Fique em silêncio absoluto por 10 minutos hoje.",
    reflection: "Você não precisa fugir. A dor é passageira.",
    cta_title: "Ganhe foco absoluto sem perder a liberdade",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  8: {
    name: "O Desafiador (Tipo 8)",
    pain: "Medo de ser fraco, controlado ou traído.",
    childhood: "Traição ou ambiente hostil. Blindou-se cedo.",
    pattern: "Ataque preventivo e necessidade de controle.",
    strengths: "Coragem, liderança, proteção.",
    stoic: "Compaixão e Autodomínio.",
    exercise: "Peça ajuda para alguém hoje, mostrando vulnerabilidade.",
    reflection: "Ser sensível não é ser fraco. É a verdadeira força.",
    cta_title: "Seja um líder que inspira, não que intimida",
    cta_link: "https://seu-link-de-venda-aqui.com"
  },
  9: {
    name: "O Pacificador (Tipo 9)",
    pain: "Medo de não importar e gerar conflitos.",
    childhood: "Negligência emocional. Voz anulada.",
    pattern: "Evitação de atrito e 'narcotização' na rotina.",
    strengths: "Harmonia, escuta, empatia.",
    stoic: "Disciplina e Dever Moral.",
    exercise: "Escolha o restaurante/filme hoje. Diga 'Eu quero'.",
    reflection: "Sua voz importa. O mundo precisa da sua presença.",
    cta_title: "Saia da inércia e assuma o controle da sua vida",
    cta_link: "https://seu-link-de-venda-aqui.com"
  }
};

let scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
let currentQuestion = 0;

const questions = [
  { text: "Tenho medo de errar e ser criticado.", types: [1] },
  { text: "Tenho medo de ser abandonado.", types: [2] },
  { text: "Meu valor vem do que produzo.", types: [3] },
  { text: "Sinto que algo falta em mim.", types: [4] },
  { text: "Prefiro observar a participar.", types: [5] },
  { text: "Estou sempre esperando o pior.", types: [6] },
  { text: "Evito sentimentos dolorosos.", types: [7] },
  { text: "Não gosto de mostrar fraqueza.", types: [8] },
  { text: "Evito conflitos.", types: [9] }
];

function answerQuestion(value) {
  const q = questions[currentQuestion];
  q.types.forEach(t => scores[t] += value);

  currentQuestion++;
  updateProgress();

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    processResult(); // Chama a tela de carregamento
  }
}

function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].text;
  
  // Renderiza botões apenas uma vez no HTML, aqui usamos 3 ou 5 opções. 
  // Versão rápida: Concordo/Discordo
  document.getElementById("options").innerHTML = `
    <button class="answer-btn" onclick="answerQuestion(1)">Discordo totalmente</button>
    <button class="answer-btn" onclick="answerQuestion(3)">Neutro</button>
    <button class="answer-btn" onclick="answerQuestion(5)">Concordo totalmente</button>
  `;
}

function updateProgress() {
  const percent = ((currentQuestion) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

function processResult() {
  // Tela de "Processamento" Psicológico
  document.getElementById("quiz").innerHTML = `
    <div style="text-align: center; margin-top: 60px;">
      <h2 class="loading-text">Analisando seu mapa mental...</h2>
      <div class="spinner"></div>
      <p style="color: #aaa; margin-top: 20px;">Cruzando dados de infância, PNL e Estoicismo...</p>
    </div>
  `;

  // Aguarda 2.5 segundos para o Efeito UAU
  setTimeout(showResult, 2500);
}

function showResult() {
  let maxType = 1;
  for (let i = 2; i <= 9; i++) {
    if (scores[i] > scores[maxType]) maxType = i;
  }
  const p = profiles[maxType];

  // Injeta o Relatório Premium
  document.getElementById("quiz").innerHTML = `
    <div class="report-header">
      <span class="badge">RELATÓRIO CONFIDENCIAL</span>
      <h2>${p.name}</h2>
    </div>

    <div class="card card-red">
      <h3>🚨 A Raiz do Trauma</h3>
      <p><strong>Sua Ferida:</strong> ${p.childhood}</p>
      <p><strong>Padrão Oculto:</strong> ${p.pattern}</p>
    </div>

    <div class="card card-green">
      <h3>✨ Seu Superpoder</h3>
      <p>${p.strengths}</p>
    </div>

    <div class="card card-gold">
      <h3>🔑 A Chave Estoica</h3>
      <p><strong>Filosofia de Cura:</strong> ${p.stoic}</p>
      <p><strong>Prática Rápida:</strong> ${p.exercise}</p>
    </div>

    <p class="reflection">“${p.reflection}”</p>

    <div class="cta-box">
      <h3>Sua jornada não termina aqui.</h3>
      <p>Este teste mostrou seu padrão automático de estresse. O Método <strong>PráticaMente</strong> utiliza Andragogia, PNL e Estoicismo para curar essa ferida na prática, acelerando sua evolução.</p>
      <a href="${p.cta_link}" target="_blank" class="cta-btn">
        ${p.cta_title}
      </a>
    </div>
  `;
  
  window.scrollTo(0, 0);
}

// Inicia o Quiz
showQuestion();
