import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/api/constant.js';
import './main.html';
import { HTTP } from 'meteor/http';

Template.login.events({
	"submit .submitlogin": function(event){
		var username = event.target.username.value;
		var password = event.target.password.value;
		
		HTTP.post(BASE_API_URL+API_AUTH_URL,{
	      data:{
	        login_id: username,
	        password: password
	      }
	      },function(error,response){
	        if (error) {
	          console.log(error);
	        }else{
	          console.log(response);
	          console.log(response.data.id);
	          console.log(document.cookie);
	        
	        }
	      });

		return false;
	}
});