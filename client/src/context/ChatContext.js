import {createContext, useState} from 'react';
const ChatContext = createContext()

export const ChatProvider = ({children}) => {
  const [messages, setMessages] = useState([])

  const values = {
    messages,
    setMessages,
  }
  
  return <ChatContext.Provider values={values}>
    {children}
  </ChatContext.Provider>
}

export default ChatContext