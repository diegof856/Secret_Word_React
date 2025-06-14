
# 🕵️‍♂️ Secret Word - Jogo da Palavra Secreta

Este é um projeto simples de jogo em React onde o jogador deve adivinhar uma **palavra secreta** com base em uma **categoria** fornecida. O jogo segue a lógica do famoso **jogo da forca**, porém com uma abordagem mais moderna utilizando React.

## 📂 Estrutura do Projeto

```
secret-word/
├── public/
├── src/
│   ├── components/
│   │   ├── Game.jsx
│   │   ├── GameOver.jsx
│   │   ├── StartScreen.jsx
│   │   ├── Game.module.css
│   │   ├── GameOver.module.css
│   │   ├── StartScreen.module.css
│   ├── data/
│   │   └── words.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🧠 Funcionamento

A aplicação possui três **fases**:
1. **Start**: tela inicial com um botão para começar o jogo.
2. **Game**: tela onde o usuário tenta adivinhar a palavra letra por letra.
3. **End**: tela final que mostra a pontuação e oferece a opção de jogar novamente.

### Lógica Principal (`App.jsx`)

- Usa o hook `useState` para gerenciar o estado do jogo.
- Usa `useCallback` e `useEffect` para definir o comportamento durante as transições de fase.
- A função `startGame` escolhe uma categoria e palavra aleatória do arquivo `words.js`.
- A função `verifyLetter` verifica se a letra escolhida está correta ou não.
- O jogador tem **5 tentativas** por rodada.
- A cada acerto de palavra completa, ganha **100 pontos**.

### Componentes

- `StartScreen`: tela de boas-vindas com botão para iniciar.
- `Game`: tela principal onde o usuário interage com o jogo.
- `GameOver`: tela exibida quando as tentativas acabam.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/diegof856/Secret_Word_React.git
cd secret-word
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

> ⚠️ Este projeto utiliza **Vite** como bundler para maior velocidade no desenvolvimento.

## 📚 Tecnologias Utilizadas

- React
- Vite
- CSS Modules

## ✨ Melhorias Futuras

- Adicionar temas e efeitos sonoros.
- Incluir palavras mais complexas e categorias adicionais.
- Salvar recordes com `localStorage`.
