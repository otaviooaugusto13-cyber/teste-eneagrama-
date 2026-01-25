/* ======================================================
   CONFIGURAÇÃO: COLOQUE SEUS LINKS AQUI
   ====================================================== */
const LINK_WHATSAPP = "https://chat.whatsapp.com/SEU_CODIGO_AQUI"; 
const LINK_PDF = "https://seusite.com/seu-pdf.pdf"; // Se não tiver, deixe vazio ""

/* ======================================================
   BANCO DE DADOS: AS 27 PERGUNTAS DE TIPO (Fase 1)
   ====================================================== */
const bancoPerguntas = [
    // TIPO 1
    { tipo: 1, txt: "Sinto uma pressão interna constante para corrigir erros e colocar ordem." },
    { tipo: 1, txt: "Tenho um 'crítico interno' severo que me julga por qualquer falha." },
    { tipo: 1, txt: "Fico frustrado quando vejo pessoas sendo irresponsáveis." },
    // TIPO 2
    { tipo: 2, txt: "Priorizo as necessidades dos outros e ignoro as minhas." },
    { tipo: 2, txt: "Sinto que preciso ser útil para ter valor na vida das pessoas." },
    { tipo: 2, txt: "Tenho dificuldade em dizer 'não' e me sobrecarrego." },
    // TIPO 3
    { tipo: 3, txt: "Sinto que meu valor depende das minhas conquistas e resultados." },
    { tipo: 3, txt: "Adapto minha imagem para causar a melhor impressão possível." },
    { tipo: 3, txt: "Tenho pavor de fracassar ou parecer incompetente." },
    // TIPO 4
    { tipo: 4, txt: "Sinto que falta algo em mim que os outros têm." },
    { tipo: 4, txt: "Busco profundidade e detesto a superficialidade." },
    { tipo: 4, txt: "Passo muito tempo imaginando cenários ideais ou nostálgicos." },
    // TIPO 5
    { tipo: 5, txt: "Preciso de muito tempo sozinho para recarregar minhas energias." },
    { tipo: 5, txt: "Prefiro observar e entender antes de participar." },
    { tipo: 5, txt: "Protejo minha privacidade e evito demandas emocionais." },
    // TIPO 6
    { tipo: 6, txt: "Minha mente está sempre escaneando perigos e riscos." },
    { tipo: 6, txt: "A lealdade é vital, mas demoro a confiar nas pessoas." },
    { tipo: 6, txt: "A dúvida e a ansiedade muitas vezes me paralisam." },
    // TIPO 7
    { tipo: 7, txt: "Tenho muitas ideias, mas dificuldade em terminar o que começo." },
    { tipo: 7, txt: "Evito o tédio e a dor mantendo-me ocupado e otimista." },
    { tipo: 7, txt: "Sinto que preciso experimentar tudo para não perder nada." },
    // TIPO 8
    { tipo: 8, txt: "Gosto de estar no controle para garantir que não serei controlado." },
    { tipo: 8, txt: "Protejo os 'meus' com ferocidade, mas não tolero traição." },
    { tipo: 8, txt: "Tenho dificuldade em mostrar vulnerabilidade." },
    // TIPO 9
    { tipo: 9, txt: "Evito conflitos a todo custo para manter a paz." },
    { tipo: 9, txt: "Tenho tendência a procrastinar para não me estressar." },
    { tipo: 9, txt: "Muitas vezes concordo com os outros só para não criar atrito." }
];

/* ======================================================
   NOVA FASE 2: PERGUNTAS INDIRETAS DE INSTINTO
   (Sem revelar qual é qual)
   ====================================================== */
const perguntasInstinto = [
    {
        txt: "Quando você entra em um ambiente novo, qual é sua primeira preocupação inconsciente?",
        opcoes: [
            { txt: "O conforto físico, a temperatura e onde estão a comida/recursos.", tag: "SP" },
            { txt: "Quem são as pessoas interessantes ou atraentes para criar conexão.", tag: "SX" },
            { txt: "Quem tem poder aqui, qual a hierarquia e onde eu me encaixo no grupo.", tag: "SO" }
        ]
    },
    {
        txt: "O que mais te causa ansiedade no dia a dia?",
        opcoes: [
            { txt: "Questões financeiras, saúde física ou falta de estabilidade.", tag: "SP" },
            { txt: "Falta de intimidade, sentir-se sem 'química' ou rejeição pessoal.", tag: "SX" },
            { txt: "Ser excluído, perder prestígio ou cometer uma gafe social.", tag: "SO" }
        ]
    },
    {
        txt: "Como você prefere recarregar suas energias?",
        opcoes: [
            { txt: "No conforto da minha casa, cuidando das minhas coisas.", tag: "SP" },
            { txt: "Em uma conversa profunda e eletrizante com alguém especial.", tag: "SX" },
            { txt: "Participando de eventos, reunindo amigos ou engajando em causas.", tag: "SO" }
        ]
    }
];

