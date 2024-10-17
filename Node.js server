const express = require('express');
const path = require('path');
const app = express();

// Serve songs folder
app.use('/songs', express.static(path.join(__dirname, 'songs')));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
