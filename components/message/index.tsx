"use client";
import { MessageType } from "../../type";
import Image from "next/image";
import React, { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { Typer } from "../../components";

const Message = ({
  item,
  type = "simple",
  onWritingFinish,
  onIncreaseLine,
  isLoading,
}: {
  item: MessageType;
  onWritingFinish?: CallableFunction;
  onIncreaseLine?: CallableFunction;
  isLoading: boolean;
  type?: "simple" | "typing";
}) => {
  useEffect(() => {}, []);

  return (
    <>
      <div
        className={`w-full ${
          item.role !== "user" ? "bg-conversation-bg dark:bg-gray-700" : ""
        } text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50`}
      >
        <div className="w-[93%] md:max-w-2xl lg:max-w-xl xl:max-w-3xl mx-auto py-6  overflow-x-hidden">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-full min-w-[30px] max-w-[30px] h-[30px]">
              <Image
                className="w-full h-full object-cover"
                width={40}
                height={40}
                src={`${
                  item.role === "user" ? "/user_icon.png" : "/ai_icon.jpg"
                }`}
                alt="User Icon"
              />
            </div>

            <div>
              {item.content ? (
                <p className="text-base whitespace-break-spaces">
                  {item.content}
                </p>
              ) : (
                <>
                  <FallingLines color="#4fa94d" width="2em" visible={true} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
