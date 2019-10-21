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
      apiKey: "da50fcc8d81f46e7aa35e7354864e6b1",
      flashcard: "",
    }
  }

  componentDidMount = async () => {
    const flashcard = await getFlashcards(this.state.apiKey, this.state.flashcard)
    this.setState({
      flashcard
    })
  }


  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    const flashcard = getFlashcards(this.state.apiKey, this.state.flashcard)
  }




  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Emotions
            handleClick={this.handleClick} />
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
