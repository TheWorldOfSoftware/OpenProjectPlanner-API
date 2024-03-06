import { z } from "zod";

const env = z.object({
  MYSQL_CONNECTION: z.string(),
  MYSQL_PASSWORD: z.string(),
  MYSQL_USER: z.string(),
  PORT: z.string()
});

env.parse(process.env);

export type NodeEnvOverride = z.infer<typeof env>;
