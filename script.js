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
            ev.preventDefault(); // IMPEDE O REDIRECIONAMENTO PADRÃO
            
            const nameInput = document.getElementById("input-name");
            if(nameInput && nameInput.value.trim() !== "") {
                userName = nameInput.value.trim().toUpperCase();
            }

            const btn = form.querySelector("button");
            btn.innerHTML = '<i class="ph-spinner-gap ph-spin"></i> ACESSANDO...';
            btn.disabled = true;

            const data = new FormData(form);
            
            // ENVIO SILENCIOSO PARA O FORMSPREE
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json' // OBRIGATÓRIO PARA NÃO REDIRECIONAR
                }
            })
            .then(response => {
                if (response.ok) {
                    iniciarQuizTela(); // SUCESSO
                } else {
                    console.log("Erro no Formspree, mas iniciando teste...");
                    iniciarQuizTela(); // INICIA MESMO COM ERRO PRA NÃO TRAVAR
                }
            })
            .catch(error => {
                console.log("Erro de rede:", error);
                iniciarQuizTela(); // INICIA MESMO COM ERRO
            });
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
const perfisData = { 1: { nome: "O PERFECCIONISTA", vicio: "Ira", pctVicio: "92%", pctLider: "95%", genese: "Você cresceu sentindo que só seria amado se fosse perfeito. Engoliu a raiva para ser o 'exemplo'.", comportamento: "Busca ordem no caos. É rígido consigo mesmo.", evolucao: "O Eneagrama mostra o erro. A PNL reconfigura sua reação. O Estoicismo traz serenidade. A Andragogia acelera sua mudança." }, 2: { nome: "O AJUDADOR", vicio: "Orgulho", pctVicio: "88%", pctLider: "85%", genese: "Acreditou que ter necessidades próprias era egoísmo. Comprou amor sendo útil.", comportamento: "Você se torna indispensável para criar dependência. Dá tudo, mas cobra a conta emocional depois.", evolucao: "Usamos PNL para quebrar o vício em aprovação e Estoicismo para fortalecer seu autoamor." }, 3: { nome: "O REALIZADOR", vicio: "Vaidade", pctVicio: "98%", pctLider: "99%", genese: "Você aprendeu que Amor = Performance. Seu valor foi medido por notas e troféus.", comportamento: "Você é um camaleão. Sabe vender, mas sente um vazio existencial quando a plateia vai embora.", evolucao: "O método PráticaMente usa Andragogia para remover a máscara e construir uma identidade antifrágil." }, 4: { nome: "O INDIVIDUALISTA", vicio: "Inveja", pctVicio: "90%", pctLider: "75%", genese: "Sentiu-se invisível ou 'quebrado' na infância. Acredita que a felicidade é dos outros.", comportamento: "Vicia na melancolia e no drama para se sentir vivo. Sabota o que é estável.", evolucao: "Parar de romantizar a dor. O Estoicismo te dá disciplina e a PNL ancora estados de gratidão." }, 5: { nome: "O OBSERVADOR", vicio: "Avareza", pctVicio: "85%", pctLider: "82%", genese: "Sentiu o mundo como invasivo. Ergueu muros mentais para se proteger.", comportamento: "Você acumula conhecimento mas tem medo de agir. Vive na cabeça e desconecta do corpo.", evolucao: "O PráticaMente te tira da arquibancada. A PNL conecta mente e corpo para a ação real." }, 6: { nome: "O LEALISTA", vicio: "Medo", pctVicio: "94%", pctLider: "80%", genese: "Viveu em ambiente imprevisível. Radar de perigo travou no 'ligado'.", comportamento: "Cenários catastróficos te paralisam. Você busca segurança fora, mas duvida dela.", evolucao: "Substituir dúvida por Fé em Si. A PNL silencia o medo e o Estoicismo constrói sua fortaleza." }, 7: { nome: "O ENTUSIASTA", vicio: "Gula", pctVicio: "89%", pctLider: "88%", genese: "Fugiu de uma dor infantil para a imaginação. Criou um escudo de positividade.", comportamento: "Começa dez projetos, não termina nenhum. Tem pavor do tédio e do silêncio.", evolucao: "Aprender a ficar. Andragogia te dá foco laser e Estoicismo ensina a alegria na profundidade." }, 8: { nome: "O DESAFIADOR", vicio: "Luxúria", pctVicio: "96%", pctLider: "96%", genese: "Matou sua inocência para sobreviver. Decidiu: 'Nunca mais serei controlado'.", comportamento: "Atropela as pessoas sem ver. Sua honestidade fere. Tem um coração gigante blindado.", evolucao: "Baixar a guarda. A PNL ressignifica a vulnerabilidade como poder real de liderança." }, 9: { nome: "O PACIFICISTA", vicio: "Preguiça", pctVicio: "80%", pctLider: "70%", genese: "Sentiu que sua voz causava problemas. A estratégia foi ficar 'invisível'.", comportamento: "Procrastina o essencial. Acumula raiva passiva até explodir ou sumir.", evolucao: "Acordar para a vida. Usamos Andragogia para criar micro-metas de ação imediata." } };

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

