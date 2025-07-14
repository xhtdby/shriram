module.exports = {
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || 'shriram-admin-secret-key',
    },
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'shriram-api-token-salt',
  },
  transfer: {
    token: {
      salt: process.env.TRANSFER_TOKEN_SALT || 'shriram-transfer-token-salt',
    },
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
};
