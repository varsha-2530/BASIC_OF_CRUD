const express = require('express');
const app = express();
const PORT = 3000;

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john231@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Steve',
        email: 'stv123@gmail.com',
        status: 'active'
    },
    {
        id: 3,
        name: 'Steve John',
        email: 'sj98@gmail.com',
        status: 'inactive'
    }
];

app.get('/showAllUser', (req, res) => {
    res.status(200).json(members);
});



app.get("/showUser/:userId", (req, res) => {
    // console.log(typeof req.params.userId)

    const id = parseInt(req.params.userId);

    let user = members.filter(member => member.id === id);
    //console.log('get the user');
    

    (user.length !== 0) ? res.status(200).json(user) : res.status(404).json({ message: `User not found with id ${id}` })
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
