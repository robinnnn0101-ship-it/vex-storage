// Node status reporter
function getStatus(node) {
  return {
    online: true,
    capacity: node.capacity,
    free: node.capacity - node.used,
    credits: node.creditsEarned,
    uptime: 'demo'
  };
}

module.exports = { getStatus };
