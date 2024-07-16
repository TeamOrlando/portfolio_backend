import jwt from 'jsonwebtoken'

export const checkUserSession = (req, res, next) => {
  //check if session has user
  if (req.session.user) {
    next();
  } else if (req.headers.authorization) {
    try {
      // 1. Extract the token from headers
      const token = req.headers.authorization.split(' ')[1];
      // 2. Verify the token to get user & append to request
      req.user = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
      // 3. Call next function
      res.json(user);
      next();
    } catch (error) {
      res.status(401).json(error);
    }
  } else {
    res.status(401).json('No user session')
  }
}