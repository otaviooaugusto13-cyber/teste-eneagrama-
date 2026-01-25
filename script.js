const questions = [
  { text: "Você sente que precisa estar no controle?", type: 8 },
  { text: "Você evita conflitos?", type: 9 },
  { text: "Você busca reconhecimento?", type: 3 },
  { text: "Você se sente diferente dos outros?", type: 4 },
  { text: "Você prefere observar a agir?", type: 5 },
  { text: "Você se preocupa muito com segurança?", type: 6 },
  { text: "Você foge da dor buscando prazer?", type: 7 },
  { text: "Você é muito crítico consigo?", type: 1 },
  { text: "Você coloca os outros antes de você?", type: 2 },

  // extras premium
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

const container = document.getElementById("questions");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p>${q.text}</p>
    <label><input type="radio" name="q${i}" value="1"> Discordo</label>
    <label><input type="radio" name="q${i}" value="2"> Neutro</label>
    <label><input type="radio" name="q${i}" value="3"> Concordo</label>
  `;
  container.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  let scores = {};

  questions.forEach((q, i) => {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) {
      scores[q.type] = (scores[q.type] || 0) + parseInt(val.value);
    }
  });

  let topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const p = profiles[topType];

  document.getElementById("profileTitle").innerText = `Seu Perfil: Tipo ${topType} – ${p.name}`;
  document.getElementById("profileDescription").innerText = `Medo central: ${p.core}`;

  document.getElementById("details").innerHTML = `
    <p><b>Ferida infantil:</b> ${p.childhood}</p>
    <p><b>Padrão:</b> ${p.pattern}</p>
    <p><b>Forças:</b> ${p.strengths.join(", ")}</p>
    <p><b>Fraquezas:</b> ${p.weaknesses.join(", ")}</p>
    <p><b>Virtude Estoica:</b> ${p.virtue}</p>
    <p><b>Exercício PráticaMente:</b> ${p.exercise}</p>
  `;

  renderMindMap(p);
  document.getElementById("result").classList.remove("hidden");
});

function renderMindMap(p) {
  const svg = `
  <svg width="600" height="400">
    <circle cx="300" cy="200" r="60" fill="#38bdf8"/>
    <text x="300" y="200" fill="#000" text-anchor="middle" dy="5">${p.name}</text>

    <text x="50" y="80" fill="#e5e7eb">Dor: ${p.childhood}</text>
    <text x="400" y="80" fill="#e5e7eb">Padrão: ${p.pattern}</text>
    <text x="50" y="320" fill="#e5e7eb">Forças: ${p.strengths[0]}</text>
    <text x="400" y="320" fill="#e5e7eb">Fraquezas: ${p.weaknesses[0]}</text>
  </svg>
  `;
  document.getElementById("mindmap").innerHTML = svg;
}

document.getElementById("unlockPdf").addEventListener("click", () => {
  const fb = document.getElementById("feedback").value;
  const cl = document.getElementById("clarity").value;
  const rec = document.getElementById("recommend").value;

  if (fb && cl && rec) {
    document.getElementById("pdfBlock").classList.remove("hidden");
    alert("PDF liberado! (simulação)");
  } else {
    alert("Responda tudo para liberar o PDF.");
  }
});

