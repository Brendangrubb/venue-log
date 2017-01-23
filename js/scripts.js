// business logic



// var venue = {
//   venue-name:
//   neighbourhood:
//   genre:
//   rating:
//   experience:
// }

function VenueMaker (venueName, neighbourhood, genre, rating, experience, upcomingEvent, upcomingEventDate) {
  this.venueName = venueName;
  this.neighbourhood = neighbourhood;
  this.genre = genre;
  this.rating = rating;
  this.experience = experience;
  this.upcomingEvent = upcomingEvent;
  this.upcomingEventDate = upcomingEventDate;
}

var vNInput;
var nInput;
var gInput;
var rInput;
var eInput;


//user interface logic
$(document).ready(function() {

  // vNInput = prompt("venue name:");
  // nInput = prompt("neighbourhood:");
  // gInput = prompt("genre:");
  // rInput = prompt("rating:");
  // eInput = prompt("experience:")
  //
  //
  $("#venue-form").submit(function(event) {
    event.preventDefault();

    vNInput = $("#venue-name").val();
    nInput = $("#neighbourhood").val();
    gInput = $("#genres").val();
    rInput = $("input:radio[name=venue-rating]:checked").val();
    eInput = $("#experience").val();
    eVInput = $("#upcoming-event").val();
    eVDInput = $("#event-date").val();

    var newVenue = new VenueMaker(vNInput, nInput, gInput, rInput, eInput, eVInput, eVDInput);

    $("#left-column").append("<li class='venue-link'>" + newVenue.venueName + "</li>");

    $(".venue-link").last().click(function() {
      $("#object-column").show();
      $("#venue-title h2").text(newVenue.venueName);
      $("#nOutput").append(newVenue.neighbourhood);
      $("#gOutput").append(newVenue.genre);
      $("#rOutput").append(newVenue.rating);
      $("#eVOutput").append(newVenue.upcomingEvent);
      $("#eVDOutput").append(newVenue.upcomingEventDate);

      $("#display-column").text(newVenue.experience);
    });

  });

});


// $("input: checkbox[name = venue-rating]:checked").each(function() {
// });
