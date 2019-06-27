require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rp-db.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  /*  production: {
     client: 'pg',
     connection: dbConnnection,
     migrations: {
       directory: './data/migrations',
     },
     seeds: {
       directory: './data/seeds'
     }
   }, */
};