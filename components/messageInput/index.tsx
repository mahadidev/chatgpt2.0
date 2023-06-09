"use client";
import React, { useState } from "react";
import { Icon } from "../../components";
import TextareaAutosize from "react-textarea-autosize";
import { ThreeDots } from "react-loader-spinner";

const MessageInput = ({
  onSendMessage,
  isLoading,
  setLoading,
}: {
  onSendMessage: CallableFunction;
  isLoading?: boolean;
  setLoading: CallableFunction;
}) => {
  // state
  const [inputText, setInputText] = useState<string>("");

  // on submit
  const onSend = () => {
    if (!isLoading && inputText) {
      setLoading(true);
      onSendMessage(inputText);
      setInputText("");
    }
  };

  // on press enter
  const onPressEnterKey = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-end w-full relative  bg-white dark:bg-gray-800 border border-black/10 dark:border-gray-900/50 dark:text-white rounded-xl shadow-xs dark:shadow-xs overflow-hidden">
      <TextareaAutosize
        className="w-full py-4 px-4 pr-14 border-0 outline-none resize-none bg-white dark:bg-gray-700"
        placeholder="Send a message"
        onChange={(e: any) => setInputText(e.target.value)}
        value={inputText}
        rows={1}
        maxRows={7}
        onKeyDown={onPressEnterKey}
      />
      <div className="w-max absolute bottom-0 top-0 right-0 m-auto flex items-end">
        <button
          className={`mb-2.5 mr-3 rounded-md p-2 text-xl ${
            inputText && !isLoading
              ? "bg-primary text-white"
              : "text-gray-400 transition-all"
          }`}
          disabled={!inputText}
          onClick={onSend}
        >
          {!isLoading ? (
            Icon.SVG.send
          ) : (
            <ThreeDots
              height="1em"
              width="1em"
              radius="9"
              color="#9ca3af"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
