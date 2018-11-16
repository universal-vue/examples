/**
 * This server plugin will display a nice error page if an error
 * is catch on server-side. In this case we cannot use Vue rendering.
 */
import path from 'path';
import fs from 'fs';

export default {
  async routeError(err, response) {
    const html = fs.readFileSync(path.join(__dirname, 'error.html'), 'utf-8');
    response.body = html.replace('{{ error }}', err.stack);
  },
};
