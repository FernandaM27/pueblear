const userValidation = (user) => {
    const { name, age, location, travels, password } = user;

    if (!name || !name.match(/^[a-zA-Z]+$/)) {
        return {
            error: true,
            message: 'Name must be an alphabetic string',
        };
    }

    if (!age || !age.match(/^[0-9]+$/) || age < 0) {
        return {
            error: true,
            message: 'Age must be a positive number',
        };
    }

    if (!location || !location.match(/^[a-zA-Z]+$/)) {
        return {
            error: true,
            message: 'Location must be a string',
        };
    }

    if (!travels || !Array.isArray(travels)) {
        return {
            error: true,
            message: 'Travels must be an array',
        };
    }

    if (!password || !password.match(/^[a-zA-Z]+$/)) {
        return {
            error: true,
            message: 'Password must be a string',
        };
    }
};

module.exports = userValidation;
