// lib/socketClient.js
import { io } from "socket.io-client";

let socket = null;

export function getSocket() {
  if (!socket) {
    // replace with your server URL
    socket = io("http://localhost:5000", { autoConnect: true });
  }
  return socket;
}
