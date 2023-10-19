'use client';
import useChatStore from '@/app/states/ChatStore';
import IonIcon from '@reacticons/ionicons';
import React, { useEffect } from 'react';

function MessageInput() {
  const { sendMessage, messages, loading } = useChatStore();
  const [message, setMessage] = React.useState('');

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    sendMessage({ id: messages.length + 1, sender: 'user', message: message });
  };

  return (
    <div className="w-full m-4">
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          disabled={loading}
          placeholder="Escribe tu mensaje"
          onChange={handleChange}
          className="flex flex-1 bg-sky-500 border-b-2 placeholder:text-neutral-500 border-b-neutral-100 text-black p-2"
        />
        <button className="btn ml-3 bg-neutral-100"><IonIcon name='send'/></button>
      </form>
    </div>
  );
}

export default MessageInput;
