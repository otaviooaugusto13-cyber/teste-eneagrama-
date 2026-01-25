/* ======================================================
   CONFIGURAÇÃO GERAL
   ====================================================== */
const LINK_WHATSAPP = "https://whatsapp.com/channel/0029VbBTt6PDJ6GuZdRkO33D"; 
const LINK_PDF = ""; // Deixe vazio se não tiver PDF direto ainda

/* ======================================================
   BANCO DE DADOS: 27 PERGUNTAS (Fase 1)
   ====================================================== */
const bancoPerguntas = [
    { tipo: 1, txt: "Sinto uma pressão interna constante para corrigir erros e colocar ordem." },
    { tipo: 1, txt: "Tenho um 'crítico interno' severo que me julga por qualquer falha." },
    { tipo: 1, txt: "Fico frustrado quando vejo pessoas sendo irresponsáveis." },
    { tipo: 2, txt: "Priorizo as necessidades dos outros e ignoro as minhas." },
    { tipo: 2, txt: "Sinto que preciso ser útil para ter valor na vida das pessoas." },
    { tipo: 2, txt: "Tenho dificuldade em dizer 'não' e me sobrecarrego." },
    { tipo: 3, txt: "Sinto que meu valor depende das minhas conquistas e resultados." },
    { tipo: 3, txt: "Adapto minha imagem para causar a melhor impressão possível." },
    { tipo: 3, txt: "Tenho pavor de fracassar ou parecer incompetente." },
    { tipo: 4, txt: "Sinto que falta algo em mim que os outros têm." },
    { tipo: 4, txt: "Busco profundidade e detesto a superficialidade." },
    { tipo: 4, txt: "Passo muito tempo imaginando cenários ideais ou nostálgicos." },
    { tipo: 5, txt: "Preciso de muito tempo sozinho para recarregar minhas energias." },
    { tipo: 5, txt: "Prefiro observar e entender antes de participar." },
    { tipo: 5, txt: "Protejo minha privacidade e evito demandas emocionais." },
    { tipo: 6, txt: "Minha mente está sempre escaneando perigos e riscos." },
    { tipo: 6, txt: "A lealdade é vital, mas demoro a confiar nas pessoas." },
    { tipo: 6, txt: "A dúvida e a ansiedade muitas vezes me paralisam." },
    { tipo: 7, txt: "Tenho muitas ideias, mas dificuldade em terminar o que começo." },
    { tipo: 7, txt: "Evito o tédio e a dor mantendo-me ocupado e otimista." },
    { tipo: 7, txt: "Sinto que preciso experimentar tudo para não perder nada." },
    { tipo: 8, txt: "Gosto de estar no controle para garantir que não serei controlado." },
    { tipo: 8, txt: "Protejo os 'meus' com ferocidade, mas não tolero traição." },
    { tipo: 8, txt: "Tenho dificuldade em mostrar vulnerabilidade." },
    { tipo: 9, txt: "Evito conflitos a todo custo para manter a paz." },
    { tipo: 9, txt: "Tenho tendência a procrastinar para não me estressar." },
    { tipo: 9, txt: "Muitas vezes concordo com os outros só para não criar atrito." }
];

/* PERGUNTAS DE INSTINTO (Fase 2 - Oculta) */
const perguntasInstinto = [
    {
        txt: "Para finalizar: Quando entro num ambiente novo, minha atenção vai para:",
        opcoes: [
            { txt: "Conforto físico, temperatura e segurança.", tag: "SP" },
            { txt: "Quem são as pessoas atraentes ou interessantes.", tag: "SX" },
            { txt: "Quem tem poder e onde eu me encaixo no grupo.", tag: "SO" }
        ]
    },
    {
        txt: "O que mais me gera ansiedade hoje?",
        opcoes: [
            { txt: "Instabilidade financeira ou problemas de saúde.", tag: "SP" },
            { txt: "Falta de conexão profunda ou rejeição pessoal.", tag: "SX" },
            { txt: "Ser excluído do grupo ou perder minha reputação.", tag: "SO" }
        ]
    },
    {
        txt: "Como prefiro recarregar as energias?",
        opcoes: [
            { txt: "No meu canto, cuidando das minhas coisas.", tag: "SP" },
            { txt: "Em conversas intensas 'olho no olho'.", tag: "SX" },
            { txt: "Em eventos sociais, reuniões ou com a galera.", tag: "SO" }
        ]
    }
];

