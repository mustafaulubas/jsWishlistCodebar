/* Exercise 1: Wish list */

function addToList() {
     var item = $("#item").val();
     if (item !== "") {
          $('#items').append('<li>' + item + '<span class="label pending">Pending</span></li >');
          $("#item").focus();
          $("#item").val("");
          updateCount();
     }
}

function updateCount() {
     var num_pending = $(".pending").length;
     var num_completed = $(".completed").length;
     $(".total").text('Pending: ' + num_pending + ' Completed: ' + num_completed);
}

$(document).on('click', '#add-to-list', function () {
     addToList();
});

$(document).on('click', '.pending', function () {
     var li_node = $(this).parent();
     li_node.append("<span class='label success'>Done!</span>");
     $(this).remove();
     li_node.addClass('completed');
     updateCount();
});

$(document).on('keypress', '#item', function (event) {
     if (event.keyCode === 13) {
          addToList();
     }
});


/**
 * Adds 2 to a number
 * @param  ınt a The number to add 2 to
 * @return ınt   The number that has had 2 added to ıt
 */
function test(a) {
     return a + 2;
}
