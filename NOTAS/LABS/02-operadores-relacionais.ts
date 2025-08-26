/*********************************************************
 * TÓPICO: Operadores relacionais
 * Conteúdo: > < >= <= == === != !==
 * Executar: ts-node src/02-operadores-relacionais.ts
 *********************************************************/

/* Cenário comum: notas e média */
let n1: number = 7.5;
let n2: number = 8.0;
let media: number = (n1 + n2) / 2;

console.log("[BASE] n1:", n1, "| n2:", n2, "| media:", media);

/* EX1) > maior que */
console.log("[EX1] media > 7 ?", media > 7);

/* EX2) >= maior ou igual */
console.log("[EX2] media >= 7.5 ?", media >= 7.5);

/* EX3) < menor que */
let faltas: number = 12;
console.log("[EX3] faltas < 15 ?", faltas < 15);

/* EX4) <= menor ou igual */
let capacidadeSala: number = 30;
let inscritos: number = 30;
console.log("[EX4] inscritos <= capacidadeSala ?", inscritos <= capacidadeSala);

/* EX5) == igualdade solta (converte tipos — EVITAR em TS) */
console.log("[EX5] '10' == 10 ?", "10" == 10); // true por coerção de tipo

/* EX6) === igualdade estrita (sem coerção — RECOMENDADO) */
console.log("[EX6] '10' === 10 ?", "10" === 10); // false (string ≠ number)

/* EX7) != diferença solta (com coerção — EVITAR) */
console.log("[EX7] '7' != 7 ?", "7" != 7); // false

/* EX8) !== diferença estrita (sem coerção — RECOMENDADO) */
console.log("[EX8] '7' !== 7 ?", "7" !== 7); // true
