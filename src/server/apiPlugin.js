/**
 * Server plugin to install middlewares on server to create
 * and API
 */
import fastifyApi from './fastifyApi';

export default {
  install(app) {
    fastifyApi(app);
  },
};
