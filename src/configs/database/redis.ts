import { config } from 'dotenv';
import * as redis from 'redis';

export const redisClient = redis.createClient({
  legacyMode: true,
  url: `redis://redis:${process.env.REDIS_PORT}`,
});
