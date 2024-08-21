import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Middleware para manejar solicitudes
app.use(express.json());

// Rutas API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello froms Express AasdasdPI!' });
});

// Ruta para servir archivos estáticos generados por Astro
app.use(express.static('public'));

// Ruta para manejar todas las demás solicitudes y servir el frontend de Astro
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
