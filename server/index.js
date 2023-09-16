var express = require ("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    "hello world"
})

app.listen(port, () => {
    console.log('Example listening app on port ${port}')
})