const express = require('express');
const app = express();
app.use(express.static("./docs"));
app.listen('28911', () => console.log('listen start'));
