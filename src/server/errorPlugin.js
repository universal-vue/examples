import path from 'path';
import fs from 'fs';

export default {
  async routeError(err, response) {
    const html = fs.readFileSync(path.join(__dirname, 'error.html'), 'utf-8');
    response.body = html.replace('{{ error }}', err.stack);
  },
};
