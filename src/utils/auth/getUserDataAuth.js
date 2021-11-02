const getUserDataAuth = (user) => {
    return {
        name: user.name,
        age: user.age,
        location: user.location,
        travels: user.travels,
    };
};

module.exports = getUserDataAuth;
