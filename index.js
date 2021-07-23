// const express = require('express');
// const app = express();
// const shelterRoutes = require('./routes/shelters');
// const dogRoutes = require('./routes/dogs');
// const adminRoutes = require('./routes/admin')

// app.use('/shelters', shelterRoutes);
// app.use('/dogs', dogRoutes);
// app.use('/admin', adminRoutes)

// app.listen(3000, () => {
//     console.log('Serving app on localhost:3000')
// })
const express = require('express');
const app = express()

const DevsRoutes = require('./routes/devs');
const IpsRoutes = require('./routes/Ips')
const PublishersRoutes = require('./routes/publishers')

//prefix dev routes
app.use('/dev', DevsRoutes)
//prefix Ips routes
app.use('/ip', IpsRoutes)
//prefix publisher routes
app.use('/pub', PublishersRoutes);
app.listen('8080', () => {
    console.log('Receiving from port 8080');
})


