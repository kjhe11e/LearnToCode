"use strict";

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.send({ express: 'Powered by an Express API backend' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
