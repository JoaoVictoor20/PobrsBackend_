module.exports ={
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'Pobrs',
            dialect: 'mysql',
            user: 'root',
            password: 'joaovictor13'
        }
    },
    production:{
        database:{
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
