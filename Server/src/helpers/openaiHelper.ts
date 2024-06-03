
import OpenAI from 'openai' ;
console.log("process.env.OPENAI_API_KEY", process.env.OPENAI_API_KEY);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY  as string,
});


const functionArr = {
  name: `extractInformation`,
  description: `Extracts structured information from unstructured text input.`,
  parameters: {
    type: `object`,
    properties: {
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: { type: 'string', description: 'The label for the information.' },
            input: { type: 'string', description: 'The extracted information.' },
          },
          required: ['label', 'input'],
        },
      },
    },
    required: ['data'],
  },
};

const processInput = async (text : string) => {

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [

      {
        role: "system",
        content: "You are an AI assistant. Your task is to parse user text input and extract relevant information to generate a structured JSON schema."
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text
          },
          
        ]
      }
    ],
    tools: [
      {
        type: "function",
        function: functionArr
      }
    ],

    tool_choice: { "type": "function", "function": { "name": "extractInformation" } },

  });

  const res :any = response?.choices[0].message.tool_calls ? response.choices[0].message.tool_calls[0].function.arguments : null;
  console.log(res);

  try {
    // Parse and return the JSON object
    return JSON.parse(res) ?? null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export default processInput;