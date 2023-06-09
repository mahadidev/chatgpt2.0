export interface IconType {
  SVG: "send" | "generate" | "toggleLeft" | "toggleRight";
}

export interface MessageType {
  content: string;
  role: "assistant" | "user";
}
