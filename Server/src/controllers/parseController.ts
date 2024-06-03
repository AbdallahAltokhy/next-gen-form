import  { Request, Response } from 'express';
import processInput from '../helpers/openaiHelper';

const parseUserInput = async (req: Request, res: Response) => { 
  try {
    const { text  }  = req.body ;    
    const parsedData = await processInput(text);
    res.status(200).json(parsedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to process input' }); 
  }
};


export default parseUserInput;