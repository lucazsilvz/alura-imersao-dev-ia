/**
 * Testes Unitários Automatizados - Desafio 3
 * Executado nativamente com Node.js (sem dependências externas)
 */
const test = require('node:test');
const assert = require('node:assert');
const { GerenciadorTarefas } = require('./app.js');

test('1. Deve adicionar uma nova tarefa com status inicial pendente', () => {
    const gerenciador = new GerenciadorTarefas();
    const tarefa = gerenciador.adicionar('Estudar Google Antigravity');

    assert.strictEqual(gerenciador.obterTodas().length, 1);
    assert.strictEqual(tarefa.texto, 'Estudar Google Antigravity');
    assert.strictEqual(tarefa.concluida, false);
    assert.ok(tarefa.id, 'A tarefa deve conter um ID');
});

test('2. Deve rejeitar adição de tarefas vazias ou só com espaços', () => {
    const gerenciador = new GerenciadorTarefas();

    assert.throws(() => {
        gerenciador.adicionar('');
    }, /A tarefa não pode estar vazia/);

    assert.throws(() => {
        gerenciador.adicionar('   ');
    }, /A tarefa não pode estar vazia/);

    assert.strictEqual(gerenciador.obterTodas().length, 0);
});

test('3. Deve marcar uma tarefa pendente como concluída', () => {
    const gerenciador = new GerenciadorTarefas();
    const tarefa = gerenciador.adicionar('Concluir Desafio 3');

    assert.strictEqual(tarefa.concluida, false);

    // Alterna para concluída
    const atualizada = gerenciador.alternarConclusao(tarefa.id);
    assert.strictEqual(atualizada.concluida, true);
    assert.strictEqual(gerenciador.obterTodas()[0].concluida, true);
});

test('4. Deve desmarcar uma tarefa já concluída (voltar para pendente)', () => {
    const gerenciador = new GerenciadorTarefas();
    const tarefa = gerenciador.adicionar('Revisar código com Antigravity');

    gerenciador.alternarConclusao(tarefa.id); // vira true
    const desmarcada = gerenciador.alternarConclusao(tarefa.id); // volta para false

    assert.strictEqual(desmarcada.concluida, false);
});

test('5. Deve remover uma tarefa existente pelo ID', () => {
    const gerenciador = new GerenciadorTarefas();
    const t1 = gerenciador.adicionar('Tarefa 1');
    const t2 = gerenciador.adicionar('Tarefa 2');

    assert.strictEqual(gerenciador.obterTodas().length, 2);

    const removida = gerenciador.remover(t1.id);
    assert.strictEqual(removida.id, t1.id);
    assert.strictEqual(gerenciador.obterTodas().length, 1);
    assert.strictEqual(gerenciador.obterTodas()[0].id, t2.id);
});

test('6. Deve lançar erro ao tentar concluir ou remover ID inexistente', () => {
    const gerenciador = new GerenciadorTarefas();

    assert.throws(() => {
        gerenciador.alternarConclusao('id-invalido');
    }, /não foi encontrada/);

    assert.throws(() => {
        gerenciador.remover('id-invalido');
    }, /não foi encontrada/);
});
