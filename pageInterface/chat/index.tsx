"use client";
import {
  Message,
  MessageInput,
  SidebarToggler,
  ThemeToggler,
  Intro,
} from "../../components";
import { useStateContext } from "../../context";
import { MessageType } from "../../type";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ScrollableFeed from "react-scrollable-feed";

const ChatPage = () => {
  // context
  const { gptVersion } = useStateContext();
  // state
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<MessageType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [chatBottomHeight, setChatBottomHeight] = useState<number>(0);

  // on finish
  const feedRef = useRef<any>();
  const feedScrollToBottom = () => {
    if (feedRef.current) {
      feedRef.current.scrollIntoView(0, feedRef.current.clientHeight + 2000);
    }
  };

  // once typing finished
  const onWritingFinish = () => {
    if (newMessage) {
      addMessagesItem(newMessage);
    }
    setNewMessage(null);
    setLoading(false);
  };

  // add messages items
  const addMessagesItem = (item: MessageType) => {
    setMessages((existedItems: MessageType[]) => [...existedItems, item]);
  };

  // on send message
  const onSendMessage = (content: string) => {
    setLoading(true);

    const newUserMessage: MessageType = {
      content: content,
      role: "user",
    };
    // insert new message
    addMessagesItem(newUserMessage);
    // get api response
    getApiResponse([...messages, newUserMessage]);
  };

  // get api response
  const getApiResponse = async (messages: MessageType[]) => {
    const newAiMessage: MessageType = {
      content: "",
      role: "assistant",
    };

    // add new message
    setNewMessage(newAiMessage);

    const response = await fetch("api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      // add new message
      setNewMessage({
        ...newAiMessage,
        content: lastMessage,
      });
    }

    if (done) {
      setNewMessage(null);
      setMessages((prevMessages: MessageType[]) => [
        ...prevMessages,
        {
          ...newAiMessage,
          content: lastMessage,
        },
      ]);

      setLoading(false);
    }
  };

  const chatBottomRef = useRef<any>();

  useEffect(() => {
    if (chatBottomRef.current) {
      setChatBottomHeight(chatBottomRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen max-h-screen bg-white dark:bg-gray-800 relative">
        <div className="w-max z-20 fixed right-3 md:left-3 top-3">
          <ThemeToggler />
        </div>
        <div
          style={{
            maxHeight: `calc(100vh - ${chatBottomHeight}px)`,
          }}
        >
          <ScrollableFeed>
            <div ref={feedRef}>
              {messages.length === 0 && <Intro />}

              {messages?.map((item: any, index: number) => (
                <Message
                  item={item}
                  onIncreaseLine={feedScrollToBottom}
                  key={index}
                  isLoading={isLoading}
                />
              ))}

              {newMessage && (
                <Message
                  item={newMessage}
                  onIncreaseLine={feedScrollToBottom}
                  onWritingFinish={onWritingFinish}
                  isLoading={isLoading}
                />
              )}
            </div>
          </ScrollableFeed>
        </div>

        <div
          className="absolute bottom-0 pt-3 md:pt-8 pb-4 left-0 right-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"
          ref={chatBottomRef}
        >
          <div className="w-[93%] md:max-w-2xl lg:max-w-xl xl:max-w-3xl mx-auto py-2">
            <div className="flex flex-col gap-2">
              <MessageInput
                isLoading={isLoading}
                setLoading={setLoading}
                onSendMessage={onSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
