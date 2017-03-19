module.exports = function respondWithPayload(req, res) {
  if (req.query.funk) return res.json({ location: 'uptown' });

  res.send(200);
};
