import io from 'socket.io-client';

let socket;

export const init = () => {
  console.log("Connecting to the server...");

  socket = io("https://localhost:3000", {
    transport: ["websocket"],
  })

  socket.on("connect", () => console.log("Connected"))
}


export const sendMessage = (message) => {
  if(socket) socket.emit("new-message", message)
}


export const subscribeChat = (cb) => {
  if(!socket) return;

  socket.on("recive-message", (message) => {
    console.log("New message: ", message);
    cb(message);
  })
}