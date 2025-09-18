import React, { useState } from "react";

const RamBot = () => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    // Replace with your backend endpoint
    const res = await fetch("/rambot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });
    const data = await res.json();
    setMessages(msgs => [...msgs, { role: "rambot", content: data.answer }]);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #aaa", width: 350, zIndex: 1000 }}>
      <div style={{ padding: 16, fontWeight: "bold" }}>RamBot</div>
      <div style={{ maxHeight: 300, overflowY: "auto", padding: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 8, textAlign: msg.role === "user" ? "right" : "left" }}>
            <span style={{ background: msg.role === "user" ? "#e0f7fa" : "#f1f8e9", padding: 8, borderRadius: 4 }}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", padding: 16 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, marginRight: 8, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          placeholder="Ask RamBot about Shivaram..."
        />
        <button onClick={sendMessage} style={{ padding: "8px 16px", borderRadius: 4, background: "#1976d2", color: "#fff", border: "none" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default RamBot;
