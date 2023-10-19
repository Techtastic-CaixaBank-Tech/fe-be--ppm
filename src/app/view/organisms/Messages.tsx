'use client';
import useChatStore from '@/app/states/ChatStore';
import React from 'react';
import MessageBubble from '../molecules/MessageBubble';

function Messages() {
  const { messages, loading } = useChatStore();

  return (
    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
      {messages.map((message) => (
        <MessageBubble message={message} key={message.id} />
      ))}
      {loading && (
        <div className="flex justify-end gap-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-neutral-600"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-neutral-600"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-neutral-600"></div>
        </div>
      )}
    </div>
  );
}

export default Messages;
