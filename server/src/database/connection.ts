import { createConnection } from 'typeorm';

export default createConnection()
  .then(() => console.log('Database => http://localhost/phpmyadmin/'))
  .catch(err => console.log(`Ocorreu um erro ao tentar conectar | ${err}`));
