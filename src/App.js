import React from 'react';
import './App.css';
// import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import UchiDeEnglish from './components/UchiDeEnglish'
import Weather from './components/Weather'



class App extends React.Component {
  constructor() {
    super();
    this.state = {}

  }



  render() {
    return (
      <div className="App">
        <Header />
        {/* <UchiDeEnglish /> */}
        <Weather />
        <Footer />
      </div>
    );
  }
}
export default App;
