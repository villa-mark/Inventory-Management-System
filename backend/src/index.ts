import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Inventory Management API');
});

app.get('/health', (c) => {
	return c.json({
		status: 'ok',
		message: 'Inventory Management API is running'
	});
});

serve({
	fetch: app.fetch,
	port: 3000
});

console.log('API server running on http://localhost:3000');