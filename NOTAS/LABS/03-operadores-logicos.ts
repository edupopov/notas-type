/*********************************************************
 * TÓPICO: Operadores lógicos
 * Conteúdo: && (E), || (OU), ! (NÃO), curto-circuito
 * Executar: ts-node src/03-operadores-logicos.ts
 *********************************************************/

/* Base para exemplos */
let mediaFinal: number = 6.9;
let faltas: number = 8;
let notaDeCorte: number = 7;
let limiteFaltas: number = 10;

/* EX1) && — todas as condições verdadeiras */
let aprovadoPorNotaEFalta: boolean = (mediaFinal >= notaDeCorte) && (faltas <= limiteFaltas);
console.log("[EX1] aprovado por nota e falta?", aprovadoPorNotaEFalta);

/* EX2) || — pelo menos uma condição verdadeira */
let temBonus: boolean = (mediaFinal >= 9) || (faltas === 0);
console.log("[EX2] tem bônus por excelência ou assiduidade?", temBonus);

/* EX3) ! — negação lógica */
let reprovado: boolean = !(mediaFinal >= notaDeCorte);
console.log("[EX3] reprovado (negação de aprovado por nota)?", reprovado);

/* EX4) combinação && e || com parênteses (precedência clara) */
let recuperacao: boolean = (mediaFinal >= 5 && mediaFinal < notaDeCorte) || (faltas > limiteFaltas - 2);
console.log("[EX4] vai para recuperação?", recuperacao);

/* EX5) curto-circuito com || (define valor padrão) */
let nomeDigitado: string = "";
let nomeExibicao: string = nomeDigitado || "Aluno sem nome"; // se string vazia, usa padrão
console.log("[EX5] nomeExibicao:", nomeExibicao);

/* EX6) curto-circuito com && (executa somente se condição true) */
let mensagem: string = "";
let enviarEmail: boolean = true;
enviarEmail && (mensagem = "Email enviado com sucesso!"); // só atribui se true
console.log("[EX6] mensagem:", mensagem);

/* EX7) dupla negação (!!) para converter para boolean */
let valorQualquer: any = "ok"; // qualquer valor truthy
let comoBoolean: boolean = !!valorQualquer; // true se “truthy”, false se “falsy”
console.log("[EX7] !!'ok' ->", comoBoolean);

/* EX8) segurança em login (exemplo didático) */
let usuario: string | null = "admin";
let senhaCorreta: boolean = true;
let acessoPermitido: boolean = !!usuario && senhaCorreta;
console.log("[EX8] acessoPermitido:", acessoPermitido);
