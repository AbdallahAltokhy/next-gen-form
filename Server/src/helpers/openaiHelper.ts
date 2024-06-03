
import OpenAI from 'openai' ;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY  as string,
});


const functionArr = {
  name: `extractInformation`,
  description: `Extracts structured information from unstructured text input. and output a JSON schema with form Label/value pairs.`,
  parameters: {
    type: `object`,
    properties: {
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: { type: 'string', description: 'The form label' },
            value: { type: 'string', description: 'The form field value' },
          },
          required: ['label', 'value'],
        },
      },
    },
    required: ['data'],
  },
};

const processInput = async (text : string) => {

  console.log("text", text);
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [

      // You are an AI assistant. Your task is to parse user text input and extract relevant information to generate a structured JSON schema.
      {
        role: "system",
        content:`
        You are tasked with parsing a text Provided by users and contains pieces of information. Your goal is to extract pairs of labels and values from the text and format them in a structured JSON output. This JSON output will be used to create dynamic form fields.

        ### Instructions:
        
        1. **Identify Key Information:**
           - Scan the input text to identify key pieces of information such as names, ages, locations, dates, emails, phone numbers, job titles, etc.
           - Common categories include:
             - **Name:** Look for common patterns like "I am [Name]" or "[Name]".
             - **Age:** Look for patterns like "I am [Age] years old" or "age [Age]".
             - **Location:** Look for patterns indicating locations, such as "from [Location]" or "in [Location]".
             - **Dates:** Look for dates in various formats like "MM/DD/YYYY" or "DD-MM-YYYY".
             - **Emails and Phone Numbers:** Identify typical email and phone number formats.
             - **Job Titles:** Identify phrases like "I work as [Job Title]" or "My job is [Job Title]".
        
        2. **Label-Value Pair Extraction:**
           - Assign meaningful labels to each identified piece of information.
             - Labels should be intuitive and contextually appropriate (e.g., "name" for a person's name, "age" for age, "location" for places, etc.).
           - Extract the corresponding values associated with each label.
        
        3. **Format Output:**
           - Structure the extracted information into JSON format as pairs of labels and values.
           - Ensure each pair follows this structure:
             json : 
             {
               "Label": "appropriate_label",
               "value": "extracted_value"
             }
             
           - Combine all pairs into a single JSON array.
        
        4. **Handling Variations:**
           - Adapt to different ways users might input information.
           - Be flexible in recognizing synonymous phrases and different input formats.
           - Handle missing information gracefully, only returning pairs for information that can be accurately extracted.
        
        ### Output:
        The output should be a JSON array of label-value pairs, where each pair corresponds to a piece of information extracted from the input text. Each pair should be formatted as follows:
        json:
        [
          {
            "Label": "appropriate_label",
            "value": "extracted_value"
          },
          ...
        ]
        
        
        ### Example Structure (without specific examples):
        json : 
        [
          {
            "Label": "name",
            "value": "extracted_name"
          },
          {
            "Label": "age",
            "value": "extracted_age"
          },
          {
            "Label": "location",
            "value": "extracted_location"
          },
          ...
        ]
        
        ### Notes:
        - Ensure the labels are correctly matched with their corresponding values.
        - Handle different contexts and variations in user input with robustness.
        - The output should always be a well-structured JSON array, regardless of the complexity of the input text.
        
        This detailed instruction set aims to ensure the AI assistant can consistently parse and extract label-value pairs from varied user inputs to dynamically create form fields.
        `
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text : `Please extract the information from the following text: "${text}`
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

    tool_choice: { "type": "function", "function": { "name": "extractInformation" }},

  });

  console.log("response" ,response.choices[0].message);
  

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