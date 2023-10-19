import React from 'react';
import Messages from './Messages';
import MessageInput from '../molecules/MessageInput';

function Chat() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen">
      <div className="flex flex-col flex-grow w-full max-w-xl overflow-hidden">
        <Messages />
      </div>
      <div className='flex flex-row w-full bg-sky-500'>
        <MessageInput />
      </div>
    </div>
  );
}

export default Chat;
