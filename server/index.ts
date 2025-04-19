// @ts-expect-error: Suppress error about missing type declaration for handler.js
import { handler } from '../build/handler.js';
import app from './app.ts';
import config from './config/config.ts';

const { port, nodeEnv } = config;

app.use(handler);

app.listen(port, () => {
	console.log(`Server is running on port ${port} in ${nodeEnv} mode`);
});
