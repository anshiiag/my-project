const Url = require('../models/Url');
const generateShortCode = require('../utils/generateShortCode');

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ message: 'Original URL is required' });
  }

  const shortCode = generateShortCode();
  const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

  const newUrl = new Url({ originalUrl, shortCode, shortUrl });

  try {
    await newUrl.save();
    res.status(201).json({ shortUrl });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

