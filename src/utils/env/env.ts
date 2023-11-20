import { z } from "zod";

const env = z.object({
  MYSQL_CONNECTION: z.string(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string()
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