/* RELATÓRIOS FINAIS */
const perfisData = {
    1: { nome: "O PERFECCIONISTA", vicio: "Ira", pctVicio: "92%", pctLider: "95%", genese: "Você cresceu sentindo que só seria amado se fosse perfeito. Engoliu a raiva para ser o 'exemplo'.", comportamento: "Sua rigidez afasta as pessoas e gera exaustão. Você carrega o mundo nas costas porque 'ninguém faz direito'.", evolucao: "O Eneagrama mostra o erro. A PNL reconfigura sua reação. O Estoicismo traz serenidade. A Andragogia acelera sua mudança." },
    2: { nome: "O AJUDADOR", vicio: "Orgulho", pctVicio: "88%", pctLider: "85%", genese: "Acreditou que ter necessidades próprias era egoísmo. Comprou amor sendo útil.", comportamento: "Você se torna indispensável para criar dependência. Dá tudo, mas cobra a conta emocional depois.", evolucao: "Usamos PNL para quebrar o vício em aprovação e Estoicismo para fortalecer seu autoamor." },
    3: { nome: "O REALIZADOR", vicio: "Vaidade", pctVicio: "98%", pctLider: "99%", genese: "Você aprendeu que Amor = Performance. Seu valor foi medido por notas e troféus.", comportamento: "Você é um camaleão. Sabe vender, mas sente um vazio existencial quando a plateia vai embora.", evolucao: "O método PráticaMente usa Andragogia para remover a máscara e construir uma identidade antifrágil." },
    4: { nome: "O INDIVIDUALISTA", vicio: "Inveja", pctVicio: "90%", pctLider: "75%", genese: "Sentiu-se invisível ou 'quebrado' na infância. Acredita que a felicidade é dos outros.", comportamento: "Vicia na melancolia e no drama para se sentir vivo. Sabota o que é estável.", evolucao: "Parar de romantizar a dor. O Estoicismo te dá disciplina e a PNL ancora estados de gratidão." },
    5: { nome: "O OBSERVADOR", vicio: "Avareza", pctVicio: "85%", pctLider: "82%", genese: "Sentiu o mundo como invasivo. Ergueu muros mentais para se proteger.", comportamento: "Você acumula conhecimento mas tem medo de agir. Vive na cabeça e desconecta do corpo.", evolucao: "O PráticaMente te tira da arquibancada. A PNL conecta mente e corpo para a ação real." },
    6: { nome: "O LEALISTA", vicio: "Medo", pctVicio: "94%", pctLider: "80%", genese: "Viveu em ambiente imprevisível. Radar de perigo travou no 'ligado'.", comportamento: "Cenários catastróficos te paralisam. Você busca segurança fora, mas duvida dela.", evolucao: "Substituir dúvida por Fé em Si. A PNL silencia o medo e o Estoicismo constrói sua fortaleza." },
    7: { nome: "O ENTUSIASTA", vicio: "Gula", pctVicio: "89%", pctLider: "88%", genese: "Fugiu de uma dor infantil para a imaginação. Criou um escudo de positividade.", comportamento: "Começa dez projetos, não termina nenhum. Tem pavor do tédio e do silêncio.", evolucao: "Aprender a ficar. Andragogia te dá foco laser e Estoicismo ensina a alegria na profundidade." },
    8: { nome: "O DESAFIADOR", vicio: "Luxúria", pctVicio: "96%", pctLider: "96%", genese: "Matou sua inocência para sobreviver. Decidiu: 'Nunca mais serei controlado'.", comportamento: "Atropela as pessoas sem ver. Sua honestidade fere. Tem um coração gigante blindado.", evolucao: "Baixar a guarda. A PNL ressignifica a vulnerabilidade como poder real de liderança." },
    9: { nome: "O PACIFICISTA", vicio: "Preguiça", pctVicio: "80%", pctLider: "70%", genese: "Sentiu que sua voz causava problemas. A estratégia foi ficar 'invisível'.", comportamento: "Procrastina o essencial. Acumula raiva passiva até explodir ou sumir.", evolucao: "Acordar para a vida. Usamos Andragogia para criar micro-metas de ação imediata." }
};

