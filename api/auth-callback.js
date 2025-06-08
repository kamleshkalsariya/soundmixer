export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing authorization code.');
  }

  // Redirect back to your app using custom URL scheme
  const redirectURL = `soundmixer://auth?code=${encodeURIComponent(code)}`;
  res.writeHead(302, { Location: redirectURL });
  res.end();
}
