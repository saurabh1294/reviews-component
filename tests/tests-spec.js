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
				 expect(username).toBe(commentators[index]);
			});
		}
	});
});


/*
describe('Run search test', function() {
	it('Search Test1', function() {
		console.log("Searching for Sean");
		element(by.model('searchQuery')).sendKeys("Sean");
		var people = element.all(by.repeater('user in filteredPeople'));
		expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[0]);
		element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test2', function() {
	console.log("Searching for Yaw");
	element(by.model('searchQuery')).sendKeys("Yaw");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[1]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test3', function() {
	console.log("Searching for Lucy");
	element(by.model('searchQuery')).sendKeys("Lucy");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[2]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test4', function() {
	console.log("Searching for Eric");
	element(by.model('searchQuery')).sendKeys("Eric");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[3]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test5', function() {
	console.log("Searching for Rory");
	element(by.model('searchQuery')).sendKeys("Rory");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[4]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test6', function() {
	console.log("Searching for Hayley");
	element(by.model('searchQuery')).sendKeys("Hayley");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[5]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test7', function() {
	console.log("Searching for L");
	element(by.model('searchQuery')).sendKeys("L");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[2]);
	expect(people.get(1).element(by.css("#listName")).getText()).toMatch(usersList[5]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test8', function() {
	console.log("Searching for Y");
	element(by.model('searchQuery')).sendKeys("Y");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[1]);
	expect(people.get(1).element(by.css("#listName")).getText()).toMatch(usersList[2]);
	expect(people.get(2).element(by.css("#listName")).getText()).toMatch(usersList[4]);
	expect(people.get(3).element(by.css("#listName")).getText()).toMatch(usersList[5]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test9', function() {
	console.log("Searching for E");
	element(by.model('searchQuery')).sendKeys("E");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[0]);
	expect(people.get(1).element(by.css("#listName")).getText()).toMatch(usersList[3]);
	expect(people.get(2).element(by.css("#listName")).getText()).toMatch(usersList[5]);
	element(by.model('searchQuery')).clear();
	});
});

describe('Run search test', function() {
	it('Search Test10', function() {
	console.log("Searching for R");
	element(by.model('searchQuery')).sendKeys("R");
	var people = element.all(by.repeater('user in filteredPeople'));
	expect(people.get(0).element(by.css("#listName")).getText()).toMatch(usersList[3]);
	expect(people.get(1).element(by.css("#listName")).getText()).toMatch(usersList[4]);
	element(by.model('searchQuery')).clear();
	});
});
*/
