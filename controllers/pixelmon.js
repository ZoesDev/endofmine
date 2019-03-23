/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('pixelmon', {
    title: 'Pixelmon'
  });
};
