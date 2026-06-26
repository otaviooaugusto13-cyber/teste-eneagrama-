/* ======================================================
   CONFIGURAÇÃO & VARIÁVEIS
   ====================================================== */
const LINK_WHATSAPP = "https://whatsapp.com/channel/0029VbBTt6PDJ6GuZdRkO33D"; 
const LINK_PDF = ""; 
let userName = "LÍDER"; // Valor padrão

/* ======================================================
   EFEITOS VISUAIS
   ====================================================== */
const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particlesArray;
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.directionX = (Math.random() * 0.4) - 0.2; this.directionY = (Math.random() * 0.4) - 0.2; this.size = Math.random() * 2; }
    update() { if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX; if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY; this.x += this.directionX; this.y += this.directionY; }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(212, 175, 55, 0.5)'; ctx.fill(); }
}
function initParticles() { particlesArray = []; let numberOfParticles = (canvas.width * canvas.height) / 15000; for (let i = 0; i < numberOfParticles; i++) { particlesArray.push(new Particle()); } }
function animateParticles() { requestAnimationFrame(animateParticles); ctx.clearRect(0, 0, canvas.width, canvas.height); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); particlesArray[i].draw(); for (let j = i; j < particlesArray.length; j++) { const dx = particlesArray[i].x - particlesArray[j].x; const dy = particlesArray[i].y - particlesArray[j].y; const distance = Math.sqrt(dx*dx + dy*dy); if (distance < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(212, 175, 55, ${1 - distance/100})`; ctx.lineWidth = 0.5; ctx.moveTo(particlesArray[i].x, particlesArray[i].y); ctx.lineTo(particlesArray[j].x, particlesArray[j].y); ctx.stroke(); } } } }
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); });
initParticles(); animateParticles();

/* ======================================================
   CORREÇÃO DO FORMULÁRIO (AJAX)
   ====================================================== */
document.addEventListener("DOMContentLoaded", function() {
    try { perguntasTipoEmbaralhadas = [...bancoPerguntas].sort(() => Math.random() - 0.5); } catch(e) { perguntasTipoEmbaralhadas = bancoPerguntas; }

    const form = document.getElementById("capture-form");
    if (form) {
        form.addEventListener("submit", function(ev) {
            ev.preventDefault(); 
            
            const nameInput = document.getElementById("input-name");
            if(nameInput && nameInput.value.trim() !== "") {
                userName = nameInput.value.trim().toUpperCase();
            }

            const btn = form.querySelector("button");
            btn.innerHTML = '<i class="ph-spinner-gap ph-spin"></i> ACESSANDO...';
            btn.disabled = true;

            const data = new FormData(form);
            
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => { iniciarQuizTela(); })
            .catch(error => { iniciarQuizTela(); });
        });
    }
});

function iniciarQuizTela() {
    const intro = document.getElementById('screen-intro');
    intro.style.opacity = '0';
    intro.style.transform = 'scale(0.95)';
    intro.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        intro.classList.add('hidden');
        document.getElementById('screen-quiz').classList.remove('hidden');
        mostrarPergunta();
    }, 500);
}

/* ======================================================
   DADOS E QUIZ
   ====================================================== */
const bancoPerguntas = [ { tipo: 1, txt: "Sinto uma pressão interna constante para corrigir erros e colocar ordem." }, { tipo: 1, txt: "Tenho um 'crítico interno' severo que me julga por qualquer falha." }, { tipo: 1, txt: "Fico frustrado quando vejo pessoas sendo irresponsáveis." }, { tipo: 2, txt: "Priorizo as necessidades dos outros e ignoro as minhas." }, { tipo: 2, txt: "Sinto que preciso ser útil para ter valor na vida das pessoas." }, { tipo: 2, txt: "Tenho dificuldade em dizer 'não' e me sobrecarrego." }, { tipo: 3, txt: "Sinto que meu valor depende das minhas conquistas e resultados." }, { tipo: 3, txt: "Adapto minha imagem para causar a melhor impressão possível." }, { tipo: 3, txt: "Tenho pavor de fracassar ou parecer incompetente." }, { tipo: 4, txt: "Sinto que falta algo em mim que os outros têm." }, { tipo: 4, txt: "Busco profundidade e detesto a superficialidade." }, { tipo: 4, txt: "Passo muito tempo imaginando cenários ideais ou nostálgicos." }, { tipo: 5, txt: "Preciso de muito tempo sozinho para recarregar minhas energias." }, { tipo: 5, txt: "Prefiro observar e entender antes de participar." }, { tipo: 5, txt: "Protejo minha privacidade e evito demandas emocionais." }, { tipo: 6, txt: "Minha mente está sempre escaneando perigos e riscos." }, { tipo: 6, txt: "A lealdade é vital, mas demoro a confiar nas pessoas." }, { tipo: 6, txt: "A dúvida e a ansiedade muitas vezes me paralisam." }, { tipo: 7, txt: "Tenho muitas ideias, mas dificuldade em terminar o que começo." }, { tipo: 7, txt: "Evito o tédio e a dor mantendo-me ocupado e otimista." }, { tipo: 7, txt: "Sinto que preciso experimentar tudo para não perder nada." }, { tipo: 8, txt: "Gosto de estar no controle para garantir que não serei controlado." }, { tipo: 8, txt: "Protejo os 'meus' com ferocidade, mas não tolero traição." }, { tipo: 8, txt: "Tenho dificuldade em mostrar vulnerabilidade." }, { tipo: 9, txt: "Evito conflitos a todo custo para manter a paz." }, { tipo: 9, txt: "Tenho tendência a procrastinar para não me estressar." }, { tipo: 9, txt: "Muitas vezes concordo com os outros só para não criar atrito." } ];
const perguntasInstinto = [ { txt: "Quando entro num ambiente novo, minha atenção vai para:", opcoes: [ { txt: "Conforto físico, temperatura e segurança.", tag: "SP" }, { txt: "Quem são as pessoas atraentes ou interessantes.", tag: "SX" }, { txt: "Quem tem poder e onde eu me encaixo no grupo.", tag: "SO" } ] }, { txt: "O que mais me gera ansiedade hoje?", opcoes: [ { txt: "Instabilidade financeira ou problemas de saúde.", tag: "SP" }, { txt: "Falta de conexão profunda ou rejeição pessoal.", tag: "SX" }, { txt: "Ser excluído do grupo ou perder minha reputação.", tag: "SO" } ] }, { txt: "Como prefiro recarregar as energias?", opcoes: [ { txt: "No meu canto, cuidando das minhas coisas.", tag: "SP" }, { txt: "Em conversas intensas 'olho no olho'.", tag: "SX" }, { txt: "Em eventos sociais, reuniões ou com a galera.", tag: "SO" } ] } ];

/* DADOS DOS PERFIS (OTAVIO: PREENCHER OS TEXTOS DOS TIPOS 1 A 8) */
const perfisData = {
    1: {
        nome: "O PERFECCIONISTA",
        essencia: ["Busca integridade e melhoria.", "Focado em fazer o que é certo.", "Deseja ser justo e objetivo."],
        forcas: ["Organizado e ético.", "Confiável e trabalhador.", "Alto padrão de qualidade."],
        desequilibrio: ["Torna-se rígido e crítico.", "Reprime a raiva.", "Julga excessivamente."],
        potencial: ["Aceita a imperfeição humana.", "Lidera pelo exemplo sereno.", "Transforma crítica em sabedoria."],
        desafios: ["Tendência ao ressentimento.", "Dificuldade em relaxar.", "Medo de cometer erros."],
        padraoFrase: "Se eu for perfeito, estarei seguro.",
        padraoPreco: ["Ansiedade constante.", "Rigidez muscular.", "Exaustão mental."],
        padraoAcao: "Feito é melhor que perfeito.",
        praticas: ["Quebrar uma regra pequena de propósito.", "Delegar sem corrigir depois.", "Praticar o não-julgamento."]
    },
    2: {
        nome: "O AJUDADOR",
        essencia: ["Busca conexão e amor.", "Focado nas necessidades alheias.", "Generoso e demonstrativo."],
        forcas: ["Empático e carinhoso.", "Altruísta.", "Grande capacidade de apoio."],
        desequilibrio: ["Torna-se invasivo.", "Cobra reconhecimento.", "Esquece de si mesmo."],
        potencial: ["Ama sem esperar troca.", "Humildade genuína.", "Cuidado equilibrado."],
        desafios: ["Dificuldade em dizer não.", "Orgulho oculto.", "Carência afetiva."],
        padraoFrase: "Se eu ajudar a todos, serei amado.",
        padraoPreco: ["Exaustão emocional.", "Ressentimento.", "Perda da identidade."],
        padraoAcao: "Primeiro a máscara de oxigênio em você.",
        praticas: ["Fazer algo só para si mesmo.", "Pedir ajuda.", "Identificar suas próprias necessidades."]
    },
    3: {
        nome: "O REALIZADOR",
        essencia: ["Busca valor e admiração.", "Focado em metas e sucesso.", "Adaptável e eficiente."],
        forcas: ["Motivador e prático.", "Competente.", "Grande realizador."],
        desequilibrio: ["Torna-se viciado em trabalho.", "Competitivo demais.", "Falso (camaleão)."],
        potencial: ["Autenticidade.", "Liderança inspiradora.", "Valoriza o ser, não o ter."],
        desafios: ["Medo do fracasso.", "Vaidade.", "Desconexão dos sentimentos."],
        padraoFrase: "Sou o que eu realizo.",
        padraoPreco: ["Vazio interior.", "Stress crônico.", "Relações superficiais."],
        padraoAcao: "O sucesso sem alma é o maior fracasso.",
        praticas: ["Desacelerar propositalmente.", "Falar de um fracasso real.", "Praticar hobbies sem meta."]
    },
    4: {
        nome: "O INDIVIDUALISTA",
        essencia: ["Busca identidade e profundidade.", "Sensível e criativo.", "Introspectivo."],
        forcas: ["Criatividade única.", "Compaixão profunda.", "Honestidade emocional."],
        desequilibrio: ["Dramático e melancólico.", "Invejoso.", "Auto-absorvido."],
        potencial: ["Equilíbrio emocional.", "Transforma dor em arte.", "Conexão universal."],
        desafios: ["Vício no sofrimento.", "Sentimento de falta.", "Instabilidade."],
        padraoFrase: "Ninguém me entende de verdade.",
        padraoPreco: ["Isolamento.", "Depressão.", "Paralisia na ação."],
        padraoAcao: "A disciplina traz a liberdade.",
        praticas: ["Rotina e constância.", "Focar no que tem, não no que falta.", "Ação física."]
    },
    5: {
        nome: "O OBSERVADOR",
        essencia: ["Busca conhecimento e competência.", "Cerebral e analítico.", "Independente."],
        forcas: ["Visão objetiva.", "Curiosidade intelectual.", "Calma em crises."],
        desequilibrio: ["Isolado e cínico.", "Avaro com tempo/energia.", "Desconectado do corpo."],
        potencial: ["Sabedoria prática.", "Engajamento no mundo.", "Generosidade mental."],
        desafios: ["Medo de ser invadido.", "Paralisia por análise.", "Frieza."],
        padraoFrase: "Preciso entender tudo antes de agir.",
        padraoPreco: ["Solidão.", "Ansiedade mental.", "Niilismo."],
        padraoAcao: "O conhecimento só vale se compartilhado.",
        praticas: ["Expressar sentimentos.", "Participar de grupos.", "Atividade física intensa."]
    },
    6: {
        nome: "O LEALISTA",
        essencia: ["Busca segurança e apoio.", "Alerta e responsável.", "Comprometido."],
        forcas: ["Lealdade e coragem.", "Bom em prever problemas.", "Trabalho em equipe."],
        desequilibrio: ["Ansioso e desconfiado.", "Pessimista.", "Reativo."],
        potencial: ["Fé em si mesmo.", "Coragem serena.", "Confiança na vida."],
        desafios: ["Dúvida constante.", "Cenários catastróficos.", "Indecisão."],
        padraoFrase: "E se tudo der errado?",
        padraoPreco: ["Stress alto.", "Perda de oportunidades.", "Dependência de autoridade."],
        padraoAcao: "A coragem não é ausência de medo.",
        praticas: ["Meditação (silenciar a mente).", "Tomar decisões rápidas.", "Focar no melhor cenário."]
    },
    7: {
        nome: "O ENTUSIASTA",
        essencia: ["Busca felicidade e estímulo.", "Espontâneo e versátil.", "Otimista."],
        forcas: ["Alegria contagiante.", "Criatividade rápida.", "Resiliência."],
        desequilibrio: ["Impulsivo e disperso.", "Foge da dor.", "Indisciplinado."],
        potencial: ["Sobriedade e foco.", "Gratidão presente.", "Alegria profunda."],
        desafios: ["Medo do tédio.", "Gula por experiências.", "Falta de acabativa."],
        padraoFrase: "Eu quero tudo e agora.",
        padraoPreco: ["Superficialidade.", "Ansiedade.", "Fuga da realidade."],
        padraoAcao: "A liberdade real requer compromisso.",
        praticas: ["Terminar o que começa.", "Praticar o silêncio.", "Aceitar emoções tristes."]
    },
    8: {
        nome: "O DESAFIADOR",
        essencia: ["Busca controle e justiça.", "Forte e assertivo.", "Protetor."],
        forcas: ["Liderança natural.", "Energia realizadora.", "Defensor dos fracos."],
        desequilibrio: ["Agressivo e dominador.", "Insensível.", "Vingativo."],
        potencial: ["Compaixão e inocência.", "Uso do poder para o bem.", "Líder magnânimo."],
        desafios: ["Dificuldade com vulnerabilidade.", "Excesso de intensidade.", "Negação da fraqueza."],
        padraoFrase: "Eu sou forte, ninguém manda em mim.",
        padraoPreco: ["Desgaste nos relacionamentos.", "Solidão no topo.", "Endurecimento."],
        padraoAcao: "A verdadeira força é gentil.",
        praticas: ["Ouvir sem interromper.", "Admitir um erro.", "Cuidar de algo frágil (planta/animal)."]
    },
    9: {
        nome: "O PACIFICADOR",
        essencia: [
            "O Tipo 9 busca paz, harmonia e estabilidade.",
            "Tem facilidade em se adaptar, acolher e manter o ambiente tranquilo.",
            "Seu maior desejo é <strong>'não perder a conexão'</strong> com as pessoas e com a vida ao redor.",
            "💡 No seu melhor estado, o 9 é <strong>ponte, não muro</strong>."
        ],
        forcas: [
            "Descomplicado e de fácil convivência",
            "Empático, receptivo e agregador",
            "Constante, leal e confiável",
            "Bom coração e grande capacidade de escuta"
        ],
        desequilibrio: [
            "Foge de decisões importantes",
            "Evita conversas difíceis",
            "Se anestesia (rotina, distrações, conforto excessivo)"
        ],
        potencial: [
            "Une pessoas <strong>sem se anular</strong>",
            "Sustenta a paz com presença e coragem",
            "Lidera com serenidade e consistência",
            "Torna-se um <strong>'pacificador consciente'</strong>"
        ],
        desafios: [
            "Tendência à <strong>passividade</strong>",
            "Esquecimento de si mesmo",
            "Dificuldade em dizer <strong>'não'</strong>",
            "Cede demais para evitar conflitos",
            "Pode confundir paz com acomodação"
        ],
        padraoFrase: "Se eu não me posicionar, tudo fica bem.",
        padraoPreco: [
            "perda de <strong>identidade</strong>",
            "procrastinação",
            "sensação de estar vivendo a vida dos outros",
            "Ajo antes de 'ter vontade'"
        ],
        padraoAcao: "Pequenas ações diárias quebram a inércia.",
        praticas: [
            "Definir <strong>1 prioridade</strong> pessoal por dia",
            "Verbalizar <strong>opiniões simples</strong> ('eu prefiro..')",
            "Usar a pergunta-chave: O que eu quero?",
            "Transformar mediação externa em autoliderança"
        ]
    }
};

let pontuacaoTipos = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}; let pontuacaoInstinto = { "SP": 0, "SX": 0, "SO": 0 }; let indiceTipo = 0; let indiceInstinto = 0; let faseAtual = "TIPO"; let perguntasTipoEmbaralhadas = [];

function mostrarPergunta() {
    if (faseAtual === "TIPO") {
        if (indiceTipo >= perguntasTipoEmbaralhadas.length) { faseAtual = "INSTINTO"; mostrarPergunta(); return; }
        const q = perguntasTipoEmbaralhadas[indiceTipo];
        renderizarQuestao(q.txt, `${indiceTipo + 1} / 27`, ["Discordo Totalmente", "Discordo", "Neutro", "Concordo", "Concordo Totalmente"], [0, 1, 2, 3, 5], (val) => { pontuacaoTipos[q.tipo] += val; indiceTipo++; mostrarPergunta(); });
    } else if (faseAtual === "INSTINTO") {
        if (indiceInstinto >= perguntasInstinto.length) { processarFinalizacao(); return; }
        const q = perguntasInstinto[indiceInstinto];
        renderizarQuestao(q.txt, "FASE FINAL", [q.opcoes[0].txt, q.opcoes[1].txt, q.opcoes[2].txt], [q.opcoes[0].tag, q.opcoes[1].tag, q.opcoes[2].tag], (tag) => { pontuacaoInstinto[tag] += 1; indiceInstinto++; mostrarPergunta(); });
    }
}

function renderizarQuestao(texto, num, labels, valores, callback) {
    updateElement('q-text', texto);
    updateElement('q-number', num);
    const bar = document.getElementById('progress-bar');
    if(bar) { let pct = faseAtual === "TIPO" ? (indiceTipo / 27) * 90 : 90 + ((indiceInstinto / 3) * 10); bar.style.width = `${pct}%`; }
    const container = document.getElementById('options-container');
    if(container) { container.innerHTML = ''; labels.forEach((label, idx) => { const btn = document.createElement('button'); btn.className = 'btn-option'; if(faseAtual === "INSTINTO") btn.style.borderColor = "#D4AF37"; btn.innerText = label; btn.onclick = function() { this.style.background = "#D4AF37"; this.style.color = "black"; setTimeout(() => callback(valores[idx]), 100); }; container.appendChild(btn); }); }
}

function processarFinalizacao() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-loading').classList.remove('hidden');
    let vencedor = 1; let maxPontos = -1;
    for (let i = 1; i <= 9; i++) { if (pontuacaoTipos[i] > maxPontos) { maxPontos = pontuacaoTipos[i]; vencedor = i; } }
    let vizinhoEsq = (vencedor === 1) ? 9 : vencedor - 1; let vizinhoDir = (vencedor === 9) ? 1 : vencedor + 1;
    let asa = (pontuacaoTipos[vizinhoEsq] > pontuacaoTipos[vizinhoDir]) ? vizinhoEsq : vizinhoDir;
    let instintoVencedor = "SP"; let maxInst = -1;
    for (let tag in pontuacaoInstinto) { if (pontuacaoInstinto[tag] > maxInst) { maxInst = pontuacaoInstinto[tag]; instintoVencedor = tag; } }
    const nomesInstinto = { "SP": "AUTOPRESERVAÇÃO", "SX": "SEXUAL", "SO": "SOCIAL" };
    const protocolo = "#PM-" + Math.floor(1000 + Math.random() * 9000);
    updateElement('protocol-code', protocolo);
    setTimeout(() => { exibirResultados(vencedor, asa, nomesInstinto[instintoVencedor]); }, 3000);
}

function enviarResultadoFormspree(tipo, asa, subtipo) {
    const dados = perfisData[tipo] || perfisData[9];
    const formData = new FormData();
    formData.append("nome", userName);
    formData.append("whatsapp", document.getElementById("input-phone") ? document.getElementById("input-phone").value : "não informado");
    formData.append("origem", document.getElementById("input-source") ? document.getElementById("input-source").value : "não informado");
    formData.append("resultado_tipo", `TIPO ${tipo} - ${dados.nome}`);
    formData.append("resultado_asa", `ASA ${asa}`);
    formData.append("resultado_instinto", subtipo);
    formData.append("pontuacao_detalhada", JSON.stringify(pontuacaoTipos));
    formData.append("data_hora", new Date().toLocaleString("pt-BR"));
    
    fetch("https://formspree.io/f/xwvoklpq", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    }).catch(err => console.log("Erro ao enviar resultado:", err));
}

function exibirResultados(tipo, asa, subtipo) {
    document.getElementById('screen-loading').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');
    
    enviarResultadoFormspree(tipo, asa, subtipo);
    
    // Fallback seguro caso o tipo não esteja completo
    const dados = perfisData[tipo] || perfisData[9]; 
    
    updateElement('user-name-result', userName);
    updateElement('res-archetype', dados.nome); 
    updateElement('res-type', `TIPO ${tipo}`); 
    updateElement('res-wing-calc', `ASA ${asa}`); 
    updateElement('res-subtype', subtipo);

    // Renderiza as Listas
    const createList = (items) => items.map(i => `<li>${i}</li>`).join('');

    document.getElementById('list-essencia').innerHTML = createList(dados.essencia);
    document.getElementById('list-forcas').innerHTML = createList(dados.forcas);
    document.getElementById('list-desequilibrio').innerHTML = createList(dados.desequilibrio);
    document.getElementById('list-potencial').innerHTML = createList(dados.potencial);
    document.getElementById('list-desafios').innerHTML = createList(dados.desafios);
    
    updateElement('txt-padrao-frase', `"${dados.padraoFrase}"`);
    document.getElementById('list-padrao-preco').innerHTML = createList(dados.padraoPreco);
    updateElement('txt-padrao-acao', dados.padraoAcao);
    document.getElementById('list-praticas').innerHTML = createList(dados.praticas);

    // Barras de Competência
    let infl = 70, res = 70, est = 70; 
    if ([2,3,7,8].includes(tipo)) infl = 90 + Math.random()*5; 
    if ([1,8,9,5].includes(tipo)) res = 90 + Math.random()*5; 
    if ([5,6,1,3].includes(tipo)) est = 90 + Math.random()*5;
    
    setTimeout(() => { 
        document.getElementById('bar-infl').style.width = `${infl}%`; 
        document.getElementById('score-infl').innerText = `${Math.floor(infl)}%`; 
        document.getElementById('bar-res').style.width = `${res}%`; 
        document.getElementById('score-res').innerText = `${Math.floor(res)}%`; 
        document.getElementById('bar-est').style.width = `${est}%`; 
        document.getElementById('score-est').innerText = `${Math.floor(est)}%`; 
    }, 500);

    gerarGraficoRadar(pontuacaoTipos);
}

function gerarGraficoRadar(pontos) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    const dataValues = [pontos[1], pontos[2], pontos[3], pontos[4], pontos[5], pontos[6], pontos[7], pontos[8], pontos[9]];
    if(window.myRadar) window.myRadar.destroy();
    window.myRadar = new Chart(ctx, { type: 'radar', data: { labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'], datasets: [{ label: 'Assinatura Neural', data: dataValues, backgroundColor: 'rgba(212, 175, 55, 0.2)', borderColor: '#D4AF37', borderWidth: 2, pointBackgroundColor: '#fff', pointBorderColor: '#D4AF37' }] }, options: { scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.1)' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#aaa', font: { size: 10 } }, ticks: { display: false, backdropColor: 'transparent' }, suggestedMin: 0, suggestedMax: 20 } }, plugins: { legend: { display: false } }, maintainAspectRatio: false } });
}

function baixarEEntrar() {
    const btn = document.querySelector('.btn-cta');
    if(btn) { btn.innerHTML = "DIRECIONANDO..."; btn.disabled = true; }
    if(LINK_PDF && LINK_PDF.length > 5) { window.open(LINK_PDF, '_blank'); }
    setTimeout(() => { window.location.href = LINK_WHATSAPP; }, 1000);
}

function updateElement(id, text) { const el = document.getElementById(id); if(el) el.innerHTML = text; }
