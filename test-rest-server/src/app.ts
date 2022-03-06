import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser());

app.post('/api/items', (req, res, next) => {
    res.send([
        {
            displayItemCode: '',
            itemName: '',
            itemQuantity: 10,
        }
    ])
})

app.listen(8000, () => {
    console.log('🛡️  Server listening on port: 8000🛡️');
});