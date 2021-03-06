require("dotenv").config()
const express = require("express")
const app = express()
// const cores = require("cores")
const bodyParser = require("body-parser")
const errorHandler = require("./handlers/errorhandler.js")
const authRoutes = require("./routes/auth")
const messageRoutes = require("./routes/message")
const {loginRequired , userHavePermission} = require("./middleware/auth")


// app.use(cores())
app.use(bodyParser.json())

app.use("/api/auth" , authRoutes)
app.use("/api/users/:id/messages" ,loginRequired , userHavePermission, messageRoutes)

app.use("/api/messages" ,loginRequired , async function(req,res,next) {
	try{
		let messages = db.Message.find().sort({createdAt : "desc"}).populate("user" , {
			userName:true,
			profileImg:true
		})
		return res.status(200).json(messages)
	}catch(err){
		return next(err)
	}
})

app.use(function(req, res, next){
	let err = new Error("Page not found")
	err.status = 404
	next(err)
})

app.use(errorHandler)

app.listen(3000 , function(){
	console.log("Server is happy")
})
