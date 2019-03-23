/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('whitelist', {
    title: 'Whitelist'
  });
};
