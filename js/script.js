jQuery("#toggle").on("click", function () {
  jQuery(".toggle-list").slideToggle();
});

jQuery(function () {
  const pagetop = jQuery("#js-pagetop");
  pagetop.hide();
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 80) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    jQuery("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

jQuery(function() {
  jQuery(".js-modal-open").each(function() {
    jQuery(this).on("click", function() {
      const target = jQuery(this).data("target");
      const modal = document.getElementById(target);
      jQuery(modal).fadeIn();
      return false;
    });
  });
  jQuery(".js-modal-close").on("click", function() {
    jQuery(".js-modal").fadeOut();
    return false;
  });
});