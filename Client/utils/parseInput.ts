import axios from "axios";

// Should update based on ENV 
// const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'http://next-gen-form-ku69.vercel.app/api'
const BASE_URL =  'http://localhost:5000/api' ;
const parseInput = async (text :string)=> {

  try {
    const parsedData = (await axios.post(`${BASE_URL}/parse` , {text})).data;
    return parsedData.data;  
  } catch (error) {
    return null;
  }

}

export default parseInput;