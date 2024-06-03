'use client';

import React, { useState } from "react";
import parseInput from "@/utils/parseInput";
import MainInput from "./MainInput";


export default function HomeComponent() {

    const placeholders = [
      "Enter some text...",
      "Enter some more text...",
      "Enter even more text...",
    ];

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      setInputValue(e.target.value);
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      const res = await parseInput(inputValue);
      if (res) {
        setData(res);
      } else {
        setError("Failed to parse input");
      }
      setLoading(false);
      };
  
      console.log(data);

      return (
        <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
          <h2 className="  text-xl text-center sm:text-5xl dark:text-white text-black">
            Who needs forms? 
          </h2>
          <h2 className="mb-1 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
            Just type and we&apos;ll do the rest.
          </h2>
          <MainInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      );



}