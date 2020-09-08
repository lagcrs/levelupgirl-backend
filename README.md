# Level Up, Girl! Backend
<p align="center">
  <img src="https://github.com/lagcrs/levelupgirl-backend/blob/master/logo.png" width="550" title="Level Up, Girl!" alt="Logo Level Up, Girl! contendo o simbolo lâmpada com um coração">
</p>
<h1 align="center"> 
	Level Up, Girl! 
</h1>
<p align="center">Plataforma desenvolvida por mulheres para mulheres na tecnologia :woman:</p>

<p align="center"> 
  <img src="https://img.shields.io/github/languages/count/lagcrs/levelupgirl-backend" alt="Languages">
  <img src="https://img.shields.io/github/last-commit/lagcrs/levelupgirl-backend" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/lagcrs/levelupgirl-backend" alt="Repo size">
</p>

## 💻 Sobre o projeto
A LevelUp, Girl! é uma plataforma divertida voltada para mulheres na tecnologia que busca desenvolver as suas habilidades técnicas e emocionais para que você chegue voando em qualquer oportunidade que escolher! Além desse desenvolvimento, temos parcerias com empresas que oferecem vagas incríveis em processos seletivos diferentes.

Entendemos que às vezes pode existir medo, insegurança ou ansiedade nas candidaturas, o que gera uma alta taxa de desistência nos processos seletivos, mas estamos aqui para te apoiar! Essa plataforma foi desenvolvida com o intuito de crescermos como um grupo de mulheres motivadas a conquistarem o que quisermos e alcançar altos patamares em nossas carreiras.

- Nossa API encontra-se no [Heroku](https://levelupgirl-backend.herokuapp.com/) :purple_heart:
- Preview da nossa plataforma no [Vercel](https://levelupgirl.vercel.app/) :sparkles: <br/>
- Repositório [Frontend](https://github.com/dezzasalmeida/levelupgirl) :pushpin:

*Nosso Frontend foi feito pela dev [Andrezza Almeida](https://github.com/dezzasalmeida) :heart:.* 


## 🛠 Tecnologias utilizadas

Para o desenvolvimento das interfaces foi utilizado o ReactJs, uma biblioteca JavaScript focada na criação de interfaces reaproveitaveis para o usuário. Já para a aplicação das regras de negócios foi escolhido o NodeJS, uma plataforma JavaScript que processa códigos JS no servidor. Para o armazenamento foi escolhido o PostgreSQL como banco de dados, com o ORM Sequelize.

- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)

### :paperclip: Pré-requisitos
Precisa ter as seguintes tecnologias instaladas para rodar o projeto:
- Node.js
- NPM
- Git
- Editor de código

## :wrench: Rotas da API
> /usuarios <br/>
> /usuario/:id <br/>
> /usuario/cadastrar <br/>

> /empresas <br/>
> /empresa/:id <br/>
> /empresa/cadastrar <br/>

> /vagas <br/>
> /vaga/:id <br/>
> /vaga/cadastrar <br/>

> /entrevistas <br/>
> /entrevista/:id <br/>
> /entrevista/cadastrar <br/>

> /mentorias <br/>
> /mentoria/:id <br/>
> /mentoria/cadastrar <br/>

> /sessoes <br/>
> /sessao/:id <br/>
> /sessao/cadastrar <br/>

> /trilhas <br/>
> /trilha/:id <br/>
> /trilha/cadastrar <br/>

> /progressos <br/>
> /progresso/:id <br/>
> /progresso/cadastrar <br/>

> /duvidas <br/>
> /duvida/:id <br/>
> /duvida/cadastrar <br/>

> /respostas_duvidas <br/>
> /resposta_duvida/:id <br/>
> /resposta_duvida/cadastrar <br/>

> /forums <br/>
> /forum/:id <br/>
> /forum/cadastrar <br/>

> /respostas_forums <br/>
> /resposta_forum/:id <br/>
> /resposta_forum/cadastrar <br/>

> /mensagens <br/>
> /mensagem/:id <br/>
> /mensagem/cadastrar <br/>

> /respostas_mensagens <br/>
> /resposta_mensagem/:id <br/>
> /resposta_mensagem/cadastrar <br/>


## 🚀 Como executar o projeto

Neste repositório você encontrará o backend da plataforma. :ok_woman:
1. Back-end (este repositório)

###  🎲 Banco de Dados
Primeira modelagem do banco de dados PostgreSQL (foram feitas alterações ao decorrer da codificação)
![Banco de Dados](https://github.com/lagcrs/levelupgirl-backend/blob/master/bando_de_dados.png)

Ferramenta utilizada para modelagem: [dbdesigner](https://app.dbdesigner.net/)

### :bulb: Rodando o Backend (servidor)

Antes, você deve criar um banco de dados PostgreSQL 'levelupgirl' em seu computador. :thumbsup:

```bash
# Clone este repositório
$ git clone https://github.com/lagcrs/levelupgirl-backend.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd levelupgirl-backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333
```

## 📝 Licença

Este projeto esta sobe a licença Apache License Version 2.0
