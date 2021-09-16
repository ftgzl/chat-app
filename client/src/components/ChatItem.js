import styles from './styles.module.css'

function ChatItem({item}) {
  return (
    <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
      {item.messages}
    </div>
  )
}

export default ChatItem
