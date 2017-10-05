const sha1 = require ('sha1')

module.exports = (app) => {
	const Specialty = app.models.Specialty
	const User = app.models.User
	const Content = app.models.Content

	app.sequelize.sync(
		{force : true}
	).then(() => {

		Specialty.findOrCreate ( { where : { title : "nodejs", logo:"http://www.lnwebworks.com/sites/default/files/node.png" } })
		Specialty.findOrCreate ( { where : { title : "android",logo : "http://www.pngmart.com/files/4/Android-PNG-Pic.png" } }),
		Specialty.findOrCreate ( { where : { title : "ios",logo : "https://www.adiants.com/wp-content/uploads/2016/07/app-ios-png-4.png"} })
		Specialty.findOrCreate ( { where : { title : "kotlin",logo : "https://vincentaube.net/images/language/kotlin.png" } })
		Specialty.findOrCreate ( { where : { title : "git",logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Git-logo-black.svg/500px-Git-logo-black.svg.png"} })
		Specialty.findOrCreate ( { where : { title : "swift",logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swift_logo_with_text.svg/2000px-Swift_logo_with_text.svg.png"} })


		User.findOrCreate({ where : { username : "Fodé Guirassy", password : sha1("yolooo")}})
						.spread((user) => user.setSpecialties([4, 5])).then((user) => user.setContents([3]))
		User.findOrCreate ({where:{username : "Serey Pich", password : sha1("saaaaa")}}).spread((user) => user.setSpecialties([3]))
		User.findOrCreate ({where:{username:"Karan Guljinder", password : sha1("pouet")}}).spread((user) => user.setSpecialties([1, 2]))

		Content.findOrCreate({where : {title:'Tutoriel Git', fileUrl:'http://www.lmd.polytechnique.fr/~dkhvoros/teach/tutoriel-git.pdf', description: 'Git est un gestionnaire de version, libre et tres performant. Il possede de nombreuxavantages par rapport a svn, notamment, la possibilite de travailler localement. C’est a dire de faire des commits local et de les editer localement avant de les pousser vers un serveur pour qu’ils soient integres au depot central.'}})
						.spread((content) => {content.setSpecialty(5)})
		Content.findOrCreate({where : {title:'iOS Development', fileUrl:'https://www.tutorialspoint.com/ios/ios_tutorial.pdf', description:'iOS is a mobile operating system developed and distributed by Apple Inc. It was originally released in 2007 for the iPhone, iPod Touch, and Apple TV. iOS is derived from OS X, with which it shares the Darwin foundation. iOS is Apple mobile version of the OS X operating system used in Apple computers..'}})
						.spread((content) => {content.setSpecialty(3)})
		Content.findOrCreate({where : {title:'Kotlin language Documentation', fileUrl:'https://kotlinlang.org/docs/kotlin-docs.pdf', description:'Kotlin is a great fit for developing server-side applications, allowing to write concise and expressive code while maintaining full compatibility with existing Java-based technology stacks and a smooth learning curve:'}})
						.spread((content) => {content.setSpecialty(4)})
		Content.findOrCreate({where : {title:'Nodejs Tutorial', fileUrl:'https://www.tutorialspoint.com/nodejs/nodejs_tutorial.pdf', description:'Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.'}}).spread((content) => {content.setSpecialty(1)})
		Content.findOrCreate({where : {title:'Welcome to Swift', fileUrl:'http://carlosicaza.com/swiftbooks/SwiftLanguage.pdf', description:'Swift is a new programming language for iOS and OS X apps that builds on the best of C and Objective-C, without the constraints of C compatibility.'}}).spread((content) => {content.setSpecialty(6)})
		Content.findOrCreate({where : {title:'Développement Android', fileUrl:'http://www.univ-orleans.fr/lifo/Members/Jean-Francois.Lalande/enseignement/android/cours-android.pdf', description:'Le but de ce cours est de découvrir la programmation sous Android, sa plate-forme de développement et les spécificités du développement embarqué sur smartphone.'}}).spread((content) => {content.setSpecialty(2)})
	})
}
