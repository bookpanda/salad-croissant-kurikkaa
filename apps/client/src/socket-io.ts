import { io } from "socket.io-client";
import { IAppContext } from "./core/context/appContext";

export const socketIOUrl = process.env["NEXT_PUBLIC_SOCKET_HOST"];

type CreateSocketOptions = {
  socketIOUrl: string;
  context: IAppContext;
};

export const createSocketWithHandlers = ({
  socketIOUrl,
  context,
}: CreateSocketOptions) => {
  console.log("Creating socket");
  const socket = io(socketIOUrl, { transports: ["websocket", "polling"] });

  socket.on("connect", () => {
    console.log("Socket connected");
  });

  socket.on("connect_error", () => {
    console.log("Connection error");
  });

  socket.on("exception", (error) => {
    console.log("WebSockets exception: ", error);
  });

  socket.on("update", (scores) => {
    console.log("event: update", scores);
    context.updateScores(scores);
  });

  return socket;
};
