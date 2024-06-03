import  { Request, Response } from 'express';
import processInput from '../helpers/openaiHelper';

const parseUserInput = async (req: Request, res: Response) => { // TODO: Add types for req and res objects
  try {
    const { text } : any = req.body;    
    const parsedData = await processInput(text);
    res.status(200).json(parsedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to process input' }); 
  }
};


export default parseUserInput;