/* ======================================================
   LÓGICA DO SISTEMA (CORRIGIDA)
   ====================================================== */
let pontuacaoTipos = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
let pontuacaoInstinto = { "SP": 0, "SX": 0, "SO": 0 };
let indiceTipo = 0;
let indiceInstinto = 0;
let faseAtual = "TIPO"; 
let perguntasTipoEmbaralhadas = [];

// INICIALIZAÇÃO SEGURA
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Tenta embaralhar, se der erro usa a ordem padrão
        perguntasTipoEmbaralhadas = [...bancoPerguntas].sort(() => Math.random() - 0.5);
    } catch(e) {
        perguntasTipoEmbaralhadas = bancoPerguntas;
    }
    mostrarPergunta();
});

function mostrarPergunta() {
    // === FASE 1: PERGUNTAS DE TIPO (1 a 27) ===
    if (faseAtual === "TIPO") {
        
        // SE ACABOU AS PERGUNTAS DE TIPO, MUDA PARA INSTINTO
        if (indiceTipo >= perguntasTipoEmbaralhadas.length) {
            faseAtual = "INSTINTO";
            mostrarPergunta(); // Chama a função de novo para carregar a fase 2
            return;
        }

        const q = perguntasTipoEmbaralhadas[indiceTipo];
        
        // Renderiza a pergunta na tela
        renderizarQuestao(
            q.txt, 
            `${indiceTipo + 1}/27`, // Texto do contador (ex: 1/27)
            ["Discordo Totalmente", "Discordo", "Neutro", "Concordo", "Concordo Totalmente"],
            [0, 1, 2, 3, 5],
            (val) => { 
                pontuacaoTipos[q.tipo] += val; 
                indiceTipo++; 
                mostrarPergunta(); 
            }
        );
    } 
    
    // === FASE 2: PERGUNTAS DE INSTINTO (28 a 30) ===
    else if (faseAtual === "INSTINTO") {
        
        // SE ACABOU AS PERGUNTAS DE INSTINTO, FINALIZA
        if (indiceInstinto >= perguntasInstinto.length) {
            processarFinalizacao();
            return;
        }

        const q = perguntasInstinto[indiceInstinto];
        
        // Renderiza a pergunta de instinto (sem mostrar 28/27, mostra "FASE FINAL")
        renderizarQuestao(
            q.txt, 
            "ANÁLISE FINAL", // Texto do contador
            [q.opcoes[0].txt, q.opcoes[1].txt, q.opcoes[2].txt],
            [q.opcoes[0].tag, q.opcoes[1].tag, q.opcoes[2].tag],
            (tag) => { 
                pontuacaoInstinto[tag] += 1; 
                indiceInstinto++; 
                mostrarPergunta(); 
            }
        );
    }
}

