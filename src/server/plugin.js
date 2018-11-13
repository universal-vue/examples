import bodyParser from 'body-parser';
import api from './api';

export default {
  install(app) {
    app.use('/api', bodyParser.json());
    app.use('/api', api);
  },
};