function exibirResultados(tipo, asa, subtipo) {
    document.getElementById('screen-loading').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');
    const dados = perfisData[tipo];
    updateElement('user-name-result', userName);
    if(dados) {
        updateElement('res-archetype', dados.nome); updateElement('res-type', `TIPO ${tipo}`); updateElement('res-wing-calc', `ASA ${asa}`); updateElement('res-subtype', subtipo);
        updateElement('res-vice', dados.vicio.toUpperCase()); updateElement('res-genesis', dados.genese); updateElement('res-behavior', dados.comportamento); updateElement('res-evolution', dados.evolucao);
        let infl = 70, res = 70, est = 70; if ([2,3,7,8].includes(tipo)) infl = 90 + Math.random()*5; if ([1,8,9,5].includes(tipo)) res = 90 + Math.random()*5; if ([5,6,1,3].includes(tipo)) est = 90 + Math.random()*5;
        setTimeout(() => { document.getElementById('bar-infl').style.width = `${infl}%`; document.getElementById('score-infl').innerText = `${Math.floor(infl)}%`; document.getElementById('bar-res').style.width = `${res}%`; document.getElementById('score-res').innerText = `${Math.floor(res)}%`; document.getElementById('bar-est').style.width = `${est}%`; document.getElementById('score-est').innerText = `${Math.floor(est)}%`; }, 500);
        gerarGraficoRadar(pontuacaoTipos);
    }
}

function gerarGraficoRadar(pontos) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    const dataValues = [pontos[1], pontos[2], pontos[3], pontos[4], pontos[5], pontos[6], pontos[7], pontos[8], pontos[9]];
    new Chart(ctx, { type: 'radar', data: { labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'], datasets: [{ label: 'Assinatura Neural', data: dataValues, backgroundColor: 'rgba(212, 175, 55, 0.2)', borderColor: '#D4AF37', borderWidth: 2, pointBackgroundColor: '#fff', pointBorderColor: '#D4AF37' }] }, options: { scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.1)' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#aaa', font: { size: 10 } }, ticks: { display: false, backdropColor: 'transparent' }, suggestedMin: 0, suggestedMax: 20 } }, plugins: { legend: { display: false } }, maintainAspectRatio: false } });
}

function baixarEEntrar() {
    const btn = document.querySelector('.btn-cta');
    if(btn) { btn.innerHTML = "DIRECIONANDO..."; btn.disabled = true; }
    if(LINK_PDF && LINK_PDF.length > 5) { window.open(LINK_PDF, '_blank'); }
    setTimeout(() => { window.location.href = LINK_WHATSAPP; }, 1000);
}

function updateElement(id, text) { const el = document.getElementById(id); if(el) el.innerText = text; }

