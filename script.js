const questions = [
  // ENEATIPOS (18 perguntas: 2 por tipo)
  { text: "Busco a perfeição e me cobro por cada detalhe não resolvido.", type: 1 },
  { text: "Sinto que as coisas devem ser feitas do jeito certo ou não têm valor.", type: 1 },
  { text: "Coloco as necessidades dos outros acima das minhas com frequência.", type: 2 },
  { text: "Sinto que só sou digno de amor quando sou útil para alguém.", type: 2 },
  { text: "O sucesso e a imagem que projeto para o mundo são fundamentais.", type: 3 },
  { text: "Tenho pavor de falhar ou ser visto como alguém comum.", type: 3 },
  { text: "Sinto que sou fundamentalmente diferente e incompreendido.", type: 4 },
  { text: "Muitas vezes me perco em sentimentos de melancolia ou vazio.", type: 4 },
  { text: "Prefiro observar e analisar de longe do que me envolver emocionalmente.", type: 5 },
  { text: "Sinto que meu tempo e energia são limitados e preciso protegê-los.", type: 5 },
  { text: "Costumo prever o pior cenário para me sentir seguro e preparado.", type: 6 },
  { text: "Busco constantemente orientação ou sistemas de apoio confiáveis.", type: 6 },
  { text: "Procuro manter as opções abertas e evitar o tédio a todo custo.", type: 7 },
  { text: "Fujo de sentimentos negativos buscando novas experiências excitantes.", type: 7 },
  { text: "Sinto que preciso estar no controle para não ser dominado.", type: 8 },
  { text: "Expresso minha opinião de forma direta, sem medo de confrontos.", type: 8 },
  { text: "Prefiro ceder para manter a harmonia ao meu redor.", type: 9 },
  { text: "Tenho dificuldade em dizer não e acabo me esquecendo de mim.", type: 9 },

  // INSTINTOS (9 perguntas: 3 por instinto)
  { text: "Minha prioridade é garantir conforto, saúde e estabilidade financeira.", instinct: "sp" },
  { text: "Me preocupo excessivamente com recursos e manutenção da rotina.", instinct: "sp" },
  { text: "Sinto necessidade de ter um refúgio seguro para me retirar.", instinct: "sp" },
  { text: "Sinto necessidade de pertencer a grupos e ter um papel social claro.", instinct: "so" },
  { text: "Presto muita atenção às dinâmicas de poder e hierarquia nos grupos.", instinct: "so" },
  { text: "Me sinto realizado quando contribuo para uma causa coletiva.", instinct: "so" },
  { text: "Busco conexões intensas e profundas, quase de fusão, com pessoas.", instinct: "sx" },
  { text: "Tenho uma energia vibrante que busca entrega total nos interesses.", instinct: "sx" },
  { text: "Sinto atração por situações que desafiam meus limites emocionais.", instinct: "sx" }
];

