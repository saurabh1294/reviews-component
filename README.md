# reviews-component
star rating reviews component using angularjs


To run the code start webserver and goto http://localhost:8080/reviews-component/review.html

For test automation, you need to have the following packages installed:

1. npm install from command line in the project directory
2. node.js (download and install https://nodejs.org/en/download/)
3. webdriver-manager - npm update webdriver-manager if webdriver manager not already 
installed or it prompts for andupdate,
install using npm install webdriver-manager -g
4. protractor - npm install  protactor -g


To run test cases:-
Go to the project root directory in command prompt, start selenium web 
driver with the following command:- 

=> webdriver-manager start

Open another command prompt, go to the project root directory and run test cases 
with the following command/s:-

protactor tests/conf.js - this will run UI and js test cases
by launching application in browser



Note:- There is scope for code optimization. That's pending due to shortage of time.
Some tests need to be completed as well. Work in progress as there were some installation
and config issues in setting up selenium web driver and protracor.
