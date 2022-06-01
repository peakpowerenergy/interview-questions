const express = require('express')
const router = express.Router();
const si = require("systeminformation");


function healthz(req, res) {
  return si.osInfo().then(data => {
    // Only return a subset of the info, we don't need all of it.
    return res.json({ hostname: data.hostname, kernel: data.kernel, arch: data.arch });
  });
}


// Routes
router.use(express.json());
router.get('/healthz', healthz);
router.get('/', healthz);

module.exports = router;
