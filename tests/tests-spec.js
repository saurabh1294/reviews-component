// tests-spec.js

describe('Reviews component', function() {
	it('should show Reviews component page', function() {
		browser.get('http://localhost/reviews-component/review.html');
		console.log("Running UI tests");

		var username, usernames=[], index;
		var commentators = ["Brendan", "Belinda", "Jacqueline T.", "Christian F", "Karina M.", "Peter M."];
		for (index = 0; index < commentators.length; index++) {
			element.all(by.css('cite.fn')).get(index).evaluate('reviews.username').then(function(name) {
				 username = name;
				 console.log(username, commentators[index]);
				 // compare
				 expect(username).toBe(commentators[index]);
			});
		}
	});
});


/*
	Note:- write more tests here to check number of reviews shown initially, expected behavior is met on button
	clicks (show more/less) etc.
*/
