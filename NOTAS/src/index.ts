// Exercício: Média de notas com nota de corte
// Requisitos: sem funções definidas pelo aluno; usar variáveis, IF, SWITCH-CASE
// Execução em Node.js com TypeScript + readline-sync
// Desenvolvido por Eduardo Popovici

// Importa uma biblioteca externa
// O "readline-sync" é um módulo do Node.js (instalado via npm install readline-sync).
// Ele permite ler entradas do teclado de forma síncrona 
// (ou seja, o programa espera o usuário digitar algo antes de continuar).
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

// 4) Pedir as notas e calcular a média
let soma: number = 0;
let notasTexto: string = "";
for (let i = 1; i <= qtdAvaliacoes; i++) {
  let notaStr: string = rs.question(`4) Informe a nota ${i}: `).trim();

  // Permite vírgula decimal (ex.: 7,5) trocando por ponto
  notaStr = notaStr.replace(",", ".");
  let nota: number = parseFloat(notaStr);

  // Validação simples entre 0 e 10 (ajuste conforme sua regra)
  while (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("   -> Nota invalida. Digite um número entre 0 e 10 (ex.: 7.5 ou 7,5).");
    notaStr = rs.question(`   Refaça a nota ${i}: `).trim().replace(",", ".");
    nota = parseFloat(notaStr);
  }

  soma += nota;
  notasTexto += (i === 1 ? "" : ", ") + nota.toFixed(2);
}

let media: number = soma / qtdAvaliacoes;

// 5) Pedir a nota de corte
let corteStr: string = rs.question("5) Nota de corte (ex.: 6 ou 6,0): ").trim().replace(",", ".");
let notaDeCorte: number = parseFloat(corteStr);

// Garante que a nota de corte seja um número entre 0 e 10
while (isNaN(notaDeCorte) || notaDeCorte < 0 || notaDeCorte > 10) {
  console.log("   -> Valor inválido. Digite um número entre 0 e 10.");
  corteStr = rs.question("   Nota de corte: ").trim().replace(",", ".");
  notaDeCorte = parseFloat(corteStr);
}

// SWITCH-CASE para status (1 = aprovado, 0 = reprovado)
let codigoStatus: number = media >= notaDeCorte ? 1 : 0;
let status: string = "";

switch (codigoStatus) {
  case 1:
    status = "APROVADO";
    break;
  default:
    status = "REPROVADO";
    break;
}

// IF adicional para uma mensagem contextual (ex.: atingiu exatamente a nota de corte)
if (Math.abs(media - notaDeCorte) < 0.000001) {
  console.log("Observação: média igual à nota de corte.");
}

// Saída consolidada
console.log("\n===== RESULTADO =====");
console.log(`Aluno:   ${aluno}`);
console.log(`Matéria: ${materia}`);
console.log(`Notas:   ${notasTexto}`);
console.log(`Média:   ${media.toFixed(2)}`);
console.log(`Corte:   ${notaDeCorte.toFixed(2)}`);
console.log(`Status:  ${status}`);
console.log("=====================\n");
