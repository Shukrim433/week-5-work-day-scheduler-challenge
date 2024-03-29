// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $('.saveBtn').on('click' , function(){
      var userTask = $(this).siblings('.description').val()
      var timeBlockTime = $(this).parent().attr('id')

      localStorage.setItem(timeBlockTime , userTask)

      $('.notification').text('your event was saved')

      setTimeout(function(){
        $('.notification').text('')
      } , 2000)
    })

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    function setColour(){

      var currentHour = dayjs().hour()

      $('.time-block').each(function(){
       
        var timeBlockHour = parseInt($(this).attr('id').split('-')[1])//takes the timeBlockTime string and splits it into an array of substrings using the hyphen - as a delimiter. [1] specifies that we want to keep only the second part of the split string and it returns this second part as an array element.
        //parseInt converts the second part of the split string (the  hour number at index 1 of the array) into an integer.
  
        if (currentHour > timeBlockHour){
          $(this).removeClass('future present');
          $(this).addClass('past')
        }
        else if (currentHour === timeBlockHour){
          $(this).removeClass('past future');
          $(this).addClass('present')
        }
        else{
          $(this).removeClass('past present');
          $(this).addClass('future')
        }
      })
    }
    setColour()


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // So when the page reloads the users input stays on the screen (doesnt vanish)

    function setTextArea(){

      $('.time-block').each(function(){ // this line is basically saying it will apply this 'function(){})' to every element with that css selector(.timeblock div)
        var timeBlockId = $(this).attr('id') // selects the id attribute of each timeblock div
        var savedUserInput = localStorage.getItem(timeBlockId) // uses the id (as the key) to retrieve the corresponding saved user input from localStorage

        if (savedUserInput !== null){ // so if there's nothing in the local storage for a particular timeblock then it just remains empty
          $(this).children('.description').val(savedUserInput)
        }
      })
      
    }
    setTextArea()


    // TODO: Add code to display the current date in the header of the page.
    
    function displayDateInHeader(){
      var today = dayjs().format('dddd, D MMMM, YYYY')
      $('#currentDay').text(today)
      
    }
    displayDateInHeader()
  });

  
})


