const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('🚀 Node.js App is running on Azure App Service');
});

// Port (IMPORTANT for Azure)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
