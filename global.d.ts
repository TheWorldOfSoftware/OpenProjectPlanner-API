import type { NodeEnvOverride } from "./src/env.ts";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeEnvOverride {}
  }
}
