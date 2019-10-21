import axios from 'axios';

// flashcard = emotion
//getFlashcards = getGifs

export const getFlashcards = async (apiKey, flashcard) => {
  console.log(flashcard)
  let response = await axios.get(`http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${flashcard}&f=48khz_16bit_stereo&r=-4&c=mp3`);
  const audioUrl = response.config.url;
  console.log(audioUrl);

}

export default getFlashcards



