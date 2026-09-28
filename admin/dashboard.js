// --- Elementos da UI ---
const triggerBtn = document.getElementById('secret-trigger');
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const btnLogin = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');
const timerDisplay = document.getElementById('timer');

// Elementos de Filtro
const filterType = document.getElementById('filter-type');
const filterRole = document.getElementById('filter-role');

// Dados Brutos Simulados (Incluindo a categoria Liderança/Operação)
const dadosTabela = [
    { data: '27/09/2026', cargo: 'Operador de Caixa', categoria: 'Operação', tipo: 'Tipo 2', asa: 'Asa 3' },
    { data: '26/09/2026', cargo: 'Líder de Setor', categoria: 'Liderança', tipo: 'Tipo 8', asa: 'Asa 7' },
    { data: '26/09/2026', cargo: 'Repositor', categoria: 'Operação', tipo: 'Tipo 5', asa: 'Asa 6' },
    { data: '25/09/2026', cargo: 'Gerente Administrativo', categoria: 'Liderança', tipo: 'Tipo 3', asa: 'Asa 2' },
    { data: '25/09/2026', cargo: 'Repositor', categoria: 'Operação', tipo: 'Tipo 9', asa: 'Asa 1' },
    { data: '24/09/2026', cargo: 'Fiscal de Loja', categoria: 'Operação', tipo: 'Tipo 1', asa: 'Asa 9' }
];

// --- 1. Lógica de Autenticação e Timeout ---
let timeoutTimer;

triggerBtn.addEventListener('click', () => {
    loginSection.classList.remove('hidden');
});

btnLogin.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email !== '' && password !== '') {
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        
        Swal.fire({
            toast: true, position: 'top-end', icon: 'success',
            title: 'Sessão de Administrador Iniciada', showConfirmButton: false, timer: 3000,
            background: '#111111', color: '#D4AF37'
        });

        iniciarTimeoutSeguranca();
        carregarDadosSimulados(); 
    }
});

function iniciarTimeoutSeguranca() {
    let tempoRestante = 15 * 60; 
    clearInterval(timeoutTimer);
    
    timeoutTimer = setInterval(() => {
        tempoRestante--;
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;
        timerDisplay.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        
        if (tempoRestante <= 0) {
            encerrarSessao('Sessão expirada por inatividade.');
        }
    }, 1000);
}

function encerrarSessao(motivo = 'Sessão encerrada com segurança.') {
    clearInterval(timeoutTimer);
    dashboardSection.classList.add('hidden');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    
    Swal.fire({
        icon: 'info', title: 'Desconectado', text: motivo,
        background: '#111111', color: '#f5f5f5', confirmButtonColor: '#D4AF37'
    });
}

btnLogout.addEventListener('click', () => encerrarSessao());

// --- 2. Carregamento e Atualização de Dados ---
function carregarDadosSimulados() {
    setTimeout(() => {
        document.querySelectorAll('.skeleton-bg').forEach(el => el.classList.remove('skeleton-bg'));

        // Preenche KPIs Expandidos
        document.querySelector('#card-total .value').textContent = '248';
        document.querySelector('#card-top-type .value').textContent = 'Tipo 3';
        document.querySelector('#card-conversion .value').textContent = '85%';
        document.querySelector('#card-time .value').textContent = '4m 12s';
        document.querySelector('#card-clicks .value').textContent = '84';
        document.querySelector('#card-visits .value').textContent = '1.2k';

        // Preenche Insight
        document.getElementById('pnl-insight').innerHTML = `
            <strong>Perfil Dominante Identificado: Tipo 3 (O Realizador).</strong><br><br>
            <em>Estratégia Andragógica:</em> Foco na resolução prática de problemas. Na PNL, utilize ancoragem visual e foque a comunicação nos resultados finais em vez de processos minuciosos.
        `;

        renderizarGraficoTeia();
        renderizarTabela(dadosTabela); // Renderiza a tabela completa inicialmente
    }, 1200);
}

// --- 3. Gráfico em Teia (Chart.js ajustado para Dourado) ---
function renderizarGraficoTeia() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6', 'Tipo 7', 'Tipo 8', 'Tipo 9'],
            datasets: [{
                label: 'Diagnósticos Atuais',
                data: [12, 19, 45, 8, 22, 15, 10, 30, 25],
                backgroundColor: 'rgba(212, 175, 55, 0.2)', // Fundo Dourado Translúcido
                borderColor: '#D4AF37', // Borda Ouro
                pointBackgroundColor: '#F3E5AB', // Pontos Ouro Claro
                pointBorderColor: '#050505',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#f5f5f5', font: { size: 12 } },
                    ticks: { display: false }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// --- 4. Lógica de Renderização e Filtragem da Tabela ---
function renderizarTabela(dados) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    if (dados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #888;">Nenhum perfil encontrado com estes filtros.</td></tr>';
        return;
    }

    dados.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.data}</td>
            <td><strong>${row.cargo}</strong> <span style="font-size: 10px; color: #888; margin-left: 5px;">(${row.categoria})</span></td>
            <td style="color: var(--gold-primary); font-weight: bold;">${row.tipo}</td>
            <td>${row.asa}</td>
            <td><button class="gold-btn-outline" style="padding: 5px 10px; font-size: 11px;">Analisar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// Event Listeners dos Filtros
function aplicarFiltros() {
    const tipoSelecionado = filterType.value;
    const categoriaSelecionada = filterRole.value;

    const dadosFiltrados = dadosTabela.filter(row => {
        const correspondeTipo = tipoSelecionado === "" || row.tipo === tipoSelecionado;
        const correspondeCategoria = categoriaSelecionada === "" || row.categoria === categoriaSelecionada;
        return correspondeTipo && correspondeCategoria;
    });

    renderizarTabela(dadosFiltrados);
}

filterType.addEventListener('change', aplicarFiltros);
filterRole.addEventListener('change', aplicarFiltros);

// --- 5. Clean UI (Modo Foco) ---
document.getElementById('btn-clean-ui').addEventListener('click', function() {
    const charts = document.querySelector('.charts-grid');
    charts.classList.toggle('hidden');
    this.textContent = charts.classList.contains('hidden') ? 'Sair do Modo Foco' : 'Modo Foco';
}); 
