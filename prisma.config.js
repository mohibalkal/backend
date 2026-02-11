module.exports = {
    datasource: {
        url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/postgres',
    },
};