/* ======================================================
   DADOS DOS RELATÓRIOS
   ====================================================== */
const perfisData = {
    1: { nome: "O PERFECCIONISTA", vicio: "Ira", pctVicio: "85%", pctLider: "92%", genese: "Criança que aprendeu que para ser amada precisava ser 'boa' e não errar.", comportamento: "Busca ordem no caos. É rígido consigo mesmo.", evolucao: "Aceitar a imperfeição (Serenidade)." },
    2: { nome: "O AJUDADOR", vicio: "Orgulho", pctVicio: "88%", pctLider: "85%", genese: "Sentiu que ter necessidades próprias era 'egoísmo'.", comportamento: "Torna-se indispensável para criar dependência.", evolucao: "Reconhecer suas próprias necessidades (Humildade)." },
    3: { nome: "O REALIZADOR", vicio: "Vaidade", pctVicio: "95%", pctLider: "98%", genese: "Foi valorizado pelas notas e troféus. Amor = Performance.", comportamento: "Vira um camaleão. Sabe vender, mas sente vazio interno.", evolucao: "Parar de performar e ser real (Veracidade)." },
    4: { nome: "O INDIVIDUALISTA", vicio: "Inveja", pctVicio: "90%", pctLider: "75%", genese: "Sentiu-se invisível ou diferente da família.", comportamento: "Vicia na melancolia e compara seus bastidores com o palco dos outros.", evolucao: "Colocar disciplina no que existe (Equanimidade)." },
    5: { nome: "O OBSERVADOR", vicio: "Avareza", pctVicio: "80%", pctLider: "82%", genese: "Sentiu que o mundo era invasivo. Fechou-se na mente.", comportamento: "Acumula conhecimento mas tem medo de agir.", evolucao: "Entrar em campo e participar (Desapego)." },
    6: { nome: "O LEALISTA", vicio: "Medo", pctVicio: "92%", pctLider: "80%", genese: "Viveu em ambiente imprevisível. Radar de perigo ligado.", comportamento: "Cria cenários catastróficos e busca segurança fora.", evolucao: "Confiar na bússola interna (Coragem)." },
    7: { nome: "O ENTUSIASTA", vicio: "Gula", pctVicio: "85%", pctLider: "88%", genese: "Fugiu de uma dor infantil para a imaginação.", comportamento: "Começa dez projetos e não termina nenhum. Foge do tédio.", evolucao: "Focar e aprofundar (Sobriedade)." },
    8: { nome: "O DESAFIADOR", vicio: "Luxúria", pctVicio: "94%", pctLider: "96%", genese: "Matou a inocência para sobreviver num mundo hostil.", comportamento: "Atropela as pessoas. Honestidade brutal.", evolucao: "Baixar a armadura e cuidar (Inocência)." },
    9: { nome: "O PACIFICISTA", vicio: "Preguiça", pctVicio: "78%", pctLider: "70%", genese: "Sentiu que sua voz causava problemas. Decidiu se anular.", comportamento: "Procrastina o essencial e concorda para não brigar.", evolucao: "Acordar e agir (Ação)." }
};

/* ======================================================
   LÓGICA DO SISTEMA
   ====================================================== */
let pontuacaoTipos = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
let pontuacaoInstinto = { "SP": 0, "SX": 0, "SO": 0 };

let indiceTipo = 0;
let indiceInstinto = 0;
let faseAtual = "TIPO"; // "TIPO" ou "INSTINTO"
let perguntasTipoEmbaralhadas = [];

document.addEventListener("DOMContentLoaded", function() {
    try {
        perguntasTipoEmbaralhadas = [...bancoPerguntas].sort(() => Math.random() - 0.5);
    } catch(e) { perguntasTipoEmbaralhadas = bancoPerguntas; }
    mostrarPergunta();
});

