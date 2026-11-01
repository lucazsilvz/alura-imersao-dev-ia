# 📋 Desafio 03: Criando uma Lista de Tarefas com Google Antigravity

Aplicação de Lista de Tarefas (*To-Do List*) com interface visual moderna, desenvolvida para praticar a criação de um software completo do zero, separação de responsabilidades e testes automatizados.

---

## ⚙️ Funcionalidades Implementadas

1. **➕ Adicionar Tarefas:** Digite uma atividade no campo de texto e adicione à lista (com validação para evitar campos vazios).
2. **✅ Concluir Tarefas com Diferenciação Visual:** Ao marcar o checkbox de uma tarefa:
   - O texto recebe estilo tachado (`line-through`) e cor atenuada.
   - O cartão da tarefa ganha fundo suave e opacidade reduzida.
   - Um distintivo verde indicando `CONCLUÍDA` é exibido.
   - O contador de progresso é recalculado automaticamente.
3. **🗑️ Remover Tarefas:** Exclua atividades da lista com um clique.
4. **💾 Persistência Automática:** As tarefas são salvas no `LocalStorage` do navegador, mantendo o estado mesmo após recarregar ou fechar a página.

---

## 📁 Estrutura de Componentes

- `index.html`: **Estrutura (Esqueleto)** - Marcação semântica com formulário, contador e contêiner da lista.
- `style.css`: **Estilo & Visual** - Design responsivo, tipografia limpa e regras de destaque para tarefas pendentes vs. concluídas.
- `app.js`: **Lógica & Comportamento** - Classe `GerenciadorTarefas` desacoplada da interface (DOM) para facilitar testes e manutenção.
- `app.test.js`: **Testes Automatizados** - Bateria de 6 testes unitários com o test runner nativo do Node.js.

---

## 🚀 Como Executar a Aplicação

Basta abrir o arquivo `index.html` em qualquer navegador (Google Chrome, Microsoft Edge, etc.):

- **Via Terminal (PowerShell):**
  ```powershell
  Start-Process "index.html"
  ```
- **Ou no Explorador de Arquivos:** Dê um duplo clique no arquivo `index.html`.

---

## 🧪 Como Executar os Testes Unitários

Para validar a lógica de negócio da lista de tarefas:

```powershell
node --test app.test.js
```
