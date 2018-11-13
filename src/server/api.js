import Router from 'router';
import jwt from 'jsonwebtoken';

const router = new Router();

const jsonResponse = (res, data, statusCode = 200) => {
  res.setHeader('content-type', 'application/json');
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
};

router.post('/login', async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return jsonResponse(res, { error: 'No username' }, 400);
  }

  return jsonResponse(res, {
    token: jwt.sign({ username }, 'shhhhh'),
  });
});

router.get('/data', (req, res) => {
  const { authorization } = req.headers;
  const token = authorization ? authorization.replace(/^Bearer\s/, '') : null;

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
    return jsonResponse(res, { error: 'Bad token' }, 403);
  }

  return jsonResponse(res, [
    {
      title: 'Lorem ipsum dolor sit amet',
      text: `Suspendisse efficitur, eros quis commodo pharetra, 
      leo odio mattis risus, sit amet fringilla tortor nibh eget mi. 
      Donec in volutpat leo, ultrices finibus nisi. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit. Integer ornare consectetur 
      felis viverra eleifend. Duis id molestie velit, vestibulum accumsan velit.`,
    },
    {
      title: 'Morbi in libero eget erat consectetur feugiat quis at risus',
      text: `Pellentesque habitant morbi tristique senectus et netus et malesuada 
      fames ac turpis egestas. Maecenas vehicula elit vel accumsan consequat. 
      Donec tristique nibh eu tortor finibus tempus. Nulla sit amet purus lacus. 
      Morbi quam mi, scelerisque placerat quam ut, varius commodo nulla.`,
    },
    {
      title: 'In quis tellus et sem elementum bibendum faucibus id nisl',
      text: `Donec massa nisl, tristique aliquet molestie sed, luctus ac felis. 
      Vestibulum bibendum condimentum scelerisque. Pellentesque habitant morbi 
      tristique senectus et netus et malesuada fames ac turpis egestas. 
      Maecenas semper bibendum scelerisque. Nulla vestibulum rutrum est. 
      Nam ornare volutpat felis, at lobortis lacus. Pellentesque sodales lacus ante, 
      in finibus mauris accumsan at. Suspendisse potenti.`,
    },
  ]);
});

export default router;
