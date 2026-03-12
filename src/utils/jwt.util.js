import jwt from "jsonwebtoken";

const JWT_EXPIRES_IN = "1h";

const getJwtSecret = () => {
     if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET is not configured");
     }

     return process.env.JWT_SECRET;
};

export const generateToken = (payload) => {
     return jwt.sign(payload, getJwtSecret(), {
          expiresIn: JWT_EXPIRES_IN,
     });
};

export const verifyToken = (token) => {
     return jwt.verify(token, getJwtSecret());
};
