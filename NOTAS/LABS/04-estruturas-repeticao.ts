/*********************************************************
 * TÓPICO: Estruturas de repetição
 * Conteúdo: for, while, do...while + for..of / for..in
 * Executar: ts-node src/04-estruturas-repeticao.ts
 *********************************************************/

/* EX1) for — contar de 1 a 5 */
for (let i = 1; i <= 5; i++) {
  console.log("[EX1] i =", i);
}

/* EX2) for — somar elementos de um array */
let notas: number[] = [7, 8.5, 6, 9];
let soma: number = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i]; // acumula cada nota
}
console.log("[EX2] soma notas:", soma);

/* EX3) while — pedir até acertar (simulação sem input real) */
let tentativa: number = 0;
let senhaOk: boolean = false;
while (!senhaOk && tentativa < 3) {
  tentativa++;
  // simulação: dá certo na terceira tentativa
  senhaOk = (tentativa === 3);
  console.log("[EX3] tentativa:", tentativa, "| senhaOk:", senhaOk);
}

/* EX4) do...while — executa pelo menos uma vez */
let contador: number = 0;
do {
  contador++;
  console.log("[EX4] contador:", contador);
} while (contador < 3);

/* EX5) for..of — percorre valores de um array (mais legível) */
let cursos: string[] = ["TS", "Node", "SQL"];
for (const curso of cursos) {
  console.log("[EX5] curso:", curso);
}

/* EX6) for..in — percorre índices/keys (cuidado: em objetos/arrays) */
let aluno = { nome: "Ana", idade: 22, ativo: true };
for (const chave in aluno) {
  console.log("[EX6] chave:", chave, "| valor:", (aluno as any)[chave]);
}

/* EX7) break — parar o laço antes do fim */
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("[EX7] break ao chegar no 4");
    break; // sai do laço imediatamente
  }
  console.log("[EX7] i =", i);
}

/* EX8) continue — pular uma iteração específica */
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log("[EX8] continue no par:", i);
    continue; // pula os pares
  }
  console.log("[EX8] impar processado:", i);
}
