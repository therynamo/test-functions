const html = `
  <html>
    <head>
    </head>
    <body>
      <h1> Hi, from HTML </h1>
    </body>
  </html>
`;

module.exports = function renderPage(req, res) {
  res.send(html);
};
