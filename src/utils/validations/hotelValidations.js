const hotelValidation = (hotel) => {
    const { name, price, location, rating } = hotel;
    if (typeof name !== 'string' || name.length === 0 || !name) {
        return {
            error: true,
            message: 'Hotel name is required',
        };
    }

    if (typeof price !== 'number' || price <= 0 || !price) {
        return {
            error: true,
            message: 'Hotel price is required',
        };
    }

    if (typeof location !== 'string' || location.length === 0 || !location) {
        return {
            error: true,
            message: 'Hotel location is required',
        };
    }

    if (typeof rating !== 'number' || rating <= 0 || rating <= 5 || !rating) {
        return {
            error: true,
            message: 'Hotel rating is required',
        };
    }
};

module.exports = hotelValidation;