import { handler } from './build/handler.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Ustawienie portu z preferencją dla zmiennej środowiskowej PORT
const PORT = process.env.PORT || 3000;

// Obsługa statycznych plików
app.use(express.static(path.join(__dirname, 'build/client')));

// Użyj handlera SvelteKit dla wszystkich pozostałych ścieżek
app.use(handler);

// Nasłuchiwanie na porcie
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Dla Passengera na cPanel
export default app;