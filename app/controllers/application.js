import Ember from 'ember';

export default Ember.Controller.extend({
	// This queryParams is taking whatever value I'm passing in the URL
	//for example: http://localhost:4200/?student=Erik
	queryParams: ['student'],
	student: null
});
