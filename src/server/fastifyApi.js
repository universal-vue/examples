import jwt from 'jsonwebtoken';
import faker from 'faker';

// Return current token
const getToken = req => {
  const { authorization } = req.headers;
  return authorization ? authorization.replace(/^Bearer\s/, '') : null;
};

// Generate fake data
const generateRows = count => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    rows.push({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      picture: `https://placeimg.com/256/192/tech?r=${Math.random()}`,
    });
  }
  return rows;
};

export default server => {
  const jwtSecret = 'shhhhh';
  const app = server.getApp();

  /**
   * Login route
   */
  app.post('/api/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
      return res.status(400).send({
        error: 'No username',
      });
    }

    return res.send({
      token: jwt.sign({ username }, jwtSecret),
      user: {
        username,
        logged: true,
      },
    });
  });

  /**
   * Return current logged profile
   */
  app.get('/api/profile', (req, res) => {
    const token = getToken(req);

    try {
      if (token && jwt.verify(token, jwtSecret)) {
        const { username } = jwt.decode(token);
        return res.send({
          username,
          logged: true,
        });
      }
    } catch (err) {
      // ...
    }

    return res.send({
      logged: false,
    });
  });

  /**
   * Data route: return public data
   */
  app.get('/api/public', async (req, res) => {
    return res.send(generateRows(3));
  });

  /**
   * Private data: return restricted to logged users data
   */
  app.get('/api/private', (req, res) => {
    const token = getToken(req);

    let username = null;
    try {
      if (token && jwt.verify(token, 'shhhhh')) {
        const data = jwt.decode(token);
        username = data.username;
      }
    } catch (err) {
      // ...
    }

    if (!username) {
      return res.send({ error: 'Bad token' }, 403);
    }

    return res.send(generateRows(3));
  });
};
