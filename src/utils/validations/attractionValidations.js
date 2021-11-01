const attractionValidation = (attraction) => {
    const { ubication, name, description } = attraction;
    if (
        ubication === undefined ||
        ubication === null ||
        ubication === '' ||
        typeof ubication !== 'string'
    ) {
        return {
            status: false,
            message: 'Ubication is required and must be a string',
        };
    }
    if (
        name === undefined ||
        name === null ||
        name === '' ||
        typeof name !== 'string'
    ) {
        return {
            status: false,
            message: 'Name is required and must be a string',
        };
    }
    if (
        description === undefined ||
        description === null ||
        description === '' ||
        typeof description !== 'string'
    ) {
        return {
            status: false,
            message: 'Description is required and must be a string',
        };
    }
};

module.exports = attractionValidation;