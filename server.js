const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5050;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})