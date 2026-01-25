const questions = [
  { text:"Costumo me cobrar excessivamente.", type:1 },
  { text:"Coloco os outros acima de mim.", type:2 },
  { text:"Tenho medo de fracassar.", type:3 },
  { text:"Sinto que sou diferente.", type:4 },
  { text:"Prefiro observar do que agir.", type:5 },
  { text:"Busco segurança o tempo todo.", type:6 },
  { text:"Evito sentimentos negativos.", type:7 },
  { text:"Gosto de estar no controle.", type:8 },
  { text:"Evito conflitos.", type:9 },

  { text:"Tenho dificuldade em relaxar.", type:1 },
  { text:"Tenho medo de ser rejeitado.", type:2 },
  { text:"Minha imagem importa muito.", type:3 },
  { text:"Sinto vazio existencial.", type:4 },
  { text:"Isolo-me quando pressionado.", type:5 },
  { text:"Desconfio de intenções.", type:6 },
  { text:"Fico entediado fácil.", type:7 },
  { text:"Detesto sentir-me fraco.", type:8 },
  { text:"Adio decisões difíceis.", type:9 },

  { text:"Prezo conforto e estabilidade.", instinct:"sp" },
  { text:"Busco pertencimento em grupos.", instinct:"so" },
  { text:"Busco intensidade emocional.", instinct:"sx" }
];

let currentQuestion=0;
let scores={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
let instinctScores={sp:0,so:0,sx:0};

function loadQuestion(){
  document.getElementById("question-text").innerText=questions[currentQuestion].text;
  document.getElementById("progress-bar").style.width=((currentQuestion/questions.length)*100)+"%";
}

function answer(val){
  const q=questions[currentQuestion];
  if(q.type) scores[q.type]+=val;
  if(q.instinct) instinctScores[q.instinct]+=val;
  currentQuestion++;
  currentQuestion<questions.length?loadQuestion():showResult();
}

function detectWing(type){
  const left=type==1?9:type-1;
  const right=type==9?1:type+1;
  return scores[left]>scores[right]?`${type}w${left}`:`${type}w${right}`;
}

function detectInstinct(){
  return Object.keys(instinctScores)
    .reduce((a,b)=>instinctScores[a]>instinctScores[b]?a:b);
}

function showResult(){
  document.getElementById("question-card").classList.add("hidden");
  document.getElementById("result-card").classList.remove("hidden");

  const mainType=Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b);
  const wing=detectWing(mainType);
  const instinct=detectInstinct();
  const p=profiles[mainType];

  document.getElementById("result-type").innerText=p.title;
  document.getElementById("wing").innerText="Asa dominante: "+wing;
  document.getElementById("instinct").innerText="Instinto dominante: "+instinct.toUpperCase();
  document.getElementById("origin").innerText=p.origin;
  document.getElementById("trauma").innerText=p.trauma;
  document.getElementById("regression").innerText=p.regression;
  document.getElementById("evolution").innerText=p.evolution;
  document.getElementById("strengths").innerText=p.strengths;
  document.getElementById("praticamente").innerText=p.praticamente;

  document.getElementById("progress-bar").style.width="100%";
}

function generatePDF(){
  alert("Relatório Premium + Mind Map será gerado aqui.");
}

loadQuestion();

const profiles = {
  1:{
    title:"Eneatipo 1 — O Reformador",
    origin:"Cresceu sentindo que precisava ser perfeito para ser aceito.",
    trauma:"Crítica constante ou exigência excessiva.",
    regression:"Raiva reprimida, rigidez.",
    evolution:"Aceitar imperfeições.",
    strengths:"Disciplina, ética.",
    praticamente:"PNL: flexibilizar padrões. Estoicismo: aceitar a realidade."
  },
  2:{
    title:"Eneatipo 2 — O Ajudador",
    origin:"Aprendeu que precisava ser útil para ser amado.",
    trauma:"Carência emocional.",
    regression:"Dependência afetiva.",
    evolution:"Aprender a pedir.",
    strengths:"Empatia.",
    praticamente:"PNL: autoestima."
  },
  3:{
    title:"Eneatipo 3 — O Realizador",
    origin:"Valorizado apenas por resultados.",
    trauma:"Vergonha do fracasso.",
    regression:"Workaholic.",
    evolution:"Autenticidade.",
    strengths:"Produtividade.",
    praticamente:"Estoicismo: valor intrínseco."
  },
  4:{
    title:"Eneatipo 4 — O Individualista",
    origin:"Sentiu-se diferente e incompreendido.",
    trauma:"Abandono emocional.",
    regression:"Melancolia.",
    evolution:"Presença.",
    strengths:"Criatividade.",
    praticamente:"PNL: reframe emocional."
  },
  5:{
    title:"Eneatipo 5 — O Investigador",
    origin:"Aprendeu a se isolar.",
    trauma:"Invasão emocional.",
    regression:"Apatia.",
    evolution:"Engajamento.",
    strengths:"Intelecto.",
    praticamente:"Estoicismo: coragem prática."
  },
  6:{
    title:"Eneatipo 6 — O Leal",
    origin:"Ambiente instável.",
    trauma:"Insegurança.",
    regression:"Ansiedade.",
    evolution:"Confiança.",
    strengths:"Lealdade.",
    praticamente:"PNL: ancoragem."
  },
  7:{
    title:"Eneatipo 7 — O Entusiasta",
    origin:"Fuga da dor.",
    trauma:"Privação.",
    regression:"Impulsividade.",
    evolution:"Presença.",
    strengths:"Otimismo.",
    praticamente:"Estoicismo: aceitar desconforto."
  },
  8:{
    title:"Eneatipo 8 — O Desafiador",
    origin:"Teve que se proteger cedo.",
    trauma:"Vulnerabilidade.",
    regression:"Agressividade.",
    evolution:"Abertura emocional.",
    strengths:"Liderança.",
    praticamente:"PNL: vulnerabilidade."
  },
  9:{
    title:"Eneatipo 9 — O Pacificador",
    origin:"Conflitos familiares.",
    trauma:"Negligência.",
    regression:"Apatia.",
    evolution:"Ação.",
    strengths:"Harmonia.",
    praticamente:"Estoicismo: responsabilidade."
  }
};
