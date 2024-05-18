import { Server } from "socket.io";
import { Redis } from "ioredis";
import { RedisCredentials } from "../constants";
import prismaClient from "./prisma";

const pub = new Redis(RedisCredentials);
const sub = new Redis(RedisCredentials);


class SocketService {
    private _io: Server;

    constructor() {
        console.log('Init Socket Service');
        this._io = new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        });

        // all connected users to sockets (when scaled must subscribe to channel MESSAGES)
        sub.subscribe('MESSAGES')
    }

    public startListners() {
        console.log("Start Listners");
        const io = this.io;
        io.on('connect', (socket) => {
            console.log("Socket Connected", socket.id);

            socket.on('event:message', async ({ message }: { message: string }) => {
                console.log('New Message', message);
                // wait and publish to redis
                await pub.publish("MESSAGES", JSON.stringify({ message }));
            })
        })

        sub.on('message', async (channel, message) => {
            if (channel === 'MESSAGES') {
                io.emit('message', message);
                await prismaClient.message.create({
                    data: {
                        text: JSON.parse(message).message,
                    }
                })
            }
        })
    }


    get io(): Server { return this._io }
}


export default SocketService;