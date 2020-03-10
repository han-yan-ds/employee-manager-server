module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'employee-manager.cfm0jvmfuqy6.us-west-2.rds.amazonaws.com', // process.env.RDS_URL
      port: 5432,
      database: 'postgres',
      user: 'boss',
      password: 'bigboss123', // process.env.RDS_PW
    }
  },
  useNullAsDefault: true
}