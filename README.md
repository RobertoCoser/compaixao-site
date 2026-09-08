# Projeto Compaixão

Site institucional do **Projeto Compaixão**, desenvolvido como uma fonte alternativa de informações sobre o projeto, suas ações, notícias, atividades e formas de participação.

A aplicação está sendo desenvolvida utilizando React e Vite, com foco em uma interface moderna, responsiva e acessível.

## Tecnologias

O projeto utiliza atualmente:

* React
* Vite
* React Router
* Tailwind CSS
* Lucide React
* ESLint

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Git

Recomenda-se utilizar uma versão recente do Node.js compatível com as dependências do projeto.

Para verificar as versões instaladas:

```bash
node --version
npm --version
git --version
```

## Clonando o projeto

Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta:

```bash
cd compaixao-site
```

## Instalando as dependências

As dependências do projeto estão definidas no `package.json` e suas versões estão registradas no `package-lock.json`.

Para instalá-las, execute:

```bash
npm install
```

Não é necessário instalar React, Vite, React Router, Tailwind ou outras dependências individualmente.

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Build de produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados no diretório:

```text
dist/
```

Para testar localmente o build de produção:

```bash
npm run preview
```

## Verificação de código

Para executar o ESLint:

```bash
npm run lint
```

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── ActionCard.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ImpactCounter.jsx
│   ├── Layout.jsx
│   ├── Lightbox.jsx
│   ├── MobileMenu.jsx
│   ├── NewsCard.jsx
│   ├── ScrollReveal.jsx
│   ├── SectionTitle.jsx
│   └── TimelineItem.jsx
├── data/
│   ├── acoes.js
│   ├── galeria.js
│   ├── impacto.js
│   └── noticias.js
├── hooks/
│   └── useScrollReveal.js
├── pages/
│   ├── admin/
│   │   ├── AdminLayout.jsx
│   │   ├── AdminNoticias.jsx
│   │   ├── Dashboard.jsx
│   │   └── Login.jsx
│   ├── Acoes.jsx
│   ├── ComoParticipar.jsx
│   ├── Contato.jsx
│   ├── Galeria.jsx
│   ├── Home.jsx
│   ├── NoticiaDetalhe.jsx
│   ├── Noticias.jsx
│   └── Sobre.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Scripts disponíveis

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera o build de produção               |
| `npm run preview` | Executa localmente o build de produção |
| `npm run lint`    | Executa a análise do ESLint            |

## Dependências principais

### React Router

Utilizado para gerenciamento das rotas e navegação entre as páginas da aplicação.

### Lucide React

Biblioteca de ícones utilizada na interface.

### Tailwind CSS

Framework CSS utilizado para estilização da aplicação.

## Desenvolvimento

O projeto está atualmente em desenvolvimento. A estrutura inicial foi criada com Vite e React e será expandida conforme as funcionalidades do site forem implementadas.
