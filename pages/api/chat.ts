import { MessageType } from "../../type";
import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json();

  const messages: MessageType[] = [];
  messages.push(...body?.messages);

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    stream: true,
  };

  const stream = null;
  return new Response(stream);
};
export default handler;
