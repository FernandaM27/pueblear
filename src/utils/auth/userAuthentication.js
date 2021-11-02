const { user } = require('../../models/user');

const authenticateUser = (name, password) => {
    return new Promise((resolve, reject) => {
        user.findOne(
            {
                name: name,
                password: password,
            },
            (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            }
        );
    });
};

module.exports = authenticateUser;
