const iloopd = require('./components');
const req = require.context('./components', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

iloopd.locales = {};

req.keys().forEach((mod) => {
  const match = mod.match(/\/([^/]+).tsx$/);
  iloopd.locales[match[1]] = req(mod).default;
});

module.exports = iloopd;
