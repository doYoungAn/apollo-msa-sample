import express from 'express';

const app = express();

app.post('/item', (req, res, next) => {
    res.send({
        displayItemCode: '',
        itemName: '',
        itemQuantity: 10,
    })
})

app.listen(8000, () => {
    console.log('🛡️  Server listening on port: 8000🛡️');
});