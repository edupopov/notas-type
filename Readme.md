Passo a passo para replicar (documentação para os alunos)
Pré-requisitos

Node.js instalado (versão LTS recomendada).

VS Code (ou outro editor).

A extensão “ESLint” é opcional, mas ajuda.

Criar o projeto
# 1) Criar pasta do projeto e entrar nela
mkdir media-aluno-ts
cd media-aluno-ts

# 2) Iniciar o projeto Node
npm init -y

# 3) Instalar TypeScript + ts-node (desenvolvimento) e types do Node
npm i -D typescript ts-node @types/node

# 4) Instalar biblioteca para leitura síncrona no terminal
npm i readline-sync
npm i -D @types/readline-sync

Gerar tsconfig.json
npx tsc --init

<img width="1918" height="1061" alt="image" src="https://github.com/user-attachments/assets/02722a30-4311-454f-8794-053916d73924" />

<b>Abra o tsconfig.json e garanta algo simples como:</b>

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}

<b>Estrutura de pastas</b>
media-aluno-ts/
  ├─ src/
  │   └─ index.ts   <-- cole aqui o código
  ├─ package.json
  └─ tsconfig.json


<b>Crie a pasta src e o arquivo src/index.ts, copiando o código fornecido.</b>

Scripts no package.json

No package.json, adicione estes scripts para facilitar:

{
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "run:dist": "node dist/index.js"
  }
}

<b>Como executar</b>

<b>Modo direto (sem build):</b>

npm run start

<b>Com build para JavaScript e execução do compilado:</b>

npm run build
npm run run:dist


Dica: Se aparecer erro de permissão no Windows ao rodar scripts, abra o Terminal/PowerShell como Administrador.

<b>3) O que este exercício pratica</b>

Leitura de entrada no Node com TypeScript usando readline-sync.
Declaração de variáveis com tipos (string, number, number[]).
Conversão de string para número (parseInt, parseFloat) e tratamento de vírgula decimal.
Laços (for) para coletar notas.
Estruturas condicionais: if, while (validação), switch-case (decisão do status).
Interpolação de string com template literals.
Formatação numérica com toFixed(2).
