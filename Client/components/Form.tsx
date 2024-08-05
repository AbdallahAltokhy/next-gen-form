"use client";
import React from "react";
import { Label } from "./FormLabel";
import { Input } from "./FormInput";
import { cn } from "@/utils/cn";


type FormProps = {
  data: Array<object> | null;
};


export function Form(data : FormProps) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-xl w-full mx-auto mt-4 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black bg-black">

    {
      !data?.data?.length  ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold  mt-8 text-white text-black">
            No data found
          </h2>
          <p className="text-neutral-500 text-neutral-400 mt-2">
            Try entering a different input.
          </p>
        </div>
      ) : (

        <>
        
        <h2 className="text-2xl font-bold  mt-8 text-white text-white">
        Form Fields
      </h2>

      <p className="text-neutral-500 text-neutral-400 mt-2">
        Seems right? Just hit submit or update fields as needed.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          
          {
            data?.data?.slice(0, 2).map((item : any, index : number) => {
              return (
                <LabelInputContainer key={index} className="mb-4 text-white">
                  <Label htmlFor={item.label}>{item.label}</Label>
                  <Input id={item.label} placeholder={item.value} type="text" defaultValue={item.value}/>
                </LabelInputContainer>
              );
            })
          }
        </div>
          
          {
            data?.data?.slice(2).map((item : any, index : number) => {
              return (
                <LabelInputContainer key={index} className="mb-4">
                  <Label htmlFor={item.label}>{item.label}</Label>
                  <Input id={item.label} placeholder={item.value} type="text" defaultValue={item.value}/>
                </LabelInputContainer>
              );
            })
          }
        
        <button
          className="bg-gradient-to-br relative group/btn from-black from-zinc-900 to-zinc-900 to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>
</>
)
  
        
      }
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
