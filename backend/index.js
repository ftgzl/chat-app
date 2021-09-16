const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors')

const Messages = require('./lib/Messages')

app.use(cors());

app.get("/", (req, res) => {
  res.end("Hi Socket.io")
})

io.on('connection', (socket) => {
  console.log("a user connected to the server");

  Messages.list((data) => {
    console.log(data);
    socket.emit("message-list", data)
  })

  socket.on("new-message", (message) => {
    console.log(message);
    Messages.upsert({message})

    socket.broadcast.emit("receive-message", message)
  })

  socket.on("disconnect", () => console.log("a user disconnected from the channel"));
})

http.listen(process.env.REDIS_PORT ||"3000", () => {
  console.log("listening port on *:3000");
})