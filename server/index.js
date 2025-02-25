const express = require('express');
const cors = require('cors'); 
const authRoutes = require('./src/routes/authRoutes');
const postRoutes = require('./src/routes/postRoutes');
const app = express();
const PORT = 3000;

// Configurez CORS pour permettre les requêtes provenant de votre client
app.use(cors({
  origin: 'http://localhost:5173', // Remplacez par l'URL de votre client
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware global pour gérer les en-têtes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});