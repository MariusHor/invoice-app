const allowedOrigins = ['https://paperless-mariushor.netlify.app', 'http://localhost:5173', 'http://localhost:4173'];

export const corsConfig = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
