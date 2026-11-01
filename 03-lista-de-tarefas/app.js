/**
 * 📝 Gerenciador de Lista de Tarefas (Desafio 3 - Imersão Dev)
 * 
 * Separação de Responsabilidades:
 * 1. GerenciadorTarefas: Contém a lógica de negócio (adicionar, concluir, remover).
 * 2. Manipulação do DOM: Cuida da interação com o usuário na tela e LocalStorage.
 */

class GerenciadorTarefas {
    constructor(tarefasIniciais = []) {
        this.tarefas = [...tarefasIniciais];
    }

    /**
     * Adiciona uma nova tarefa à lista.
     * @param {string} texto - A descrição da atividade.
     * @returns {Object} A tarefa criada.
     */
    adicionar(texto) {
        const textoLimpo = texto ? texto.trim() : '';
        if (!textoLimpo) {
            throw new Error('A tarefa não pode estar vazia.');
        }

        const novaTarefa = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
            texto: textoLimpo,
            concluida: false,
            criadaEm: new Date().toISOString()
        };

        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    /**
     * Alterna o estado de conclusão da tarefa (pendente <-> concluída).
     * @param {string} id - Identificador da tarefa.
     * @returns {Object} A tarefa atualizada.
     */
    alternarConclusao(id) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (!tarefa) {
            throw new Error(`Tarefa com ID "${id}" não foi encontrada.`);
        }
        tarefa.concluida = !tarefa.concluida;
        return tarefa;
    }

    /**
     * Remove uma tarefa da lista pelo identificador.
     * @param {string} id - Identificador da tarefa a ser excluída.
     * @returns {Object} A tarefa removida.
     */
    remover(id) {
        const index = this.tarefas.findIndex(t => t.id === id);
        if (index === -1) {
            throw new Error(`Tarefa com ID "${id}" não foi encontrada.`);
        }
        const [removida] = this.tarefas.splice(index, 1);
        return removida;
    }

    /**
     * Retorna a lista atual de tarefas.
     * @returns {Array}
     */
    obterTodas() {
        return this.tarefas;
    }
}

// Exporta para testes automatizados no Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GerenciadorTarefas };
}

// Código que executa apenas no navegador (interação com a tela)
if (typeof window !== 'undefined') {
    const STORAGE_KEY = 'imersao_dev_tarefas';

    // Recupera tarefas salvas no navegador ou inicia lista vazia
    function carregarTarefasSalvas() {
        try {
            const dados = localStorage.getItem(STORAGE_KEY);
            return dados ? JSON.parse(dados) : [];
        } catch {
            return [];
        }
    }

    const gerenciador = new GerenciadorTarefas(carregarTarefasSalvas());

    function salvar() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gerenciador.obterTodas()));
    }

    const inputTarefa = document.getElementById('inputTarefa');
    const formTarefa = document.getElementById('formTarefa');
    const listaTarefasEl = document.getElementById('listaTarefas');
    const contadorTarefasEl = document.getElementById('contadorTarefas');

    function renderizar() {
        listaTarefasEl.innerHTML = '';
        const tarefas = gerenciador.obterTodas();

        const concluidasCount = tarefas.filter(t => t.concluida).length;
        contadorTarefasEl.textContent = `${concluidasCount} de ${tarefas.length} concluída(s)`;

        if (tarefas.length === 0) {
            listaTarefasEl.innerHTML = `
                <li class="item-vazio">
                    <span>✨ Nenhuma tarefa no momento. Que tal adicionar uma?</span>
                </li>
            `;
            return;
        }

        tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.className = `tarefa-item ${tarefa.concluida ? 'concluida' : ''}`;
            li.dataset.id = tarefa.id;

            li.innerHTML = `
                <label class="tarefa-checkbox-label">
                    <input 
                        type="checkbox" 
                        class="tarefa-checkbox" 
                        ${tarefa.concluida ? 'checked' : ''}
                        aria-label="Marcar tarefa como concluída"
                    />
                    <span class="custom-checkbox"></span>
                    <span class="tarefa-texto">${escaparHtml(tarefa.texto)}</span>
                </label>
                <div class="tarefa-acoes">
                    ${tarefa.concluida ? '<span class="badge-status">Concluída</span>' : ''}
                    <button class="btn-remover" title="Remover tarefa" aria-label="Remover tarefa">
                        🗑️
                    </button>
                </div>
            `;

            // Evento: Concluir/Desconcluir
            const checkbox = li.querySelector('.tarefa-checkbox');
            checkbox.addEventListener('change', () => {
                gerenciador.alternarConclusao(tarefa.id);
                salvar();
                renderizar();
            });

            // Evento: Remover
            const btnRemover = li.querySelector('.btn-remover');
            btnRemover.addEventListener('click', () => {
                gerenciador.remover(tarefa.id);
                salvar();
                renderizar();
            });

            listaTarefasEl.appendChild(li);
        });
    }

    function escaparHtml(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    formTarefa.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = inputTarefa.value;
        try {
            gerenciador.adicionar(texto);
            salvar();
            inputTarefa.value = '';
            renderizar();
            inputTarefa.focus();
        } catch (erro) {
            alert(erro.message);
        }
    });

    // Renderização inicial
    renderizar();
}
