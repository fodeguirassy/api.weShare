const sha1 = require ('sha1')

module.exports = (app) => {
	const Specialty = app.models.Specialty
	const User = app.models.User


	app.sequelize.sync().then(() => {

		Specialty.findOrCreate ( { where : { title : "Nodejs",logo : "http://www.lnwebworks.com/sites/default/files/node.png" } })
		Specialty.findOrCreate ( { where : { title : "Android",logo : "http://www.pngmart.com/files/4/Android-PNG-Pic.png" } }),
		Specialty.findOrCreate ( { where : { title : "iOS",logo : "https://www.adiants.com/wp-content/uploads/2016/07/app-ios-png-4.png"} })
		Specialty.findOrCreate ( { where : { title : "Kotlin",logo : "https://vincentaube.net/images/language/kotlin.png" } })
		Specialty.findOrCreate ( { where : { title : "Git",logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Git-logo-black.svg/500px-Git-logo-black.svg.png"} })
		Specialty.findOrCreate ( { where : { title : "Swift",logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swift_logo_with_text.svg/2000px-Swift_logo_with_text.svg.png"} })

		User.findOrCreate (  { where : { username : "Fodé Guirassy", password : sha1("yolo")} }  )
		User.findOrCreate (  { where : {username : "Serey Pich", password : sha1("saaa")} }  )
		User.findOrCreate (  { where : {username : "Karan WhatEver", password : sha1("pouet")} } )

	})

}
