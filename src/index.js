const app = require('./server/server');
require('./server/database');

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});

 