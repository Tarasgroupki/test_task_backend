import express from 'express';
import router from './api/routes/';

(async () => {
    // Listen http
    const app = express();
    app.use('/', router);
    app.listen(3000, () => {
        console.log('ready to go')
    });
})().then(() => {
    console.log('Successful run');
}).catch((err) => {
    throw err;
});
