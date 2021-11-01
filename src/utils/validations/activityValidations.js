const validateName = (name) => {
    if (
        name === undefined ||
        name === '' ||
        typeof name !== 'string' ||
        !name.match(/^[a-zA-Z ]+$/)
    ) {
        return {
            error: true,
            message: 'Activity name is required and must be alphabetical',
        };
    }
};

const activityValidation = (activity) => {
    const { name, price, description, date } = activity;
    validateName(name);

    if (price === undefined || price === '' || typeof price !== 'number') {
        return {
            error: true,
            message: 'Activity price is required and must be a number',
        };
    }

    if (
        description === undefined ||
        description === '' ||
        typeof description !== 'string'
    ) {
        return {
            error: true,
            message: 'Activity description is required and must be a string',
        };
    }

    if (date === undefined || date === '' || typeof date !== 'string') {
        return {
            error: true,
            message: 'Activity date is required and must be a string',
        };
    }
};

module.exports = activityValidation;
