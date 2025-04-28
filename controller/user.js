const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
// const index = fs.readFileSync('./index.html','utf-8');
const users = data.users;


exports.createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllUsers = (req,res)=>{
    res.status(200).json(users);
}
exports.getUser = (req,res)=>{
    console.log(req.params.id);
    const  User = users.find(p=> p.id==+req.params.id);
    res.status(200).json(User);
}
exports.replaceUser = (req,res)=>{
    const index = users.findIndex(p=> p.id==+req.params.id);
    users.splice(index,1,{...req.body,id:+req.params.id});
    res.status(200).json(req.body);
}
exports.updateUser = (req,res)=>{
    const index = users.findIndex(p=> p.id==+req.params.id);
    const User = users[index];
    users.splice(index,1,{...User,...req.body});
    res.status(201).json();
}
exports.deleteUser = (req,res)=>{
    const index = users.findIndex(p=> p.id==+req.params.id);
    const User = users[index];
    users.splice(index,1);
    res.status(201).json();
}