const travelValidation = (travel) => {
    const { date, price, transportation } = travel;

    if (!date || typeof date !== 'string') {
        return {
            error: true,
            message: 'Date is required',
        };
    }

    if (!price || typeof price !== 'number' || price < 0) {
        return {
            error: true,
            message: 'Price is required',
        };
    }

    if (!transportation || !Array.isArray(transportation) || !transportation.length) {
        return {
            error: true,
            message: 'Transportation is required',
        };
    }
};

module.exports = travelValidation;