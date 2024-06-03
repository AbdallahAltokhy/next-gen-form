import axios from "axios";

// Should update based on ENV 
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'http://next-gen-form-ku69.vercel.app/api'

const parseInput = async (text :string)=> {

  const parsedData = (await axios.post(`${BASE_URL}/parse` , {text})).data;
  return parsedData.data;  

}

export default parseInput;