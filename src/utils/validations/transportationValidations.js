const transportationValidation = (transportation) => {
    const { type, price } = transportation;

    if (!type || typeof type !== 'string' || type === null) {
        return {
            error: true,
            message: 'Type is required and must be a string',
        };
    }

    if (!price || typeof price !== 'number' || price === null || price < 0) {
        return {
            error: true,
            message: 'Price is required and must be a number',
        };
    }
};

module.exports = transportationValidation;