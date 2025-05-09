const express = require('express');
const members = require("./Members");
const uuid = require('uuid')
const app = express();


const PORT = 3000;

app.use(express.json())



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

app.post('/addUser', (request, response) => {
    console.log('User :', request.body)
    // const name = request.body.name ;
    // const email = request.body.email ;
    const {name,email} =  request.body
    console.log(name,email);

    members.push({
        id : uuid.v4(),
        name,
        email
    })

    response.status(200).json(members)
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
