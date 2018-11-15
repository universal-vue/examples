import Router from 'router';
import jwt from 'jsonwebtoken';
import faker from 'faker';

const jwtSecret = 'shhhhh';
const router = new Router();

// Send a JSON response
const json = (res, data, statusCode = 200) => {
  res.setHeader('content-type', 'application/json');
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
};

// Return current token
const getToken = req => {
  const { authorization } = req.headers;
  return authorization ? authorization.replace(/^Bearer\s/, '') : null;
};

/**
 * Login route
 */
router.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return json(res, { error: 'No username' }, 400);
  }

  return json(res, {
    token: jwt.sign({ username }, jwtSecret),
  });
});

/**
 * Return current connected profile
 */
router.get('/profile', (req, res) => {
  const token = getToken(req);

  try {
    if (token && jwt.verify(token, jwtSecret)) {
      const { username } = jwt.decode(token);
      return json(res, {
        username,
        logged: true,
      });
    }
  } catch (err) {
    // ...
  }

  return json(res, {
    logged: false,
  });
});

/**
 * Data route
 */
router.get('/public', async (req, res) => {
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraphs(),
      picture: faker.image.technics(),
    });
  }

  return json(res, rows);
});

/**
 * Private data
 */
router.get('/private', (req, res) => {
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
    return json(res, { error: 'Bad token' }, 403);
  }

  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraphs(),
      picture: faker.image.technics(),
    });
  }

  return json(res, rows);
});

export default router;
