const express = require('express');
const app = express();

app.get('/auth/callback', (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Missing authorization code.');
  }

  // Redirect to your app with the code using custom scheme
  const redirectURL = `soundmixer://auth?code=${encodeURIComponent(code)}`;
  res.redirect(redirectURL);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OAuth redirect server running on port ${PORT}`);
});
