
const app = require("express")();

const http = require("http").createServer(app);

const io = require("socket.io")(http);


http.listen(3000, () => {
    console.log("J'écoute le port 3000")
});


io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () =>{
        console.log("Un utilisateur c'est déco");
    });
});