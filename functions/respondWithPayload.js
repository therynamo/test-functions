module.exports = function respondWithPayload(req, res) {
  if (req.params.funk) res.json({ location: 'uptown' });
  res.send(200);
};