"""
Testes Unitários Automatizados - Desafio 2
Garante o correto funcionamento das operações originais e da nova função de porcentagem.
"""
import unittest
from calculadora import somar, subtrair, multiplicar, dividir, porcentagem

class TestCalculadora(unittest.TestCase):

    def test_somar(self):
        self.assertEqual(somar(10, 5), 15)
        self.assertEqual(somar(-1, 1), 0)
        self.assertEqual(somar(-5, -5), -10)
        self.assertAlmostEqual(somar(0.1, 0.2), 0.3, places=7)

    def test_subtrair(self):
        self.assertEqual(subtrair(10, 5), 5)
        self.assertEqual(subtrair(0, 5), -5)
        self.assertEqual(subtrair(-2, -3), 1)

    def test_multiplicar(self):
        self.assertEqual(multiplicar(4, 5), 20)
        self.assertEqual(multiplicar(-2, 3), -6)
        self.assertEqual(multiplicar(0, 100), 0)

    def test_dividir(self):
        self.assertEqual(dividir(10, 2), 5.0)
        self.assertEqual(dividir(7, 2), 3.5)
        with self.assertRaises(ValueError):
            dividir(10, 0)

    def test_porcentagem(self):
        # Validação da nova funcionalidade do Desafio 2
        self.assertEqual(porcentagem(200, 15), 30.0)    # 15% de 200 = 30
        self.assertEqual(porcentagem(50, 100), 50.0)    # 100% de 50 = 50
        self.assertEqual(porcentagem(1000, 0), 0.0)     # 0% de 1000 = 0
        self.assertEqual(porcentagem(80, 2.5), 2.0)     # 2.5% de 80 = 2.0

if __name__ == "__main__":
    unittest.main()
