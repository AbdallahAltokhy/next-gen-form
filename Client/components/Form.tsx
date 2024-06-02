'use client';

import { useState } from 'react';
// import { parseInput } from '../utils/parseInput';

const Form = () => {
  const [input, setInput] = useState('');
  const [parsedData, setParsedData] = useState(null);

  const handleInputChange = async (e  :any) => {
    console.log(e);
    
    setInput(e.target.value);
    // const data = await parseInput(e.target.value);
    // setParsedData(data);
        setParsedData(e.target.value);
  };

  return (
   
      <div className="w-1/2	 mx-auto mt-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
         <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
         </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>

       </div>
   </div>

  );
};

export default Form;
