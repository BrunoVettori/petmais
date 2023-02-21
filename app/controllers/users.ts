import { v4 as uuid } from 'uuid';

let users:Array<any> = [];

export const getUsers = (req:any, res:any) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req:any, res:any) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req:any, res:any) => {
    res.send(req.params.id)
};

export const deleteUser = (req:any, res:any) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req:any, res:any) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};