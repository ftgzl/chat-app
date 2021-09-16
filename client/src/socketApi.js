import io from 'socket.io-client';

let socket;

export const init = () => {
  console.log("Connecting to the server...");

  socket = io("https://localhost:3000", {
    transport: ["websocket"],
  })

  socket.on("connect", () => console.log("Connected"))
}