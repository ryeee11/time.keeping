const employeeNameElement = document.getElementById('employee-name');
const currentTimeElement = document.getElementById('currentTime');
const timeLogListElement = document.getElementById('time-log-list');
const logInButton = document.getElementById('log-in-button');
const breakOutButton = document.getElementById('break-out-button');
const breakInButton = document.getElementById('break-in-button');
const logOutButton = document.getElementById('log-out-button');

// Prompt user to enter teir name
const employeeName = prompt('Please enter your name: ');
employeeNameElement.textContent = `Employee: ${employeeName}`;

// Display the current time
setInterval(() => {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();
	currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
} ,1000);

// Log in button functionality
logInButton.addEventListener('click', () => {
	const timeEntry = new Date();
	const timeEntryListItem = document.createElement('li');
	timeEntryListItem.textContent = `Logged in at ${timeEntry.toLocaleTimeString()}`;
	timeLogListElement.appendChild(timeEntryListItem);
	logInButton.disabled = true;
	breakOutButton.disabled = false;
});

// Break out functionality
breakOutButton.addEventListener('click', () => {
	const timeEntry = new Date();
	const timeEntryListItem = document.createElement('li');
	timeEntryListItem.textContent = `Break out at ${timeEntry.toLocaleTimeString()}`;
	timeLogListElement.appendChild(timeEntryListItem);
	breakOutButton.disabled = true;
	breakInButton.disabled = false;
});

// Break in functionality
breakInButton.addEventListener('click', () => {
	const timeEntry = new Date();
	const timeEntryListItem = document.createElement('li');
	timeEntryListItem.textContent = `Break in in at ${timeEntry.toLocaleTimeString()}`;
	timeLogListElement.appendChild(timeEntryListItem);
	breakInButton.disabled = true;
	logOutButton.disabled = false;
});

// Log out functionality
logOutButton.addEventListener('click', () => {
	const timeEntry = new Date();
	const timeEntryListItem = document.createElement('li');
	timeEntryListItem.textContent = `Logged in at ${timeEntry.toLocaleTimeString()}`;
	timeLogListElement.appendChild(timeEntryListItem);
	logOutButton.disabled = true;
	logInButton.disabled = false;
	breakOutButton.disabled = true;
	breakInButton.disabled = true;
});
