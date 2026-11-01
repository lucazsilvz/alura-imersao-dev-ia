# Funções para realizar as quatro operações básicas
def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    # Proteção para evitar erro de divisão por zero
    if b == 0:
        return "Erro: não é possível dividir por zero!"
    return a / b

# --- Interface do Usuário no Terminal ---
print("=== CALCULADORA SIMPLES ===")
print("Escolha a operação:")
print("1 - Adição (+)")
print("2 - Subtração (-)")
print("3 - Multiplicação (*)")
print("4 - Divisão (/)")

# Recebe a escolha da operação
opcao = input("Digite o número da operação (1/2/3/4): ")

# Verifica se a opção digitada é válida antes de pedir os números
if opcao in ['1', '2', '3', '4']:
    # Recebe os dois números e converte de texto para número real (float)
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    # Lógica de decisão para saber qual operação executar
    if opcao == '1':
        resultado = somar(num1, num2)
        print(f"Resultado: {num1} + {num2} = {resultado}")
    elif opcao == '2':
        resultado = subtrair(num1, num2)
        print(f"Resultado: {num1} - {num2} = {resultado}")
    elif opcao == '3':
        resultado = multiplicar(num1, num2)
        print(f"Resultado: {num1} * {num2} = {resultado}")
    elif opcao == '4':
        resultado = dividir(num1, num2)
        print(f"Resultado: {num1} / {num2} = {resultado}")
else:
    print("Opção inválida! Escolha um valor entre 1 e 4.")