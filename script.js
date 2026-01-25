const questions = [
  { q: "Evito conflitos para manter a paz.", type: 9 },
  { q: "Gosto de liderar e controlar situações.", type: 8 },
  { q: "Busco reconhecimento e sucesso.", type: 3 },
  { q: "Coloco as necessidades dos outros antes das minhas.", type: 2 },
  { q: "Tendo a me isolar quando estou sobrecarregado.", type: 5 },
  { q: "Sou crítico comigo e com os outros.", type: 1 },
  { q: "Evito dor buscando prazer e distração.", type: 7 },
  { q: "Sinto emoções profundas e intensas.", type: 4 },
  { q: "Me preocupo muito com segurança.", type: 6 }
];

let current = 0;
let scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};

const profiles = {
  9: {
    name: "Eneatipo 9 — Pacificador",
    strengths: "Empático, calmo, conciliador, estável emocionalmente.",
    weaknesses: "Evita conflitos, procrastina, se anula.",
    childhood: "Aprendeu que era mais seguro não incomodar e se adaptar.",
    pnl: "Padrão de evitação, dissociação e anestesia emocional.",
    estoicismo: "Precisa assumir responsabilidade pessoal e presença.",
    andragogia: "Aprende melhor com prática simples e constância.",
    growth: "Age com assertividade, expressa opinião, assume protagonismo.",
    stress: "Se isola, apaga desejos, entra em apatia.",
    exercise: "Todos os dias diga uma opinião que normalmente esconderia.",
    cta: "No PráticaMente você aprende a sair da inércia e agir com clareza."
  },

  8: {
    name: "Eneatipo 8 — Desafiador",
    strengths: "Forte, protetor, decisivo.",
    weaknesses: "Controlador, explosivo, dominante.",
    childhood: "Aprendeu que precisava ser forte para sobreviver.",
    pnl: "Padrão de ataque e hipercontrole.",
    estoicismo: "Virtude da temperança e autocontrole.",
    andragogia: "Aprende com desafios e ação.",
    growth: "Protege sem dominar.",
    stress: "Ataca e intimida.",
    exercise: "Respire e escute antes de reagir.",
    cta: "No PráticaMente você aprende liderança com presença."
  }
  // 👉 Depois eu te entrego os 9 completos
};

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  document.getElementById("progress-bar").style.width =
    (current / questions.length) * 100 + "%";
}

function answer(value) {
  const q = questions[current];
  scores[q.type] += value;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const topType = Object.keys(scores)
    .reduce((a,b)=> scores[a] > scores[b] ? a : b);

  const p = profiles[topType];

  document.getElementById("type-title").innerText = p.name;

  document.getElementById("report").innerHTML = `
    <h3>Pontos Fortes</h3><p>${p.strengths}</p>
    <h3>Pontos de Atenção</h3><p>${p.weaknesses}</p>
    <h3>Raiz na Infância</h3><p>${p.childhood}</p>
    <h3>Padrão Emocional (PNL)</h3><p>${p.pnl}</p>
    <h3>Virtude (Estoicismo)</h3><p>${p.estoicismo}</p>
    <h3>Como Você Aprende (Andragogia)</h3><p>${p.andragogia}</p>
    <h3>Quando Você Evolui</h3><p>${p.growth}</p>
    <h3>Quando Você Regride</h3><p>${p.stress}</p>
    <h3>Exercício PráticaMente</h3><p>${p.exercise}</p>
    <hr/>
    <p><strong>Importante:</strong> Este teste é gratuito.  
    O curso <strong>PráticaMente</strong> integra Eneagrama, PNL, Estoicismo e Andragogia para acelerar sua evolução real.</p>
    <p><strong>${p.cta}</strong></p>
  `;
}

function restart() {
  current = 0;
  scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  loadQuestion();
}

loadQuestion();
