'use client';

import React, { useState } from "react";
import parseInput from "@/utils/parseInput";
import MainInput from "./MainInput";
import { Form } from "./Form";


export default function HomeComponent() {

    const placeholders = [
      "Wanna cancel your gym membership?",
      "Need to contact customer service?",
      "Want to sign up for a new service?",
      "Just type and we'll do the rest."
    ];

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setData(null);  
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
  
      return (
        <div className=" flex flex-col justify-center  items-center px-4 mt-56" >
          <h2 className="  text-xl text-center sm:text-5xl dark:text-white text-white">
            Who needs forms? 
          </h2>
          <h2 className="mb-1 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-white">
            Just type and we&apos;ll do the rest.
          </h2>

          <MainInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />

          {loading && <p className="mt-4">Loading...</p>}

          {error && <p className="mt-4">Error: {error}</p>}

          {data && <Form data={data} />}

        </div>
      );
}