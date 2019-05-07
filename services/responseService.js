module.exports = {
    /**
     * 
     * @param {Object} data - data you want to send to the front-end
     */
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