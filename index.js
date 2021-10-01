const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  return res.end(`Hello streamers! This is showing that auto-deployments from Github are a success v2`);
});

server.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
