// O questionário pode ter quantas perguntas você quiser. 
// Aponte a qual "type" do eneagrama ela se refere.
const questions = [
  { q: "Evito conflitos para manter a paz e odeio pressão.", type: 9 },
  { q: "Gosto de liderar, tomar a frente e controlar situações.", type: 8 },
  { q: "Busco reconhecimento, sucesso e odeio fracassar.", type: 3 },
  { q: "Coloco as necessidades dos outros antes das minhas.", type: 2 },
  { q: "Tendo a me isolar e guardar energia quando estou sobrecarregado.", type: 5 },
  { q: "Sou muito crítico comigo mesmo e gosto de tudo certo.", type: 1 },
  { q: "Odeio o tédio e a dor, busco sempre novas opções e prazer.", type: 7 },
  { q: "Sinto que sou diferente dos outros e vivo emoções profundas.", type: 4 },
  { q: "Minha mente sempre imagina o pior cenário para se prevenir.", type: 6 }
];

let current = 0;
let scores = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};

const profiles = {
  1: {
    name: "Eneatipo 1 — O Reformador",
    strengths: "Íntegro, organizado, ético e busca a melhoria contínua.",
    weaknesses: "Crítico extremo, rigidez, raiva reprimida e ressentimento.",
    childhood: "Sentiu que o amor dependia de não cometer erros. O trauma está na cobrança: 'eu não posso errar ou serei rejeitado'.",
    pnl: "Diálogo interno dominado por um 'juiz implacável'. Foco visual sempre no erro.",
    andragogia: "Aprende com regras lógicas, mas precisa de flexibilidade.",
    estoicismo: "Precisa da virtude da Aceitação (Amor Fati). Controlar a si, não ao mundo.",
    regression: "Torna-se melancólico, sente-se incompreendido e isolado. A raiva vira mágoa silenciosa.",
    evolution: "Evolui quando relaxa, aceita o bom humor e a imperfeição (movimento para o Tipo 7).",
    exercise: "💡 Exercício Gratuito: Faça algo de propósito de forma 'imperfeita' hoje e veja que o mundo não vai acabar.",
    cta: "Você já sabe que a cobrança excessiva te trava. No PráticaMente, você vai reprogramar seu juiz interno."
  },

  2: {
    name: "Eneatipo 2 — O Ajudante",
    strengths: "Empático, generoso, caloroso e intuitivo para as necessidades alheias.",
    weaknesses: "Dificuldade em dizer 'não', negligência de si mesmo e orgulho oculto.",
    childhood: "Aprendeu que para ser amado precisava ser útil. O trauma é o medo da rejeição.",
    pnl: "Foco de atenção na 'referência externa'. Ancora o próprio valor na gratidão do outro.",
    andragogia: "Aprende melhor conectando-se com pessoas e vendo a utilidade prática de ajudar.",
    estoicismo: "Precisa da Autossuficiência. Depender da aprovação alheia é escravidão emocional.",
    regression: "Fica agressivo, culpabilizador e cobra a 'conta' de tudo o que fez (movimento para o Tipo 8).",
    evolution: "Evolui quando cuida de si primeiro e aceita receber ajuda (movimento para o Tipo 4).",
    exercise: "💡 Exercício Gratuito: Diga 'não' para um pequeno pedido hoje. Cuide de si primeiro.",
    cta: "Cuidar dos outros drenou sua energia. O PráticaMente vai te ensinar a se priorizar sem culpa."
  },

  3: {
    name: "Eneatipo 3 — O Realizador",
    strengths: "Focado, eficiente, adaptável, inspirador e orientado a resultados.",
    weaknesses: "Workaholic, vaidade, medo do fracasso e desconexão emocional.",
    childhood: "Sentiu que só era valorizado pelo que fazia, não pelo que era. Ferida de desvalorização pessoal.",
    pnl: "Excelente em modelagem, mas usa máscaras sociais. Foco no que gera status.",
    andragogia: "Aprende rápido e de forma competitiva, focado na aplicação prática.",
    estoicismo: "Focar na Verdadeira Virtude interior. 'A verdadeira felicidade é não depender do futuro'.",
    regression: "Paralisa, torna-se apático e desiste de projetos (movimento para o Tipo 9).",
    evolution: "Evolui quando diminui o ritmo e colabora sem querer o palco principal (movimento para o Tipo 6).",
    exercise: "💡 Exercício Gratuito: Passe um dia sem falar de suas conquistas. Conecte-se pela presença.",
    cta: "O PráticaMente vai te ensinar a diferenciar o que é sucesso real da mera aprovação social."
  },

  4: {
    name: "Eneatipo 4 — O Individualista",
    strengths: "Criativo, profundo, autêntico, sensível e empático.",
    weaknesses: "Vitimismo, melancolia, inveja e foco no que está faltando.",
    childhood: "Sentiu-se abandonado ou diferente. Crença: 'há algo de errado comigo'.",
    pnl: "Filtro de exclusão para o que é bom e inclusão para o que falta. Amplifica a saudade.",
    andragogia: "Aprende através da estética e do significado. Odeia o superficial.",
    estoicismo: "Precisa da Razão sobre a Emoção. Focar no dever, não na oscilação emocional.",
    regression: "Torna-se carente, implorando ajuda e assumindo a posição de vítima (movimento para o Tipo 2).",
    evolution: "Evolui quando estabelece rotinas, disciplina e objetividade (movimento para o Tipo 1).",
    exercise: "💡 Exercício Gratuito: Liste 5 coisas boas no seu 'agora' e agradeça sem olhar a grama do vizinho.",
    cta: "Transforme sua sensibilidade em poder. No PráticaMente, ajustamos seu foco da falta para a abundância."
  },

  5: {
    name: "Eneatipo 5 — O Investigador",
    strengths: "Analítico, focado, sábio e capaz de manter a calma no caos.",
    weaknesses: "Isolamento, avareza de energia, frieza e paralisia por análise.",
    childhood: "Sentiu que o mundo era invasivo. Trauma: medo de ser esgotado pelos outros.",
    pnl: "Mestre em 'dissociação'. Afasta-se mentalmente do corpo para evitar demandas.",
    andragogia: "Aprende sozinho, com pesquisa aprofundada e no próprio ritmo.",
    estoicismo: "Precisa da Coragem Prática. Conhecimento sem ação não tem valor estoico.",
    regression: "Fica disperso, agitado e busca distrações superficiais (movimento para o Tipo 7).",
    evolution: "Evolui quando sai da mente para o corpo e assume a liderança (movimento para o Tipo 8).",
    exercise: "💡 Exercício Gratuito: Compartilhe um conhecimento hoje ou faça uma atividade puramente física.",
    cta: "Você já tem muita teoria. O PráticaMente é o passo a passo para transformar teoria em resultados práticos."
  },

  6: {
    name: "Eneatipo 6 — O Leal",
    strengths: "Leal, responsável, precavido e ótimo solucionador de problemas.",
    weaknesses: "Ansiedade, desconfiança, procrastinação por dúvida e pessimismo.",
    childhood: "Cresceu em ambiente instável. Trauma: medo de não ter apoio ou segurança.",
    pnl: "Mente cria piores cenários ('e se der errado?'). PNL no reverso: programando ansiedade.",
    andragogia: "Aprende com métodos testados e previsíveis, onde sinta segurança.",
    estoicismo: "Premeditatio Malorum: prever o mal para se preparar, não para paralisar.",
    regression: "Torna-se arrogante e focado em conquistas vazias para disfarçar o medo (movimento para o Tipo 3).",
    evolution: "Evolui quando relaxa, confia no fluxo da vida e acha a paz interior (movimento para o Tipo 9).",
    exercise: "💡 Exercício Gratuito: Sempre que pensar 'e se der errado?', substitua por 'e se der certo?'.",
    cta: "A ansiedade tem te paralisado. O PráticaMente vai te dar a segurança para tomar decisões com confiança."
  },

  7: {
    name: "Eneatipo 7 — O Entusiasta",
    strengths: "Otimista, criativo, versátil e cheio de energia.",
    weaknesses: "Falta de foco, impulsividade, dificuldade de lidar com a dor (fuga).",
    childhood: "Desconectou-se na infância. Trauma: medo da dor e do tédio. 'Preciso me distrair'.",
    pnl: "Mestre em 'ressignificação' rápida e fuga da dor para o prazer (Cinestésico/Visual).",
    andragogia: "Aprende com estímulos variados, gamificação e sem rotinas chatas.",
    estoicismo: "Precisa da Temperança e Atenção Plena (Prosoche). Estar presente, mesmo na dor.",
    regression: "Torna-se crítico, rígido e moralista, perdendo a alegria (movimento para o Tipo 1).",
    evolution: "Evolui quando foca em profundidade e aceita o silêncio (movimento para o Tipo 5).",
    exercise: "💡 Exercício Gratuito: Ao sentir tédio em uma tarefa, respire e fique no desconforto por 5 minutos.",
    cta: "Aprenda a focar sua energia gigantesca. No PráticaMente você ganha disciplina sem perder a liberdade."
  },

  8: {
    name: "Eneatipo 8 — O Desafiador",
    strengths: "Forte, protetor, decisivo, autoconfiante e direto.",
    weaknesses: "Controlador, explosivo, evita vulnerabilidade, excesso de força.",
    childhood: "Ambiente onde 'os fortes sobrevivem'. Trauma da traição. Blindou-se emocionalmente.",
    pnl: "Âncoras de agressividade como defesa e negação da dor. Mapa focado no poder.",
    andragogia: "Aprende através de desafios e direto ao ponto. Respeita autoridade real.",
    estoicismo: "Justiça e Autodomínio. A verdadeira força não é controlar os outros, mas a si mesmo.",
    regression: "Retrai-se, torna-se paranoico e isola-se em segredo (movimento para o Tipo 5).",
    evolution: "Evolui quando usa sua força para proteger de forma generosa (movimento para o Tipo 2).",
    exercise: "💡 Exercício Gratuito: Escute alguém hoje sem interromper ou tentar resolver o problema.",
    cta: "Grandes líderes inspiram, não apenas comandam. Una a força do 8 com a inteligência do Método PráticaMente."
  },

  9: {
    name: "Eneatipo 9 — O Pacificador",
    strengths: "Empático, calmo, conciliador e diplomático.",
    weaknesses: "Procrastinação, teimosia passiva, 'anestesia' (perde-se em rotinas).",
    childhood: "Sentiu que sua presença causava brigas. Trauma: 'minha voz gera conflito'.",
    pnl: "Padrão de 'narcotização'. Usa a dissociação para manter a paz interior.",
    andragogia: "Aprende sem pressão, com passo a passo claro e suporte constante.",
    estoicismo: "Precisa do Dever Moral. A omissão é um vício. Assuma a responsabilidade.",
    regression: "Ansiedade acumulada explode em medo e paralisação total (movimento para o Tipo 6).",
    evolution: "Evolui quando define metas e assume o protagonismo (movimento para o Tipo 3).",
    exercise: "💡 Exercício Gratuito: Hoje, dê sua opinião em algo. Fale 'eu quero' em vez de 'tanto faz'.",
    cta: "O mundo precisa da sua voz. No PráticaMente, você sai da inércia e aprende a se posicionar."
  }
};

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question-text").innerText = q.q;
  // Atualiza a barra de progresso
  const progressPercent = ((current) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progressPercent + "%";
}

