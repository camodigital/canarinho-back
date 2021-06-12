module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'canarinho'),
        username: env('DATABASE_USERNAME', 'canarinho'),
        password: env('DATABASE_PASSWORD', 'canarinho123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
