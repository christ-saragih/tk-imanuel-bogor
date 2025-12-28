"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { sendMessageToGemini } from "@/services/geminiService";
import { ChatMessage, BotStatus } from "@/types";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Halo Ayah/Bunda! 👋 Saya Bunda AI. Ada yang bisa saya bantu tentang pendaftaran atau program sekolah?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<BotStatus>(BotStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || status === BotStatus.THINKING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setStatus(BotStatus.THINKING);

    try {
      // Prepare history for API
      const history = messages.map((m) => ({ role: m.role, text: m.text }));

      const responseText = await sendMessageToGemini(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: "Maaf, ada kendala teknis. Mohon hubungi WhatsApp kami.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setStatus(BotStatus.IDLE);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? "bg-gray-800 rotate-90" : "bg-kid-blue hover:bg-blue-600"
        }`}
      >
        {isOpen ? (
          <X color="white" size={28} />
        ) : (
          <MessageCircle color="white" size={28} />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
        style={{ height: "500px", maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-kid-blue to-cyan-500 p-4 flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-lg">
              Bunda AI
            </h3>
            <p className="text-blue-100 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online - Asisten Sekolah
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-kid-blue text-white rounded-tr-none"
                    : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {status === BotStatus.THINKING && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-kid-blue focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tanya biaya, jadwal, dll..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 outline-none text-gray-700"
              disabled={status === BotStatus.THINKING}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || status === BotStatus.THINKING}
              className={`p-2 rounded-full transition-colors ${
                !inputValue.trim() || status === BotStatus.THINKING
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-kid-blue text-white hover:bg-blue-600"
              }`}
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            AI dapat melakukan kesalahan. Silakan verifikasi info penting.
          </p>
        </div>
      </div>
    </>
  );
};
