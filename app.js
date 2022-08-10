const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>ExamBook API is running...')
})

app.listen(process.env.PORT || 4000);