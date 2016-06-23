import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// This will cause an error to occur.
		return new Ember.RSVP.Promise(function(resolve,reject){
			reject('error');
		});
	},
	// actions:{
	// 	error(error, transition){
	// 		alert("Sorry this page is taking so long to load!. You have been redirected");
	// 		this.transitionTo('application');
	// 	}
	// }
});
