const config = {
    development: {
        SECRET: 'pesho',
        DB_URL: 'mongodb+srv://admin:488690@cluster0.i6oor.mongodb.net/exam?retryWrites=true&w=majority',
        PORT: 5001,
        SALT_ROUNDS: 10,
    },
    production: {
        SECRET: 'pesho',
        DB_URL: 'mongodb+srv://admin:488690@cluster0.i6oor.mongodb.net/exam?retryWrites=true&w=majority',
        PORT: 80,
        SALT_ROUNDS: 10,
    }
};

module.exports = config[process.env.NODE_ENV];