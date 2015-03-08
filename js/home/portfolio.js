/* Dynamic Window Ajax Portfolio Content */
'use strict';

var $actual = null;
var opened = false;
$('.portfolio-element').click(function() {
  openProject($(this).attr('id'));
  $actual = $(this);
});
$('.folio-btn').click(function() {
  $('.project-window').slideUp('slow');
  opened = false;
});

function openProject(projectName) {
  $.ajax({
    url: projectName,
    success: function(data) {
      $('.project-content').html(data);
      $('.project-content').hide(0);
      $('.project-window').hide(0);
      closeProject();
      changeProject();

      $('html, body').animate({ scrollTop: $('#anchor5').offset().top }, 300, function() {
        $('.project-window').show(0);
        $('.project-window').animate({ height:900 }, 500, function() {
          $('.project-window').css('height', 'auto');
          $('.project-content').fadeIn('slow');
        });
      });
    }
  });
}

function closeProject() {
  $('.close').click(function() {
    $('.project-window').slideUp('slow');
    $('html, body').animate({ scrollTop: $('#anchor5').offset().top }, 1000);
    opened = false;
  });
}

function nextProject() {
  if ($actual.next().hasClass('final')) {
    $actual = $($('.portfolioBase').next());
  } else {
    $actual = $($actual.next());
  }
  if ($actual.hasClass('isotope-hidden')) {
    nextProject();
  } else {
    openProject($actual.attr('id'));
  }
}

function prevProject() {
  if ($actual.prev().hasClass('portfolioBase')) {
    $actual = $($('.final').prev());
  } else {
    $actual = $($actual.prev());
  }
  if ($actual.hasClass('isotope-hidden')) {
    prevProject();
  } else {
    openProject($actual.attr('id'));
  }
}

function changeProject() {
  $('.next-button').click(function() {
    nextProject();
    $('html, body').animate({ scrollTop: $('#project-show').offset().top }, 1000);
  });
  $('.prev-button').click(function() {
    prevProject();
    $('html, body').animate({ scrollTop: $('#project-show').offset().top }, 1000);
  });
}
