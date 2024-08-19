import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Redirigir directamente a Google Tag Manager
app.get('/gtag/js', (req, res) => {
  res.redirect('https://www.googletagmanager.com/gtag/js?id=AW-16671908962');
});

// Configurar la ruta para servir el script de Google Ad
app.get('/', (req, res) => {
  res.send(`
    <div>
      <!-- Google tag (gtag.js) -->
      <script async src="/gtag/js"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16671908962');
      </script>
    </div>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
