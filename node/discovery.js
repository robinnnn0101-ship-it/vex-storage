// Stub for node discovery (WebRTC / DHT later)
function discoverNodes() {
  return [{ id: 'node1', capacity: 50, free: 40 }];
}

module.exports = { discoverNodes };
