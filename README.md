# week-5-work-day-scheduler-challenge

## Description

- The reason I made this webpage was to make it easier for employees to plan out their busy days from 9 in the morning to 5 in the afternoon, which is the typical working hours. To do this i created a work day scheduler which has a time slot for each hour of the day for users to enter in the tasks they want to complete during that hour and save each one. This way they can come back throughout the day to view their tasks to make sure they're done on time and the hour sections change colour every hour to indicate if each task is in the past (grey), present(red), future(green), which will help users stay on track.

## Process

- The first thing I did was copy and paste a timeblock div for every hour from 9 to 17 (9 am to 5pm). And i removed the class attributes of 'past/present/future'.

- I wrapped all the code I was going to write in a function using '$(document).ready(function(){})'. This ensures that the code in the function is only executed after the DOM is fully rendered by the browser.

- Then i added a click event listener to all the save buttons. In the event handler function i used the 'this' key word to target each element with the '.saveBtn' class attribute and then proceeded to traverse the DOM from there to target the value of the users input in each text area and the id attribute of each time block. Then i saved these values under the variables 'userTask' and 'timeBlockTime'(which tells you the hour of the task). I then saved them to local storage using the timeBlockTime variable as the key and the userTask as the value.
I then  added a new div at the top of the container div with the class 'notification'. I then dynamically set it's text content to display a message saying that your event was saved. I then used the setTimeOut function to remove the text content of that div after 2 seconds. So that message is displayed momentarily every time the save button is clicked.

- Next i created a function to set the background colour of all the 'description' text area elements. To do this I created a variable called 'currentHour' and used 'dayjs().hour()' to attain the value. Then I created a variable called 'timeBlockHour' and i attained this value by creating a .each() loop to iterate through each element with the '.time-block' class attribute. Then i traversed the DOM (using 'this') to get to the ID of each timeblock and used the '.split' property to split the id attribute string into an array of substrings using the hyphen - as a delimiter. [1] specifies that we want to keep the string at the index position 1 only. which in this case would be the hour number. And parseInt wraps that all up and converts the hour number string into an integer (number data value so it can be compared with the current hour).
Then i created an if statement that essentially says if the current hour is greater than the timeBlockHour then that text area should be grey (past class attribute), if the 2 hours are the same then remove the past class attribute and add the present one to make it red and if the current hour is less than the timeblock hour remove the past and present class attributes and add the future one to make it green.

- I then created a function to make sure the tasks/events users save in each text area remains displayed on the screen even when refreshed. So to do that i created a setTextArea function. In the function i created a .each() loop that iterates over each element with the class attribute of '.timeBlock'. i then declared 2 variables, the first was 'timeBlockId' which conained the id attribute of each time block element. The second was 'savedUserInput' to get this value i used the getItem() method with the argument being the 'timeBlockId' variabel. So this retrieves the saved task of each timeBlock element by looking for the key with the same 'name' as that element's id attribute. So then the if statement says that if the value of the text area is not there then make its value val(___) be the savedUserInput variable.

- And lastly i used dayjs().format() to display the current date in the header of the webpage.



## Webpage

- This is a screenshot of the deployed application:

![ screenshot of the webpage](./Assets/work%20day%20scheduler.png)


- This is a link to the deployed webpage:

