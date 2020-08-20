import jwt from "jsonwebtoken";
import config from "./config.js";
const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  /// console.log("value from the token", token);

  if (token) {
    const onlyToken = token.slice(6, token.length);
    //console.log(onlyToken, "token value from the isAuth");
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token" });
      }
      ////console.log(decode, "value from the decode");
      // console.log(req.user, "value form the req.user");
      req.user = decode;
      //console.log(req.user, "value  of req.user after assigning decode init");
      next();
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};
const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  ///console.log(token);
  if (token) {
    const onlyToken = token.slice(6, token.length);
    //console.log("console log from is admin ", onlyToken);

    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      return (req.user = decode);
    });
  }
  // console.log(req.user, "value from the is Admin req.user");
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "Admin Token is not valid." });
};

export { getToken, isAuth, isAdmin };
