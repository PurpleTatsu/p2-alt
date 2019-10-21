import axios from 'axios';
const apiKey = "da50fcc8d81f46e7aa35e7354864e6b1"

export const getFlashcards = async (id) => {
  let response = await axios.get(`http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${id}&f=48khz_16bit_stereo&r=-4&c=mp3`);
  const audioUrl = response.config.url;
  return audioUrl
}

export default getFlashcards



