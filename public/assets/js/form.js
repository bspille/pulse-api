// Profile Form

$(function () {
  var showClass = 'show';

  $('input').on('checkval', function () {
    var label = $(this).prev('label');
    if (this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});

//Add Contact Button

$(document).ready(function () {
  var contacts = $("#contacts");

  $("#add-contact-button").click(function (e) { //adds additional contact field
    $(contacts).append('<div class="additional-contact"><div class="floated-label-wrapper"><label for="full-name">Full name</label>\
          <input type="text" id="full-name" name="full name input" placeholder="Full name"></div>\
          <div class="floated-label-wrapper"><label for="tel">Phone #</label>\
          <input type="tel" id="tel" name="tel input" placeholder="Phone number">\
          <button class="button-hover-default button remove_field"><span>Remove contact</span><i class="fa fa-user-times"></i></button</div></div>');
  });
  $(contacts).on("click", ".remove_field", function (e) { //removes additional contact field
    e.preventDefault();
    $(this).closest('.additional-contact').remove();
  });
});


/*<a href="#" class="button app-button remove_field"><i class="fa fa-user-times fa-lg" aria-hidden="true"></i> Remove</a>\*/