// FUNÇÃO PARA DESENHAR A PERGUNTA NA TELA
function renderizarQuestao(texto, contador, labels, valores, callback) {
    const elText = document.getElementById('q-text');
    const elCount = document.getElementById('q-number');
    const elBar = document.getElementById('progress-bar');
    const elContainer = document.getElementById('options-container');

    if(elText) elText.innerText = texto;
    if(elCount) elCount.innerText = contador;
    
    // Atualiza Barra de Progresso
    if(elBar) {
        let pct = 0;
        if(faseAtual === "TIPO") {
            pct = (indiceTipo / 27) * 90;
        } else {
            pct = 90 + ((indiceInstinto / 3) * 10);
        }
        elBar.style.width = `${pct}%`;
    }

    // Cria os botões
    if(elContainer) {
        elContainer.innerHTML = '';
        labels.forEach((label, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            
            // Se for fase final, destaca borda dourada
            if(faseAtual === "INSTINTO") {
                btn.style.borderColor = "var(--gold)"; 
            }
            
            btn.innerText = label;
            
            // Adiciona o clique
            btn.onclick = function() {
                // Efeito visual de clique
                this.style.background = "var(--gold)";
                this.style.color = "black";
                setTimeout(() => callback(valores[idx]), 150); // Pequeno delay
            };
            
            elContainer.appendChild(btn);
        });
    }
}

function processarFinalizacao() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-loading').classList.remove('hidden');

    // 1. Calcular TIPO Vencedor
    let vencedor = 1;
    let maxPontos = -1;
    for (let i = 1; i <= 9; i++) {
        if (pontuacaoTipos[i] > maxPontos) { 
            maxPontos = pontuacaoTipos[i]; 
            vencedor = i; 
        }
    }

    // 2. Calcular ASA (Wing)
    let vizinhoEsq = (vencedor === 1) ? 9 : vencedor - 1;
    let vizinhoDir = (vencedor === 9) ? 1 : vencedor + 1;
    let asa = (pontuacaoTipos[vizinhoEsq] > pontuacaoTipos[vizinhoDir]) ? vizinhoEsq : vizinhoDir;

    // 3. Calcular SUBTIPO Vencedor
    let instintoVencedor = "SP";
    let maxInst = -1;
    for (let tag in pontuacaoInstinto) {
        if (pontuacaoInstinto[tag] > maxInst) {
            maxInst = pontuacaoInstinto[tag];
            instintoVencedor = tag;
        }
    }
    const nomesInstinto = { "SP": "AUTOPRESERVAÇÃO", "SX": "SEXUAL", "SO": "SOCIAL" };

    setTimeout(() => {
        exibirResultados(vencedor, asa, nomesInstinto[instintoVencedor]);
    }, 3000);
}

function exibirResultados(tipo, asa, subtipo) {
    document.getElementById('screen-loading').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    const dados = perfisData[tipo];
    if(dados) {
        setText('res-archetype', dados.nome);
        setText('res-type', `TIPO ${tipo}`);
        setText('res-wing-calc', `ASA ${asa}`);
        setText('res-subtype', subtipo);
        
        setText('res-vice', dados.vicio.toUpperCase());
        setText('res-genesis', dados.genese);
        setText('res-behavior', dados.comportamento);
        setText('res-evolution', dados.evolucao);

        // Animação das barras
        setTimeout(() => {
            const b1 = document.getElementById('bar-vice');
            const b2 = document.getElementById('bar-potential');
            if(b1) b1.style.width = dados.pctVicio;
            if(b2) b2.style.width = dados.pctLider;
        }, 500);
    }
}

function baixarEEntrar() {
    const btn = document.querySelector('.btn-cta');
    if(btn) {
        btn.innerHTML = "DIRECIONANDO...";
        btn.disabled = true;
    }

    if(LINK_PDF && LINK_PDF.length > 5) {
        window.open(LINK_PDF, '_blank');
    }

    setTimeout(() => {
        window.location.href = LINK_WHATSAPP;
    }, 1000);
}

// Função auxiliar segura
function setText(id, text) {
    const el = document.getElementById(id);
    if(el) el.innerText = text;
}
loadQuestion();


