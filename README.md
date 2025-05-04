# Blog Frontend

Este projeto é um frontend para um blog, desenvolvido com Vue 3 e Vite. Ele serve como exemplo para aprendizado e desenvolvimento de aplicações modernas usando tecnologias web.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Testes](#testes)
- [Testes Unitários](#testes-unitários)
- [Testes de Fim a Fim](#testes-de-fim-a-fim)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

Este projeto é um exemplo de frontend para um blog. Ele utiliza Vue 3 com `<script setup>` e Vite para o desenvolvimento rápido e eficiente de aplicações. É ideal para aprender boas práticas de desenvolvimento frontend e integrar com APIs de backend.

## Tecnologias Utilizadas

- [Vue 3]([https://vuejs.org/)](https://vuejs.org/) "https://vuejs.org/)")
- [Vite]([https://vitejs.dev/)](https://vitejs.dev/) "https://vitejs.dev/)")
- [ESLint]([https://eslint.org/)](https://eslint.org/) "https://eslint.org/)") para linting de código

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js]([https://nodejs.org/)](https://nodejs.org/) "https://nodejs.org/)") (versão 16 ou superior)
- [npm]([https://www.npmjs.com/)](https://www.npmjs.com/) "https://www.npmjs.com/)") ou [yarn]([https://yarnpkg.com/)](https://yarnpkg.com/) "https://yarnpkg.com/)")

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone este repositório:

```sh
git clone [https://github.com/mba-fiap/blog-front.git](https://github.com/mba-fiap/blog-front.git "https://github.com/mba-fiap/blog-front.git")
```

2. Navegue até o diretório do projeto:

```sh
cd blog-front
```

3. Instale as dependências:

```sh
npm install
```

## Como Usar

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

Para compilar o projeto para produção, use:

```sh
npm run build
```

Os arquivos gerados estarão disponíveis na pasta `dist`.

## Estrutura do projeto

├── public/ # Arquivos públicos  
├── src/  
│ ├── components/ # Componentes reutilizáveis  
│ ├── views/ # Páginas da aplicação  
│ ├── composables/ # Funções úteis  
│ ├── interfaces/ # Tipagens
│ ├── App.vue # Componente raiz  
│ └── main.ts # Ponto de entrada da aplicação  
│ └── router.ts # Configurações de rota  
├── index.html # HTML principal  
├── package.json # Dependências e scripts  
├── tailwind.config.js # Configuração do Tailwind CSS  
├── tsconfig.json # Configuração do TypeScript  
└── vite.config.js # Configuração do Vite

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie um branch para sua funcionalidade ou correção de bug:

```sh
git checkout -b minha-nova-feature
```

3. Faça seus commits com mensagens claras:

```sh
git commit -m "Adiciona nova funcionalidade X"
```

4. Envie suas alterações:

```sh
git push origin minha-nova-feature
```

5. Abra um Pull Request no repositório original.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