function answer(value) {
  const q = questions[current];
  scores[q.type] += value;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    // Ao final, completa a barra em 100%
    document.getElementById("progress-bar").style.width = "100%";
    setTimeout(showResult, 400); // Pequeno delay para efeito dramático
  }
}

function showResult() {
  // Esconde o quiz e mostra o resultado
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("header-text").classList.add("hidden");
  document.getElementById("progress").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  // Encontra o Eneatipo vencedor (o com maior pontuação)
  const topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const p = profiles[topType];

  // Preenche os dados no HTML
  document.getElementById("profile-name").innerText = p.name;
  
  // Forças e Fraquezas
  document.getElementById("strengths").innerHTML = `<strong>Suas Maiores Forças:</strong> ${p.strengths}`;
  document.getElementById("weaknesses").innerHTML = `<strong>Onde você se sabota:</strong> ${p.weaknesses}`;

  // Diagnóstico Profundo
  document.getElementById("childhood").innerText = p.childhood;
  document.getElementById("regression").innerHTML = `<em>Quando você está caindo:</em> ${p.regression}`;

  // Técnicas (PNL e Andragogia)
  document.getElementById("pnl").innerHTML = `<strong>PNL (Programação Mental):</strong> ${p.pnl}`;
  document.getElementById("andragogia").innerHTML = `<strong>Como você aprende melhor:</strong> ${p.andragogia}`;

  // Solução (Estoicismo e Evolução)
  document.getElementById("estoicismo").innerHTML = `<strong>A Virtude que te falta (Estoicismo):</strong> ${p.estoicismo}`;
  document.getElementById("evolution").innerHTML = `<strong>Sua Rota de Crescimento:</strong> ${p.evolution}`;
  document.getElementById("exercise").innerText = p.exercise;

  // Texto do CTA personalizado
  document.getElementById("cta-text").innerText = p.cta;
  
  // Rola a tela para o topo do resultado
  window.scrollTo(0, 0);
}

// Inicia o teste
loadQuestion();

