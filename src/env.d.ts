import type { NodeEnvOverride } from "./lib/env.ts";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeEnvOverride {}
  }
}
