import axios from "axios";

// Should update based on ENV 
const BASE_URL = 'http://localhost:5000/api'

const parseInput = async (text :string)=> {

  const parsedData = (await axios.post(`${BASE_URL}/parse` , {text})).data;
  return parsedData.data;  

}

export default parseInput;