const profiles = {
  1:{ title:"Tipo 1: O Reformador", origin:"Cresceu sob pressão crítica; sentiu que ser 'perfeito' era a única forma de ser aceito.", pnl:"Metaprogramas de 'Certo/Errado'. Foco em detalhes e procedimentos.", andragogia:"Aprende melhor com métodos lógicos e estruturados.", regression:"Torna-se irônico e ressentido sob estresse.", virtue:"Serenidade", evolution:"Integrar o prazer e a alegria do Tipo 7.", exercise:"Realize uma tarefa 'imperfeita' de propósito hoje." },
  2:{ title:"Tipo 2: O Ajudador", origin:"Aprendeu que precisava ser útil para ganhar afeto; nega as próprias necessidades.", pnl:"Foco Externo (O Outro). Leitura de pistas emocionais.", andragogia:"Evolui em ambientes colaborativos.", regression:"Torna-se manipulador e cobrador de gratidão.", virtue:"Humildade", evolution:"Conectar-se com a profundidade do Tipo 4.", exercise:"Diga 'não' para um pedido sem dar justificativas." },
  3:{ title:"Tipo 3: O Realizador", origin:"Valorizado pelo desempenho e vitórias, não por quem era.", pnl:"Foco em metas. Metaprograma 'Rumo a'.", andragogia:"Aprende com pragmatismo e foco em resultados.", regression:"Entra em apatia e paralisia total.", virtue:"Veracidade", evolution:"Desenvolver a lealdade e o grupo do Tipo 6.", exercise:"Passe 1 hora sem falar sobre suas conquistas para ninguém." },
  4:{ title:"Tipo 4: O Individualista", origin:"Sentiu-se fundamentalmente diferente ou abandonado emocionalmente.", pnl:"Foco no que falta. Filtro de 'Exceção'.", andragogia:"Aprendizado baseado em significado emocional.", regression:"Isolamento e vitimismo profundo.", virtue:"Equanimidade", evolution:"Integrar a disciplina e rotina do Tipo 1.", exercise:"Siga uma agenda rígida hoje independente do seu humor." },
  5:{ title:"Tipo 5: O Investigador", origin:"Sentiu invasão de privacidade; aprendeu a se isolar para preservar energia.", pnl:"Dissociação emocional profunda.", andragogia:"Aprende como autodidata; busca competência total.", regression:"Fuga para distrações inúteis ou fantasias.", virtue:"Não-apego", evolution:"Integrar a ação e o poder do Tipo 8.", exercise:"Compartilhe um sentimento pessoal antes de dar uma opinião técnica." },
  6:{ title:"Tipo 6: O Leal", origin:"Ambiente de infância instável; busca segurança contra ameaças externas.", pnl:"Cenários de 'Pior Caso'. Foco em riscos.", andragogia:"Busca segurança técnica e validação de especialistas.", regression:"Torna-se impulsivo e arrogante para mascarar o medo.", virtue:"Coragem", evolution:"Integrar a paz e o relaxamento do Tipo 9.", exercise:"Tome uma decisão sem pedir a aprovação de ninguém." },
  7:{ title:"Tipo 7: O Entusiasta", origin:"Fuga de dores ou privações na infância; busca estímulo constante.", pnl:"Reframing positivo compulsivo.", andragogia:"Aprende através da experimentação lúdica.", regression:"Torna-se ranzinza, crítico e focado em detalhes.", virtue:"Temperança", evolution:"Integrar o foco e a profundidade do Tipo 5.", exercise:"Fique em silêncio por 15 minutos apenas observando sua respiração." },
  8:{ title:"Tipo 8: O Desafiador", origin:"Teve que ser forte cedo; sentiu que a vulnerabilidade era perigosa.", pnl:"Metaprogramas de controle e intensidade.", andragogia:"Aprende através de desafios reais e liderança.", regression:"Torna-se calculista e retraído (falsa calma).", virtue:"Inocência", evolution:"Integrar o cuidado e a empatia do Tipo 2.", exercise:"Peça ajuda para uma tarefa que você sabe fazer sozinho." },
  9:{ title:"Tipo 9: O Pacificador", origin:"Sentiu que sua presença não importava; evitou conflitos para ser aceito.", pnl:"Filtro de Harmonia Externa. Negação da própria raiva.", andragogia:"Aprende por imersão e ambientes calmos.", regression:"Ansiedade extrema e preocupação obsessiva.", virtue:"Ação Consciente", evolution:"Integrar a proatividade e foco do Tipo 3.", exercise:"Dê sua opinião contrária em uma conversa hoje mesmo que cause tensão." }
};

let currentQ = 0;
let scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
let instinctScores = {sp:0,so:0,sx:0};

function loadQuestion() {
  const q = questions[currentQ];
  const textElem = document.getElementById("question-text");
  textElem.style.opacity = 0;
  setTimeout(() => {
    textElem.innerText = q.text;
    textElem.style.opacity = 1;
  }, 200);
  
  const progress = (currentQ / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-text").innerText = `Análise ${currentQ + 1} de 27`;
}

function answer(val) {
  const q = questions[currentQ];
  if (q.type) scores[q.type] += val;
  if (q.instinct) instinctScores[q.instinct] += val;

  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showLoading();
  }
}

function showLoading() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");
  setTimeout(calculateResults, 2500);
}

function calculateResults() {
  document.getElementById("loading-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  const mainType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const p = profiles[mainType];

  // Asa (Wing)
  const left = mainType == 1 ? 9 : parseInt(mainType) - 1;
  const right = mainType == 9 ? 1 : parseInt(mainType) + 1;
  const wing = scores[left] > scores[right] ? left : right;

  // Instinto
  const instinct = Object.keys(instinctScores).reduce((a, b) => instinctScores[a] > instinctScores[b] ? a : b);
  const instLabels = {sp: "Autopreservação", so: "Social", sx: "Sexual/Intenso"};

  document.getElementById("res-title").innerText = p.title;
  document.getElementById("res-wing").innerText = `Asa Dominante: ${wing}`;
  document.getElementById("res-instinct").innerText = `Instinto: ${instLabels[instinct]}`;
  
  document.getElementById("res-origin").innerText = p.origin;
  document.getElementById("res-regression").innerText = p.regression;
  document.getElementById("res-pnl").innerText = p.pnl;
  document.getElementById("res-andragogia").innerText = p.andragogia;
  document.getElementById("res-virtue").innerText = p.virtue;
  document.getElementById("res-evolution").innerText = p.evolution;
  document.getElementById("res-exercise").innerText = p.exercise;

  window.scrollTo({top: 0, behavior: 'smooth'});
}

function unlockPDF() {
  const text = document.getElementById("fb-text").value;
  if (text.length < 10) {
    alert("Por favor, conte-nos um pouco mais sobre sua experiência para liberar o PDF.");
    return;
  }
  alert("Depoimento enviado! Gerando seu Dossiê PDF personalizado...");
  // Lógica de download real entraria aqui
}

loadQuestion();
