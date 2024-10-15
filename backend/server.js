const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Liste des items en mémoire
let items = [];

// Endpoint GET pour récupérer la liste des items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Endpoint POST pour ajouter un nouvel item à la liste
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Lancer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
