import './App.css';

import {ChatProvider} from './context/ChatContext'

function App() {
  return (
      <ChatProvider>
        Hi
      </ChatProvider>
  );
}

export default App;
