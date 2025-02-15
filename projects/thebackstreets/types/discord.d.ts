import { Client } from 'discord.js';
import Queue from '@kyvrixon/async-queue';

declare module 'discord.js' {
    interface Client {
        queue: Queue<any>;
    }
}
