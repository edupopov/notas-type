# Exercícios básicos em TypeScript (execute no Playground) - https://www.typescriptlang.org/

<img width="1896" height="785" alt="image" src="https://github.com/user-attachments/assets/72f35943-fb90-4717-9176-46a320a8c730" />


## Pré-requisitos
- Node.js (LTS)
- `npm i -D typescript ts-node @types/node`

## Como executar
- `npm run start:tipos` – Tipos primitivos (8 exercícios)
- `npm run start:rel` – Operadores relacionais (8 exercícios)
- `npm run start:log` – Operadores lógicos (8 exercícios)
- `npm run start:rep` – Estruturas de repetição (8 exercícios)

Todos os arquivos estão **comentados linha a linha**, com `console.log` para visualizar a saída.

estrutura sugerida do repositório
ts-exercicios-basicos/
  ├─ src/
  │  ├─ 01-tipos-primitivos.ts
  │  ├─ 02-operadores-relacionais.ts
  │  ├─ 03-operadores-logicos.ts
  │  └─ 04-estruturas-repeticao.ts
  ├─ package.json
  ├─ tsconfig.json
  └─ README.md

scripts rápidos (package.json)
{
  "scripts": {
    "start:tipos": "ts-node src/01-tipos-primitivos.ts",
    "start:rel": "ts-node src/02-operadores-relacionais.ts",
    "start:log": "ts-node src/03-operadores-logicos.ts",
    "start:rep": "ts-node src/04-estruturas-repeticao.ts"
  }
}
