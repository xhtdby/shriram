module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'sqlite'
        ? {
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          }
        : {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'shriram'),
            user: env('DATABASE_USERNAME', 'strapi'),
            password: env('DATABASE_PASSWORD', 'strapi'),
            ssl: env.bool('DATABASE_SSL', false) && {
              key: env('DATABASE_SSL_KEY', undefined),
              cert: env('DATABASE_SSL_CERT', undefined),
              ca: env('DATABASE_SSL_CA', undefined),
              capath: env('DATABASE_SSL_CAPATH', undefined),
              cipher: env('DATABASE_SSL_CIPHER', undefined),
              rejectUnauthorized: env.bool(
                'DATABASE_SSL_REJECT_UNAUTHORIZED',
                true
              ),
            },
          },
    useNullAsDefault: true,
  },
});
