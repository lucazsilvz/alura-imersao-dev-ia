# 🧮 Desafio 02: Evoluindo sua Primeira Aplicação com Google Antigravity

Este projeto representa a evolução do [Desafio 01](../01-calculadora-python), aplicando práticas reais de Engenharia de Software no ambiente do **Google Antigravity**:
1. **Compreensão de Código Legado:** Análise da estrutura pré-existente da calculadora.
2. **Implementação de Nova Funcionalidade:** Inclusão do cálculo de porcentagem (`%`).
3. **Engenharia de Qualidade (Testes Automatizados):** Criação de suíte de testes com a biblioteca padrão `unittest` para evitar regressões nas funções matemáticas existentes.
4. **Refatoração & Robustez:** Adição de menu contínuo com opção de saída e tratamento de exceções para entradas inválidas e divisão por zero.

---

## 📁 Estrutura de Arquivos

- `calculadora.py`: Código da aplicação com as operações aritméticas e nova operação de porcentagem.
- `test_calculadora.py`: Suíte de testes unitários para verificação contínua da aplicação.

---

## 🚀 Como Executar

Execute no terminal dentro desta pasta:

```powershell
python calculadora.py
```

---

## 🧪 Como Executar os Testes Unitários

Para verificar a integridade de todas as operações:

```powershell
python -m unittest test_calculadora.py -v
```
