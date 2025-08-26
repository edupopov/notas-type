// Importa a biblioteca readline-sync para ler dados do teclado
import * as rs from "readline-sync";

// 1) Solicitar o nome do aluno
let aluno: string = rs.question("1) Nome do aluno: ").trim();

// 2) Solicitar o nome da matéria
let materia: string = rs.question("2) Nome da materia: ").trim();

// 3) Solicitar a quantidade de avaliações
let qtdAvaliacoesTexto: string = rs.question("3) Quantidade de avaliacoes: ").trim();
let qtdAvaliacoes: number = parseInt(qtdAvaliacoesTexto, 10);

// Validação simples para garantir pelo menos 1 avaliação
while (isNaN(qtdAvaliacoes) || qtdAvaliacoes <= 0) {
  console.log("   -> Valor invalido. Informe um número inteiro maior que 0.");
  qtdAvaliacoesTexto = rs.question("   Quantidade de avaliacoes: ").trim();
  qtdAvaliacoes = parseInt(qtdAvaliacoesTexto, 10);
}

// ==========================
// Apenas exibir o que foi digitado
// ==========================
console.log("\n===== DADOS DIGITADOS =====");
console.log(`Aluno:   ${aluno}`);
console.log(`Materia: ${materia}`);
console.log(`Qtd Avaliacoes: ${qtdAvaliacoes}`);
console.log("===========================\n");
