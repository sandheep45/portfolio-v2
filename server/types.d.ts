// server/declarations.d.ts
declare module '../build/handler.js' {
	import { RequestHandler } from 'express';
	export const handler: RequestHandler;
}

