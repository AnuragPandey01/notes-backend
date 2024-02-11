import express from 'express';
import 'dotenv/config'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
})