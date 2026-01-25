// RESULTADO SIMULADO (depois ligamos ao cálculo real)
const perfil = {
  tipo: 9,
  nome: "Pacificador",
  asa: "8",
  instinto: "Social",
  espelho: "Desde cedo você aprendeu que para manter a paz precisava se anular.",
  infancia: "Você cresceu sentindo que suas vontades causavam conflito.",
  padrao: "Hoje você evita conflitos, procrastina e se adapta demais.",
  regressao: "Sob estresse você se isola, foge e entra em apatia.",
  evolucao: "Sua alma quer ir para ação, assertividade e protagonismo.",
  direcao: "No PráticaMente você aprende a agir mesmo sem motivação (Andragogia), reprogramar padrões (PNL), sustentar desconforto (Estoicismo) e sair do piloto automático do eneatipo."
};

const resultadoDiv = document.getElementById("resultado");

resultadoDiv.innerHTML = `
  <div class="card"><strong>Seu Perfil:</strong> Eneatipo ${perfil.tipo} – ${perfil.nome}</div>
  <div class="card"><strong>Asa Dominante:</strong> ${perfil.asa}</div>
  <div class="card"><strong>Instinto:</strong> ${perfil.instinto}</div>

  <div class="card"><strong>Espelho Psicológico</strong><br>${perfil.espelho}</div>
  <div class="card"><strong>Origem na Infância</strong><br>${perfil.infancia}</div>
  <div class="card"><strong>Padrão Atual</strong><br>${perfil.padrao}</div>
  <div class="card"><strong>Rota de Regressão</strong><br>${perfil.regressao}</div>
  <div class="card"><strong>Rota de Evolução</strong><br>${perfil.evolucao}</div>
  <div class="card"><strong>Direção PráticaMente</strong><br>${perfil.direcao}</div>
`;

const btnPdf = document.getElementById("btnPdf");
const modal = document.getElementById("modalProva");
const liberarPdf = document.getElementById("liberarPdf");

btnPdf.addEventListener("click", () => {
  modal.style.display = "flex";
});

liberarPdf.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;
  const avaliacao = document.getElementById("avaliacao").value;

  if (!nome || !contato || !avaliacao) {
    alert("Por favor, preencha nome, contato e avaliação.");
    return;
  }

  // Aqui você pode enviar para Firebase / Sheet depois
  console.log("PROVA SOCIAL:", {
    nome,
    contato,
    avaliacao,
    comentario: comentario.value,
    clareza: clareza.value,
    indicaria: indicaria.value
  });

  modal.style.display = "none";
  gerarPdf();
});

function gerarPdf() {
  alert("Aqui entra a geração real do PDF Premium (jsPDF).");
}

