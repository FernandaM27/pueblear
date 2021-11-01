const commentValidation = (comment) => {
    const { username, message } = comment;
    if (typeof username !== 'string' || username.length === 0 || !username) {
        return {
            error: true,
            message: 'Username is required',
        };
    }

    if (typeof message !== 'string' || message.length === 0 || !message) {
        return {
            error: true,
            message: 'Message is required',
        };
    }
};

module.exports = commentValidation;