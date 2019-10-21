import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import UchiDeEnglish from './components/UchiDeEnglish'
import Weather from './components/Weather'
import Emotions from './components/Emotions'
import { getFlashcards } from './components/api-helper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "emotions",
      flashcards: [
        {
          name: "hungry",
          soundEffect: "",
          image: ""
        },
        {
          name: "sleepy",
          soundEffect: "",
          image: ""
        },
        {
          name: "angry",
          soundEffect: "",
          image: ""
        },
        {
          name: "excited",
          soundEffect: "",
          image: ""
        },
        {
          name: "surprised",
          soundEffect: "",
          image: ""
        },
        {
          name: "sad",
          soundEffect: "",
          image: ""
        },
        {
          name: "tired",
          soundEffect: "",
          image: ""
        },
        {
          name: "happy",
          soundEffect: "",
          image: ""
        }
      ]
    }
  }

  //flashcard is a placeholder for flashcards[] objects
  //componentDidMount are always written this way, the others are ok
  componentDidMount() {
    this.state.flashcards.forEach(async (flashcard, index) => {
      let soundEffect = await getFlashcards(flashcard.name)
      this.setState(prevState => ({
        flashcards: prevState.flashcards.map((card, cardIndex) => (cardIndex === index ? {
          ...card,
          soundEffect: soundEffect
        } : card))
      }))
    })
  }

  playSound = (flashcard) => {
    var audio = new Audio(flashcard)
    audio.type = 'audio/mp3';
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(function () {
        console.log('Playing....');
      }).catch(function (error) {
        console.log('Failed to play....' + error);
      });
    }
  }

  handleClick = (event) => {
    const soundEffect = event.target.name
    console.log(soundEffect)
    // const flashcard = await getFlashcards(flashcardId)

    this.playSound(soundEffect)
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <main>
          <Emotions
            handleClick={this.handleClick}
            flashcards={this.state.flashcards}
          />
          {/* <Route path="/:flashcard" render={(props) => <Emotions flashcard={props.match.params.flashcard} />} /> */}


          {/* <UchiDeEnglish /> */}
          {/* <Weather /> */}
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
