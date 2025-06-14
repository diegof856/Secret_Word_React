//Css
import './App.css'
//React
import { useCallback, useEffect, useState } from 'react'
//Data
import { WorldList } from './data/words'
//Components
import StarScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(WorldList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //escolher uma categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];


    //escolhra uma palvara aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category }
  },[words]);
  //começar o jogo secret word 
  const startGame = useCallback(() => {
    //limpar todas as letras
    clearLetterStates();
    //pickWord e pick category
    const { word, category } = pickWordAndCategory();
    console.log(word);
    // criar vetor de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());
   
    // preencher estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])
  // processar entrada da carta
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();
    //checar se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    //pressione a letra adivinhada ou remova uma chance
    if(letters.includes(normalizedLetter)){
     setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters,letter
      ]);
    }else{
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters,normalizedLetter
      ]);
      setGuesses((actualGuesses) => actualGuesses -1);
    }
    
  }
   // reiniciar o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }
  const clearLetterStates = () =>{
     setGuessedLetters([]);
      setWrongLetters([]);
    }
    //checar derrota
   useEffect(() =>{
    if(guesses === 0){
      // resetar todos os estados
      clearLetterStates();
      setGameStage(stages[2].name)
    }
   },[guesses])
   // checar condição de vitoria
   useEffect(() =>{
    if (gameStage !== "game") return;
    const uniqueLettres = [... new Set(letters)]
    // condição de vitoria
    if(guessedLetters.length === uniqueLettres.length){
      // add pontuação
      setScore((actualScore) => actualScore += 100);
      //reiniciar o jogo
      startGame();
    }
  
   },[guessedLetters, letters, startGame])
 
  return (

    <div className="App">
      {gameStage === "start" && <StarScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}

    </div>


  )
}

export default App
