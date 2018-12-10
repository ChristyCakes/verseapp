import Users from '../db/models/users';

const UsersController = {};

UsersController.getAll = async (req, res) => {
    try{
        await Users.find().exec((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json(users);
        });
    }
    catch(err){
        res.send(err);
    }
}

export default UsersController;