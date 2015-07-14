/* Dynamic Window Ajax Portfolio Content */
'use strict';

// Open project and set actual to active project.
var $actual = null;
$('.portfolio-element').click(function() {
  openProject($(this).attr('id'));
  $actual = $(this);
});

// Slide up project when a filter is applied.
$('.folio-btn').click(function() {
  $('.project-window').slideUp('slow');
});

function openProject(projectName) {
  $.ajax({
    url: projectName,
    success: function(data) {
      $('.project-content').html(data);
      $('.project-window').fadeIn('slow');
      closeProject();
      changeProject();
      $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 500);
    }
  });
}

function closeProject() {
  $('.close').click(function() {
    $('.project-window').slideUp('slow');
    $('html, body').animate({ scrollTop: $('#projects').offset().top }, 500);
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
    $('html, body').animate({ scrollTop: $('#project-show').offset().top }, 500);
  });
  $('.prev-button').click(function() {
    prevProject();
    $('html, body').animate({ scrollTop: $('#project-show').offset().top }, 500);
  });
}
