import { Layout, Sidebar } from "../components";
import { ChatPage } from "../pageInterface";
import React from "react";

const Page = () => {
  return (
    <main className="w-full">
      <Layout>
        <Sidebar />
        <ChatPage />
      </Layout>
    </main>
  );
};

export default Page;
