function encodeBasic(username, password) {
    // Convert clientId and clientSecret to base64 as specified in the Spotify API documentation
    return Buffer.from(`${username}:${password}`).toString("base64");
};

module.exports = encodeBasic;