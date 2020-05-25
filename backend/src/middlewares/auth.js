const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) 
      return res.status(401).send({ message: 'No token provided' });
    
    const parts = authHeaders.split(' ');

    if (!parts.length === 2)
      return res.status(401).send({ message: 'Invalid token' });
    
    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).send({ message: 'Invalid token' });
    
    
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) return res.status(401).send({ message: 'Invalid token' });
      return next();
    });
  } catch (error) {
      next(error);
  }
}