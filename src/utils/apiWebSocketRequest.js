import io from "socket.io-client";

export const websocketRequest = url => io(url);
