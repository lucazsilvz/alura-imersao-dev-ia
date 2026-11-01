"""
Calculadora em Python - Versão Evoluída (Desafio 2)
Desenvolvida durante a Imersão Dev com Google Antigravity.
Inclui as operações básicas, nova funcionalidade de porcentagem e menu interativo.
"""

def somar(a: float, b: float) -> float:
    """Retorna a soma de dois números."""
    return a + b

def subtrair(a: float, b: float) -> float:
    """Retorna a subtração de dois números."""
    return a - b

def multiplicar(a: float, b: float) -> float:
    """Retorna a multiplicação de dois números."""
    return a * b

def dividir(a: float, b: float) -> float:
    """Retorna a divisão de dois números com proteção contra divisão por zero."""
    if b == 0:
        raise ValueError("Erro: Divisão por zero não é permitida.")
    return a / b

def porcentagem(valor: float, percentual: float) -> float:
    """
    Nova funcionalidade (Desafio 2):
    Calcula a taxa percentual aplicada sobre um valor.
    Exemplo: 15% de 200 = 30.
    """
    return (valor * percentual) / 100

def exibir_menu():
    """Exibe o menu visual da calculadora no terminal."""
    print("\n" + "=" * 32)
    print("   🧮 CALCULADORA EVOLUÍDA (D2) ")
    print("=" * 32)
    print("1 - Adição (+)")
    print("2 - Subtração (-)")
    print("3 - Multiplicação (*)")
    print("4 - Divisão (/)")
    print("5 - Porcentagem (%)  [NOVO]")
    print("0 - Sair")
    print("=" * 32)

def main():
    while True:
        exibir_menu()
        opcao = input("Escolha uma opção (0 a 5): ").strip()

        if opcao == "0":
            print("\nEncerrando a calculadora. Até mais! 👋")
            break

        if opcao not in ["1", "2", "3", "4", "5"]:
            print("\n❌ Opção inválida! Escolha um número entre 0 e 5.")
            continue

        try:
            if opcao == "5":
                num1 = float(input("Digite o valor total (base): "))
                num2 = float(input("Digite a porcentagem desejada (%): "))
            else:
                num1 = float(input("Digite o primeiro número: "))
                num2 = float(input("Digite o segundo número: "))
        except ValueError:
            print("\n❌ Entrada inválida! Por favor, digite números válidos.")
            continue

        try:
            if opcao == "1":
                resultado = somar(num1, num2)
                operador = "+"
            elif opcao == "2":
                resultado = subtrair(num1, num2)
                operador = "-"
            elif opcao == "3":
                resultado = multiplicar(num1, num2)
                operador = "*"
            elif opcao == "4":
                resultado = dividir(num1, num2)
                operador = "/"
            elif opcao == "5":
                resultado = porcentagem(num1, num2)
                print(f"\n✅ Resultado: {num2}% de {num1} = {resultado}")
                continue

            print(f"\n✅ Resultado: {num1} {operador} {num2} = {resultado}")
        except ValueError as err:
            print(f"\n❌ {err}")

if __name__ == "__main__":
    main()
