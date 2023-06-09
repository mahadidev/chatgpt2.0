"use client";
import React, { useState } from "react";
import { VersionToggler } from "../../components";

interface ItemType {
  id: number;
  icon: any;
  title: string;
}

interface ChildItemType {
  text: string;
  type?: "message";
  ref: number;
}

const Intro = () => {
  // state
  const [items] = useState<ItemType[]>([
    {
      id: 1,
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ),
      title: "Examples",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          ></path>
        </svg>
      ),
      title: "Capabilities",
    },
    {
      id: 3,
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      title: "Limitations",
    },
  ]);
  const [childItem] = useState<ChildItemType[]>([
    {
      ref: 1,
      text: '"Explain quantum computing in simple terms" →',
      type: "message",
    },
    {
      ref: 1,
      text: '"Got any creative ideas for a 10 year old’s birthday?" →',
      type: "message",
    },
    {
      ref: 1,
      text: '"How do I make an HTTP request in Javascript?" →',
      type: "message",
    },
    {
      ref: 2,
      text: "Remembers what user said earlier in the conversation",
    },
    {
      ref: 2,
      text: "Allows user to provide follow-up corrections",
    },
    {
      ref: 2,
      text: "Trained to decline inappropriate requests",
    },
    {
      ref: 3,
      text: "May occasionally generate incorrect information",
    },
    {
      ref: 3,
      text: "May occasionally produce harmful instructions or biased content",
    },
    {
      ref: 3,
      text: "Limited knowledge of world and events after 2021",
    },
  ]);

  return (
    <div className="mt-6 sm:mt-[10vh]">
      <div className="w-max mx-auto">
        <VersionToggler />
      </div>
      <h1 className="mt-24 text-gray-800 dark:text-slate-300 text-4xl font-semibold text-center ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
        ChatGPT
      </h1>
      <div className="w-[93%] md:max-w-2xl lg:max-w-xl xl:max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 justify-between">
          {items?.map((item: ItemType, index: number) => (
            <div
              className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
              key={index}
            >
              <h2 className="text-gray-600 dark:text-slate-200 flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                {item.icon}
                {item.title}
              </h2>

              <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                {childItem?.map((childItem: ChildItemType) => {
                  return (
                    childItem.ref === item.id && (
                      <>
                        <button className="w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900 text-gray-600 dark:text-slate-300 text-sm p-3 rounded-md ">
                          {childItem.text}
                        </button>
                      </>
                    )
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
