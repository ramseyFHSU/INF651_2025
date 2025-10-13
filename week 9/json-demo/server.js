const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const data = JSON.parse(msg);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            user: data.user,
            message: data.message,
            time: new Date().toLocaleTimeString(),
          })
        );
      }
    });
  });

  ws.send(
    JSON.stringify({
      user: "Server",
      message: "Welcome to JSON Chat!",
      time: new Date().toLocaleTimeString(),
    })
  );
});
