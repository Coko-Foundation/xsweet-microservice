module.exports = {
  secret: 'SECRET',
  port: 'SERVER_PORT',

  db: {
    user: 'POSTGRES_USER',
    password: 'POSTGRES_PASSWORD',
    host: 'POSTGRES_HOST',
    database: 'POSTGRES_DB',
    port: 'POSTGRES_PORT',
    allowSelfSignedCertificates: {
      __name: 'POSTGRES_ALLOW_SELF_SIGNED_CERTIFICATES',
      __format: 'json',
    },
    caCert: 'POSTGRES_CA_CERT',
  },

  clientID: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
}
