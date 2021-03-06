const { User, Thought } = require('../models');

const UserController = {
    // get all Users
    getAllUser(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one User by id
    getUserById({ query }, res) {
        User.findOne({ _id: query.user })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // createUser
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update User by id
    updateUser({ query, body }, res) {
        User.findOneAndUpdate({ _id: query.user }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete User
    deleteUser({ query }, res) {
        User.findOneAndDelete({ _id: query.user })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                console.log('***********DELETING USER*************');
                console.log(dbUserData);

                return dbUserData;
                //   res.json(dbUserData);
            })
            .then( /* ADD LOGIC TO REMOVE ALL USER THOUGHTS FROM DATABASE  */
                dbUserData =>
                Thought.deleteMany({ username: dbUserData.username })
                .then(dbThoughtData => {
                    console.log('***********DELETING USERS THOUGHTS*************');
                    console.log(dbThoughtData);
                    return dbUserData;
                })
                /* */
            ).then(dbUserData => /* ADD LOGIC TO REMOVE ALL FRIEND REFERENCES FROM OTHER USERS IN DATABASE  */
                User.updateMany({ "friends": dbUserData._id }, { $pull: { friends: dbUserData._id } }, { new: true })
                .then(dbUpdateData => {
                    console.log('***********REMOVING USERS FRIEND ASSOCIATIONS*************');
                    console.log(dbUpdateData);

                    res.json(dbUserData);
                })
                /* */
            )
            .catch(err => res.status(400).json(err));
    },

    // add friend
    addFriend({ query }, res) {
        User.findOneAndUpdate({ _id: query.user }, { $push: { friends: query.frNd } }, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // remove friend
    removeFriend({ query }, res) {
        User.findOneAndUpdate({ _id: query.user }, { $pull: { friends: query.frNd } }, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    }
}


module.exports = UserController;