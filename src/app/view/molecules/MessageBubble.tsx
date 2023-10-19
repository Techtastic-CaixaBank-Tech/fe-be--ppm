/* eslint-disable @next/next/no-img-element */
import { Message } from '@/app/helpers/types';

interface MessageBubbleProps {
  message: Message;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.sender != 'user';
  return (
    <div className={`chat chat-start ${isBot && 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200" />
        </div>
      </div>
      <div className="chat-header">
        <time className=" text-sm text-neutral-800">12:45</time>
      </div>
      {isBot ? (
        <div className="chat-bubble bg-sky-500 text-white">
          {message.message}
        </div>
      ) : (
        <div
          className="chat-bubble font-semibold bg-neutral-200 text-black"
        >
          {message.message}
        </div>
      )}
    </div>
  );
}

export default MessageBubble;