function mostrarPergunta() {
    // FASE 1: TIPOS
    if (faseAtual === "TIPO") {
        if (indiceTipo >= perguntasTipoEmbaralhadas.length) {
            faseAtual = "INSTINTO";
            mostrarPergunta(); // Chama recursivamente para iniciar fase 2
            return;
        }

        const q = perguntasTipoEmbaralhadas[indiceTipo];
        renderizarQuestao(q.txt, (indiceTipo + 1), perguntasTipoEmbaralhadas.length, 
            ["Discordo Totalmente", "Discordo", "Neutro", "Concordo", "Concordo Totalmente"],
            [0, 1, 2, 3, 5],
            (val) => { pontuacaoTipos[q.tipo] += val; indiceTipo++; mostrarPergunta(); }
        );
    } 
    // FASE 2: INSTINTOS (Oculta)
    else if (faseAtual === "INSTINTO") {
        if (indiceInstinto >= perguntasInstinto.length) {
            processarFinalizacao();
            return;
        }

        const q = perguntasInstinto[indiceInstinto];
        renderizarQuestao(q.txt, "FASE FINAL", "", 
            [q.opcoes[0].txt, q.opcoes[1].txt, q.opcoes[2].txt],
            [q.opcoes[0].tag, q.opcoes[1].tag, q.opcoes[2].tag],
            (tag) => { pontuacaoInstinto[tag] += 1; indiceInstinto++; mostrarPergunta(); }
        );
    }
}

function renderizarQuestao(texto, num, total, labels, valores, callback) {
    updateElement('q-text', texto);
    updateElement('q-number', total ? `${num}/${total}` : num);
    
    // Barra de progresso visual
    const bar = document.getElementById('progress-bar');
    if(bar) {
        let pct = faseAtual === "TIPO" 
            ? (num / total) * 90 
            : 90 + ((indiceInstinto / 3) * 10);
        bar.style.width = `${pct}%`;
    }

    const container = document.getElementById('options-container');
    if(container) {
        container.innerHTML = '';
        labels.forEach((label, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            if(faseAtual === "INSTINTO") btn.style.borderColor = "#D4AF37"; // Dourado na fase final
            btn.innerText = label;
            btn.onclick = () => callback(valores[idx]);
            container.appendChild(btn);
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
        if (pontuacaoTipos[i] > maxPontos) { maxPontos = pontuacaoTipos[i]; vencedor = i; }
    }

    // 2. Calcular ASA (Wing)
    // Se for Tipo 9, vizinhos são 8 e 1. Se for 1, vizinhos 9 e 2.
    let vizinhoEsq = (vencedor === 1) ? 9 : vencedor - 1;
    let vizinhoDir = (vencedor === 9) ? 1 : vencedor + 1;
    let asa = (pontuacaoTipos[vizinhoEsq] > pontuacaoTipos[vizinhoDir]) ? vizinhoEsq : vizinhoDir;

    // 3. Calcular SUBTIPO Vencedor (SP, SX, SO)
    let instintoVencedor = "SP";
    let maxInst = -1;
    for (let tag in pontuacaoInstinto) {
        if (pontuacaoInstinto[tag] > maxInst) {
            maxInst = pontuacaoInstinto[tag];
            instintoVencedor = tag;
        }
    }

    // Mapeamento visual bonito
    const nomesInstinto = { "SP": "AUTOPRESERVAÇÃO", "SX": "SEXUAL", "SO": "SOCIAL" };

    setTimeout(() => {
        exibirResultados(vencedor, asa, nomesInstinto[instintoVencedor]);
    }, 2500);
}

function exibirResultados(tipo, asa, subtipo) {
    document.getElementById('screen-loading').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    const dados = perfisData[tipo];
    if(dados) {
        updateElement('res-archetype', dados.nome);
        updateElement('res-type', tipo);
        updateElement('res-wing-calc', `ASA ${asa}`);
        updateElement('res-subtype', subtipo);
        
        updateElement('res-vice', dados.vicio.toUpperCase());
        updateElement('res-genesis', dados.genese);
        updateElement('res-behavior', dados.comportamento);
        updateElement('res-evolution', dados.evolucao);

        setTimeout(() => {
            const b1 = document.getElementById('bar-vice');
            const b2 = document.getElementById('bar-potential');
            if(b1) b1.style.width = dados.pctVicio;
            if(b2) b2.style.width = dados.pctLider;
        }, 500);
    }
}

function baixarEEntrar() {
    const email = document.getElementById('user-email').value;
    // Validação opcional de e-mail (se quiser obrigar, descomente):
    // if (!email || !email.includes('@')) { alert("Digite seu e-mail."); return; }

    const btn = document.querySelector('.btn-cta');
    btn.innerHTML = "BAIXANDO...";
    btn.disabled = true;

    // 1. Download Direto (Abre link do PDF)
    if(LINK_PDF && LINK_PDF.length > 5) {
        window.open(LINK_PDF, '_blank');
    }

    // 2. Redireciona WhatsApp
    setTimeout(() => {
        window.location.href = LINK_WHATSAPP;
    }, 1500);
}

function updateElement(id, text) {
    const el = document.getElementById(id);
    if(el) el.innerText = text;
}

loadQuestion();

