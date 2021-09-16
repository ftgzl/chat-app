import styles from './styles.module.css'

import ScrollableFeed from 'react-scrollable-feed'

import ChatItem from './ChatItem'
import {useChat} from '../context/ChatContext'

function ChatList() {
  const {messages} = useChat()
  console.log(messages);
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
      {
        messages.map((item, key) => (
          <ChatItem item={item} key={key} />
        ))
      }
      </ScrollableFeed>
    </div>
  )
}

export default ChatList
