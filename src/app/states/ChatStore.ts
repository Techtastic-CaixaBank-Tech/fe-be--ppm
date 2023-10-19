import { create } from 'zustand';
import { Message } from '../helpers/types';

interface ChatState {
  messages: Message[];
  loading: boolean;
  sendMessage: (message: Message) => void;
}

const useChatStore = create<ChatState>((set) => ({
  messages: [],
  loading: false,
  sendMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message], loading: true }));

    const streamBotMessage = async (input: string) => {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });

      if (!response.ok) {
        console.log("Error in response");
        return;
      }

      const responseBody = response.body;

      let botResponse = "";
      if (responseBody) {
        const reader = responseBody.getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const decoded = new TextDecoder("utf-8").decode(value);
          botResponse += decoded;
        }
      } else {
        console.log("Response body is null");
      }

      // Después de que se complete el streaming, agrega la burbuja de chat al estado una vez
      set((state) => ({
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, sender: 'bot', message: botResponse },
        ],
        loading: false,
      }));
    };

    streamBotMessage(message.message);
  },
}));

export default useChatStore;
