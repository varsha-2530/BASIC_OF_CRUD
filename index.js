const express = require('express');
const app = express();

const member = [
    {
        id: 1,
        name: 'John doe',
        email: 'john231@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'steve',
        email: 'stv123@gmail.com',
        status: 'active'
    },
    {
        id: 3,
        name: 'steve john',
        email: 'sj98@gmail.com',
        status: 'inactive'
    }
]

app.get('/', (req, res) => {
    res.status(200).json(member);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
});