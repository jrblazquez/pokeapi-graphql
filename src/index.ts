import * as express from 'express';
import * as mongoose from 'mongoose';
import * as graphqlHTTP from 'express-graphql';
import rootSchema from './schemas';

const SERVER_PORT = 4001;
const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'pokemon';

const app = express();
  app.use('/test', (req, res) => {
    return res.send('Test7');
  });
  app.listen(SERVER_PORT, () => 
    console.log('Iniciado servidor')
  );

/*mongoose.connection.on('connected', ref => {
  console.log(`Connected to ${DB_HOST} DB!`);
  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
  }));
  app.listen(SERVER_PORT, () => 
    console.log('Iniciado servidor')
  );
});

const gracefulExit = () => { 
  mongoose.connection.close(function () {
    console.log('Mongoose default connection with DB is disconnected through app termination');
    process.exit(0);
  });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

try {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
  console.log("Trying to connect to DB");
} catch (err) {
  console.log("Sever initialization failed " , err.message);
}*/
