const questions = [
  { text: "Evito conflitos mesmo quando algo me incomoda.", type: 9 },
  { text: "Gosto de ajudar as pessoas e me sinto responsável por elas.", type: 2 },
  { text: "Busco reconhecimento pelo que realizo.", type: 3 },
  { text: "Tenho padrões altos e me cobro muito.", type: 1 },
  { text: "Prefiro observar antes de agir.", type: 5 },
  { text: "Fico ansioso com o futuro.", type: 6 },
  { text: "Busco novas experiências constantemente.", type: 7 },
  { text: "Gosto de liderar e assumir controle.", type: 8 },
  { text: "Me sinto diferente das outras pessoas.", type: 4 }
];

let index = 0;
let scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};

const profiles = {
  9: {
    name: "Eneatipo 9 — Pacificador",
    strengths: "Calmo, conciliador, empático, estável emocionalmente.",
    weaknesses: "Evita conflitos, procrastina, se anula.",
    growth: "Desenvolver assertividade e ação.",
    exercise: "Durante 7 dias, expresse sua opinião em uma situação desconfortável.",
    cta: "Você tem enorme potencial de liderança serena. No curso PráticaMente você aprenderá, com PNL, Estoicismo e Eneagrama aplicado, a sair da inércia e assumir sua força interior."
  }
};

function loadQuestion() {
  const q = questions[index];
  document.getElementById("question-text").innerText = q.text;
  document.getElementById("progress-bar").style.width =
    ((index / questions.length) * 100) + "%";
}

function answer(value) {
  const type = questions[index].type;
  scores[type] += value;
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  let topType = Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b);
  const p = profiles[topType];

  document.getElementById("profile-name").innerText = p.name;
  document.getElementById("strengths").innerText = p.strengths;
  document.getElementById("weaknesses").innerText = p.weaknesses;
  document.getElementById("growth").innerText = p.growth;
  document.getElementById("exercise").innerText = p.exercise;
  document.getElementById("cta-text").innerText = p.cta;

  document.getElementById("progress-bar").style.width = "100%";
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Relatório PráticaMente", 20, 20);
  doc.text(document.getElementById("profile-name").innerText, 20, 35);
  doc.text("Pontos Fortes:", 20, 50);
  doc.text(document.getElementById("strengths").innerText, 20, 60);
  doc.text("Pontos de Atenção:", 20, 80);
  doc.text(document.getElementById("weaknesses").innerText, 20, 90);
  doc.text("Onde Evoluir:", 20, 110);
  doc.text(document.getElementById("growth").innerText, 20, 120);
  doc.text("Exercício:", 20, 140);
  doc.text(document.getElementById("exercise").innerText, 20, 150);

  doc.save("Relatorio-PraticaMente.pdf");
}

loadQuestion();