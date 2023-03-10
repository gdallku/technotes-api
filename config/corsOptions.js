const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by cors"));
    }
  },
  credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 
