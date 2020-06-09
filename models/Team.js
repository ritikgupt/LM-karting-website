const mongoose= require('mongoose');
const Schema =mongoose.Schema;

//create schmea
const TeamSchema = new Schema({
teamname:{
	type: String,
	required:true
},
captainname:{
	type: String,
	required:true
},
college:{
	type: String,
	required:true
},
city:{
	type: String,
	required:true
},
state:{
	type: String,
	required:true
},
category:{
	type: String,
	required:true
},
phone:{
	type: String,
	required:true
},
email:{
	type: String,
	required:true
},
password:{
	type: String,
	required:true
},
date:{
	type: Date,
	default:Date.now
}
});
module.exports=User=mongoose.model('teams',TeamSchema);