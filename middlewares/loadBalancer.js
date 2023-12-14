// loadBalancer.js
const httpProxy = require('http-proxy');

const servers = [
  { host: 'localhost', port: 5000 },
  { host: 'localhost', port: 5001 },
  // Tambahkan server sesuai kebutuhan
];

const proxy = httpProxy.createProxyServer({});

let currentServerIndex = 0;

function loadBalancerMiddleware(req, res) {
  const selectedServer = servers[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % servers.length;

  proxy.web(req, res, {
    target: {
      host: selectedServer.host,
      port: selectedServer.port,
    },
  });
}

module.exports = loadBalancerMiddleware;
