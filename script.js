const questions = [
  { text: "Você sente que precisa estar no controle?", type: 8 },
  { text: "Você evita conflitos mesmo quando algo me incomoda.", type: 9 },
  { text: "Você busca reconhecimento?", type: 3 },
  { text: "Você se sente diferente dos outros?", type: 4 },
  { text: "Você prefere observar a agir?", type: 5 },
  { text: "Você se preocupa muito com segurança?", type: 6 },
  { text: "Você foge da dor buscando prazer?", type: 7 },
  { text: "Você é muito crítico consigo?", type: 1 },
  { text: "Você coloca os outros antes de você?", type: 2 },
  { text: "Quando criança, sentiu que precisava amadurecer rápido?", type: 1 },
  { text: "Você teme ser abandonado?", type: 6 },
  { text: "Você se fecha emocionalmente?", type: 5 },
  { text: "Você sente que precisa ser forte sempre?", type: 8 },
  { text: "Você sente vazio quando não é reconhecido?", type: 3 },
  { text: "Você se sente inadequado com frequência?", type: 4 },
  { text: "Você evita sentir tristeza profunda?", type: 7 },
  { text: "Você engole raiva para manter paz?", type: 9 },
  { text: "Você sente que só é amado quando ajuda?", type: 2 }
];

const profiles = {
  1: {
    name: "Perfeccionista",
    core: "Medo de ser errado",
    childhood: "Crítica excessiva",
    pattern: "Autocrítica e rigidez",
    strengths: ["Ética", "Disciplina", "Foco"],
    weaknesses: ["Rigidez", "Culpa", "Raiva reprimida"],
    regression: "Explosões emocionais",
    evolution: "Aceitação",
    virtue: "Serenidade",
    exercise: "Errar de propósito em algo pequeno"
  },
  2: {
    name: "Ajudador",
    core: "Medo de não ser amado",
    childhood: "Amor condicionado",
    pattern: "Autoabandono",
    strengths: ["Empatia", "Cuidado"],
    weaknesses: ["Carência", "Controle"],
    regression: "Manipulação",
    evolution: "Autovalor",
    virtue: "Humildade",
    exercise: "Dizer não uma vez hoje"
  },
  3: {
    name: "Executor",
    core: "Medo de fracassar",
    childhood: "Valorizado por performance",
    pattern: "Máscaras",
    strengths: ["Resultado", "Foco"],
    weaknesses: ["Vazio", "Workaholic"],
    regression: "Desconexão emocional",
    evolution: "Autenticidade",
    virtue: "Verdade",
    exercise: "Mostrar vulnerabilidade"
  },
  4: {
    name: "Sensível",
    core: "Medo de não ter identidade",
    childhood: "Comparação",
    pattern: "Drama",
    strengths: ["Criatividade"],
    weaknesses: ["Inveja", "Vitimismo"],
    regression: "Isolamento",
    evolution: "Gratidão",
    virtue: "Equanimidade",
    exercise: "Ação objetiva hoje"
  },
  5: {
    name: "Observador",
    core: "Medo de ser incapaz",
    childhood: "Invasão emocional",
    pattern: "Isolamento",
    strengths: ["Análise"],
    weaknesses: ["Evitação"],
    regression: "Fuga",
    evolution: "Coragem",
    virtue: "Confiança",
    exercise: "Agir sem planejar demais"
  },
  6: {
    name: "Leal",
    core: "Medo de ficar sem apoio",
    childhood: "Instabilidade",
    pattern: "Ansiedade",
    strengths: ["Lealdade"],
    weaknesses: ["Dúvida"],
    regression: "Paralisia",
    evolution: "Autoconfiança",
    virtue: "Coragem",
    exercise: "Decidir sem pedir opinião"
  },
  7: {
    name: "Entusiasta",
    core: "Medo da dor",
    childhood: "Fuga emocional",
    pattern: "Dispersão",
    strengths: ["Otimismo"],
    weaknesses: ["Procrastinação"],
    regression: "Impulsividade",
    evolution: "Presença",
    virtue: "Temperança",
    exercise: "Ficar no desconforto"
  },
  8: {
    name: "Desafiador",
    core: "Medo de ser controlado",
    childhood: "Traição ou abuso",
    pattern: "Dominação",
    strengths: ["Força"],
    weaknesses: ["Agressividade"],
    regression: "Tirania",
    evolution: "Proteção",
    virtue: "Inocência",
    exercise: "Pedir ajuda"
  },
  9: {
    name: "Pacificador",
    core: "Medo de conflito",
    childhood: "Invisibilidade",
    pattern: "Entorpecimento",
    strengths: ["Mediação"],
    weaknesses: ["Procrastinação"],
    regression: "Inércia",
    evolution: "Assertividade",
    virtue: "Ação",
    exercise: "Iniciar algo hoje"
  }
};

let currentQuestionIndex = 0;
let scores = {};

function showQuestion() {
  const q = questions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  
  // Efeito de transição simples
  questionText.style.opacity = 0;
  setTimeout(() => {
    questionText.innerText = q.text;
    questionText.style.opacity = 1;
  }, 200);

  const progress = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function answer(val) {
  const q = questions[currentQuestionIndex];
  scores[q.type] = (scores[q.type] || 0) + val;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  let topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const p = profiles[topType];

  // Preenchimento do Relatório com todos os campos do seu original
  document.getElementById("profile-name").innerText = `Tipo ${topType} — ${p.name}`;
  document.getElementById("strengths").innerText = p.strengths.join(", ");
  document.getElementById("weaknesses").innerText = p.weaknesses.join(", ");
  document.getElementById("childhood").innerText = p.childhood;
  document.getElementById("regression").innerText = p.regression;
  document.getElementById("evolution").innerText = p.evolution;
  document.getElementById("exercise").innerText = p.exercise;

  // Campos extras (Placeholder para PNL/Andragogia se quiser expandir)
  if(document.getElementById("pnl")) document.getElementById("pnl").innerText = `Padrão Mental: ${p.pattern}`;
  if(document.getElementById("estoicismo")) document.getElementById("estoicismo").innerText = `Virtude Estoica: ${p.virtue}`;

  renderMindMap(p);
}

function renderMindMap(p) {
  const svg = `
  <svg width="100%" height="300" viewBox="0 0 600 400">
    <circle cx="300" cy="200" r="60" fill="#d4af37" />
    <text x="300" y="205" fill="#000" text-anchor="middle" font-weight="bold" font-family="Arial">${p.name}</text>
    <line x1="300" y1="140" x2="300" y2="80" stroke="#d4af37" stroke-width="2" />
    <text x="300" y="60" fill="#e5e7eb" text-anchor="middle" font-size="14">Raiz: ${p.childhood}</text>
    <line x1="360" y1="200" x2="450" y2="200" stroke="#d4af37" stroke-width="2" />
    <text x="460" y="205" fill="#e5e7eb" text-anchor="start" font-size="14">Padrão: ${p.pattern}</text>
    <line x1="300" y1="260" x2="300" y2="320" stroke="#d4af37" stroke-width="2" />
    <text x="300" y="350" fill="#e5e7eb" text-anchor="middle" font-size="14">Virtude: ${p.virtue}</text>
  </svg>`;
  document.getElementById("mindmap").innerHTML = svg;
}

// Inicialização
document.addEventListener("DOMContentLoaded", showQuestion);


