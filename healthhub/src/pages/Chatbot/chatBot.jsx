import React from 'react';
import chatbot from '../../assets/chatbot.png'

const ChatBot = () => {
    return (
        <div className='px-4 flex flex-col items-center pb-28 relative'>
            <div className="w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl">
            <div className='flex items-center gap-3'>
          <img src={chatbot} alt='' className='w-16' />
          <div className=''>
            <h1 className='font-bold text-2xl'>HealthHub Chatbot</h1>
            <p> AI powered assistant</p>
          </div>
        </div>  
        <div className="w-52 bg-white h-7 absolute bottom-32   left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <iframe
src="https://www.chatbase.co/chatbot-iframe/LYCqhynswbbvq11OPLUrs"
width="100%"
height={window.innerHeight - 200}
frameborder="0"
>
   
</iframe>

            </div>
        </div>
    );
}

export default ChatBot;
