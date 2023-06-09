"use client";
import { useStateContext } from "../../context";
import React, { useState } from "react";

interface GPTOptionType {
  label: string;
  icon: any;
  value: 3.5 | 4;
}

const VersionToggler = () => {
  // context
  const { gptVersion, setGptVersion } = useStateContext();

  // state
  const [GPTOptions, setGPTOptions] = useState<GPTOptionType[]>([
    {
      label: "GPT-3.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4 transition-colors text-primary"
          width="16"
          height="16"
          stroke-width="2"
        >
          <path
            d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      value: 3.5,
    },
    {
      label: "GPT-4",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4 transition-colors group-hover/button:text-purple-600"
          width="16"
          height="16"
          stroke-width="2"
        >
          <path
            d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      value: 4,
    },
  ]);

  return (
    <div className="relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900">
      <ul className="flex w-full list-none gap-1 sm:w-auto">
        {GPTOptions?.map((item: GPTOptionType, index: number) => (
          <li className="group/toggle w-full" key={index}>
            <button
              type="button"
              id="radix-:rh:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="w-full"
              onClick={() => {
                setGptVersion(3.5);
              }}
            >
              <div
                className={`group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent ${
                  gptVersion === item.value
                    ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
                    : "text-gray-500 hover:text-gray-800 hover:dark:text-gray-100"
                } ">
                `}
              >
                <span className="relative max-[370px]:hidden">{item.icon}</span>
                <span className="truncate text-sm font-medium md:pr-1.5">
                  {item.label}
                </span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 md:hidden"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersionToggler;
