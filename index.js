const app = require ('express')();

require('./settings')(app)
require('./databases')(app)
.then(() => { require ('./models')(app) })
.then(() => { require ('./boot')(app) })
.then(() => { require ('./actions')(app) })
.then(() => { require ('./routes')(app) })
.then(() => {
	app.listen(app.settings.port)
	console.log(`\n\n${app.settings.name} API is listening on ${app.settings.port}\n\n`)
})
