import styles from './styles.module.css'

import ChatItem from './ChatItem'
import {useChat} from '../context/ChatContext'

function ChatList() {
  const {messages} = useChat()
  console.log(messages);
  return (
    <div className={styles.chatlist}>
      <div>
      {
        messages.map((item, key) => (
          <ChatItem item={item} key={key} />
        ))
      }
      </div>
    </div>
  )
}

export default ChatList
