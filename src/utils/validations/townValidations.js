const townValidation = (town) => {
    const { name, state, location, attractions, hotels, travels, comments } =
        town;

    if (typeof name !== 'string' || name.length === 0 || !name) {
        return {
            error: true,
            message: 'Name is required',
        };
    }

    if (typeof state !== 'string' || state.length === 0 || !state) {
        return {
            error: true,
            message: 'State is required',
        };
    }

    if (typeof location !== 'string' || location.length === 0 || !location) {
        return {
            error: true,
            message: 'Location is required',
        };
    }

    if (
        !Array.isArray(attractions) ||
        attractions.length === 0 ||
        !attractions
    ) {
        return {
            error: true,
            message: 'Attractions is required',
        };
    }

    if (!Array.isArray(hotels) || hotels.length === 0 || !hotels) {
        return {
            error: true,
            message: 'Hotels is required',
        };
    }

    if (!Array.isArray(travels) || travels.length === 0 || !travels) {
        return {
            error: true,
            message: 'Travels is required',
        };
    }

    if (!Array.isArray(comments) || comments.length === 0 || !comments) {
        return {
            error: true,
            message: 'Comments is required',
        };
    }
};

module.exports = townValidation;