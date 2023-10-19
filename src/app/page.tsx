import Image from 'next/image';
import Sidebar from './view/organisms/Sidebar';
import Form from './view/organisms/Form';
import Chat from './view/organisms/Chat';

export default function Home() {
  return (
    <main className="flex flex-row bg-neutral-100">
      <div className="p-3 flex flex-1 bg-sky-500 shadow-2xl">
        <Sidebar />
      </div>
      <div className='grid grid-cols-12'>
        <div className="col-span-8 p-5">
          <Form />
        </div>
        <div className="col-span-4 border-sky-600 border-l-4 flex flex-1">
          <Chat />
        </div>
      </div>
    </main>
  );
}
