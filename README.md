# 💳 Interactive Card Form

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Robot Framework](https://img.shields.io/badge/Robot_Framework-automated_tests-brightgreen?logo=robotframework&logoColor=white&style=flat-square)](https://robotframework.org/)
[![CI](https://github.com/jessica-os/Interactive-Card/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/jessica-os/Interactive-Card/actions)

> Este desafio foi proposto pela [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).  
> Confira a proposta original clicando [aqui](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

---

## 📝 Sobre o Projeto

Trata-se de um formulário com preenchimento dinâmico de dados em um cartão de crédito fictício.  
À medida que o usuário insere os dados nos campos do formulário, eles são exibidos visualmente no cartão ao lado, em tempo real.

---

## ✅ Validações do Formulário

O formulário aplica validações importantes para garantir o preenchimento correto:

- ❌ Não permite envio de **campos em branco**
- 🔢 Validação de **número mínimo/máximo de caracteres**
- 🧮 Campos que aceitam **somente números**
- 📅 Validação de **mês entre 01 e 12**

---

## 🧠 Habilidades Desenvolvidas

- Uso de **tags semânticas** para estruturação do HTML
- Aplicação de **Flexbox** para responsividade
- Manipulação do DOM com **JavaScript**
- Implementação de **validações com Regex**
- Responsividade com **Media Queries**
- Boas práticas com código limpo e modular

---

## 💻 Tecnologias Utilizadas

<div style="display: flex; gap: 10px;">
  <img alt="HTML5" height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img alt="CSS3" height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img alt="JavaScript" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
</div>

---

## 🤖 Testes Automatizados com Robot Framework

Este projeto conta com uma suíte de **testes automatizados end-to-end** utilizando o [Robot Framework](https://robotframework.org/), com a biblioteca [Browser](https://robotframework-browser.org/) (baseada em Playwright) e a `FakerLibrary` para geração de dados dinâmicos.

### 🔍 O que está sendo testado?

- ✅ Envio com dados válidos
- ❌ Envio com campos em branco
- ✍️ Validação do campo Nome (apenas letras e espaços)
- 💳 Validação do Número do Cartão (exatamente 16 dígitos)
- 📅 Validação da Data (mês entre 01-12 e ano futuro)
- 🔒 Validação do CVC (3 dígitos numéricos)

### 🚀 Como rodar os testes localmente?

```bash
# Instale as dependências
pip install robotframework robotframework-browser FakerLibrary
rfbrowser init

# Suba o servidor local
npx http-server ./ -p 5501

# Execute os testes
robot -d results tests
```
📸 Veja como ficou!<br>
---
💻 Desktop<br>
<img src="./src/imagens-readme/Interactive-card-desktop.gif" alt="Vídeo versão desktop">
---
📱 Tablet<br>
<img src="./src/imagens-readme/Interactive-card-tablet.gif" alt="Vídeo versão tablet">
---
📲 Mobile<br>
<img src="./src/imagens-readme/Interactive-card-mobile.gif" alt="Vídeo versão mobile">
---

🔗 Acesse o projeto<br>
👉 [Clique aqui para visualizar o projeto ao vivo!](https://jessica-os.github.io/Interactive-Card/)




