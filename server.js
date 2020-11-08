const path = require('path');
const express = require('express');
require('dotenv').config();

/* express */
const app = express();

/* Serving Staic assets from a public directory */
app.use(express.static(path.join(__dirname, 'public')));

/* Return 404 errors when a static file is not found */
app.use(function(req, res, next) {
  res.status(404);
  res.send('Error 404: File Not Found');
});

/* Port 8080 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
