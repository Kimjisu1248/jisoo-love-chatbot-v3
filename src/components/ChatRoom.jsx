import React, { useState } from "react";
import analyzeAnswers from "../utils/analyzeAnswers";

export default function ChatRoom() {
  const [messages, setMessages] = useState([{ role: "ai", text: "안녕 지수공주님, 오늘 기분 어때?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }, { role: "ai", text: analyzeAnswers(input) }];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div>
      <div style={{ height: 300, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
            <p><strong>{m.role === "user" ? "지수공주님" : "이상형"}:</strong> {m.text}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} />
      <button onClick={handleSend}>전송</button>
    </div>
  );
}
