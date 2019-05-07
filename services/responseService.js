module.exports = {
    createSuccessResponse(data) {
        return {
            success: true,
            ...data
        };
    },

    createErrorResponse(errorMessage) {
        return {
            success: false,
            reload: false,
            errorMessage
        };
    }
}