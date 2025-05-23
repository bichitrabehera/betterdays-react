import React, { useState, useEffect, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm here to listen. How are you feeling today?",
      type: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, type: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      const botReply = {
        text: data.reply || "Sorry, I didn't quite get that.",
        type: "bot",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong. Please try again.", type: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">
  {/* Messages Container - This will scroll */}
  <div className="flex-1 overflow-y-auto p-4">
    <div className="max-w-5xl mx-auto space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`text-[15px] flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-3 py-1 rounded-xl max-w-[85%] whitespace-pre-wrap shadow-sm ${
              msg.type === "user"
                ? "bg-[#006995] text-white rounded-br-none"
                : "bg-gray-200 text-gray-800 rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-start">
          <div className="px-4 py-3 rounded-xl bg-gray-200 text-gray-600 max-w-[60%]">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  </div>

  {/* Input Area - Fixed at Bottom */}
  <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-5">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className={`p-3 rounded-full transition ${
            !input.trim() || loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#006994] text-white hover:bg-blue-700"
          }`}
        >
          <RiSendPlaneFill className="text-lg" />
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Chatbot;
