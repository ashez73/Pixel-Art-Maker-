// submit table dimensions
$(document).ready(function() {
  $("#submitButton").click(makeGrid);
});

function makeGrid() {
  const y = $("#input_height").val();
  const x = $("#input_width").val();

  // empty old table

  $("#pixel_canvas").empty();

  // show over -the-table text and add border

  $(".invis").css("display", "inline");
  $("table").css("border", "6px solid #333");

  //fill the  table with cells

  for (let z = 1; z <= y; z++) {
    $("#pixel_canvas").append("<tr></tr>");
    for (let w = 1; w <= x; w++) {
      $("tr:last").append("<td></td>");
    }
  }
  //listen
  /*prevent mouse drag from interfering with our further
  mouseenter detection and right mouse button from displaying menu*/

  $("td").contextmenu(function(event) {
    event.preventDefault();
  });
  $("td").mousedown(function(event) {
    event.preventDefault();

    //detecting which button was pressed

    const detect = event.which;
    let paint='';
    //if the left one paint if right erase -paint with bg color
    paint = detect === 1 ? $("#colorPicker").val() :"#ddd";

    //paint immediately when button pressed

    $(this).css("background-color", paint);

    //extend paint with mouse movement

    $("td").mouseenter(function() {
      $(this).css("background-color", paint);

      //when mouse is released stop painting

      $("td").mouseup(function() {
        $("td").off("mouseenter");
      });
    });
  });
}
