/**
 * Server plugin to install middlewares on server to create
 * and API
 */
import bodyParser from 'body-parser';
import api from './api';

export default {
  install(app) {
    app.use('/api', bodyParser.json());
    app.use('/api', api);
  },
};
