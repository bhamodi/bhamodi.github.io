"use strict";

$(window).load(function() {
  // Navigate to section or project specified in URL hash.
  var $target = window.location.hash;
  if ($target.length) {
    if ($target.indexOf('project-') >= 0) {
      if (parseInt($target.slice(-2)) <= 10) {
        $('html, body').animate({scrollTop: $('#project-show').offset().top}, 1000).promise().done(function() {
          // Open project content if a user attempts to go directly to a project.
          document.getElementById($target.slice(1)).click();
        });
      } else {
        $('html, body').animate({scrollTop: $('#projects').offset().top}, 1000).promise().done(function() {
          $('html, body').animate({scrollTop: $('#projects').offset().top}, 1000);
        });
      }
    } else if (['#home', '#skills', '#stats', '#experience', '#projects', '#contact'].indexOf($target) >= 0) {
      $('html, body').animate({scrollTop: $($target).offset().top}, 1000).promise().done(function() {
        $('html, body').animate({scrollTop: $($target).offset().top}, 1000);
      });
    }
  }

  $('.preloader').fadeOut(3000);
});

$(document).ready(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Hide player and display a background picture instead of a video if on mobile.
    $('#home').css('display', 'none');
    $('#mobile-background').css({'background-image':'url(/img/mobile_bg.jpg)', 'display':'block'});
  } else {
    $('.player').YTPlayer();
  }

  /* Menu Headers */
  $('.header').sticky({topSpacing: 0});
  // Navigation handler.
  $('a[href*=#]').click(function() {
    var $target = $(this.hash);
    if ($target.length) {
      var targetOffset = $target.offset().top - 50;
      $('html, body').animate({scrollTop: targetOffset}, 1000).promise().done(function() {
        if (history.pushState) {
          history.pushState(null, null, $target.selector);
        } else {
          location.hash = $target.selector;
        }
      });
      return false;
    }
  });

  // Hash handling when the hash is changed.
  $(window).on('hashchange', function() {
    var $target = window.location.hash;
    if ($target.length) {
      if ($target.indexOf('project-') >= 0) {
        document.getElementById($target.slice(1)).click();
      }
    }
  });

  /* Validation */
  $('.contactForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 20,
      },
    },
  });

  /* Services RollOver Info */
  function loadServices() {
    $('.skill-icon').mouseenter(function() {
      $(this).parent().find('.skill-hover').addClass('visible');
    });
    $('.skill-icon').mouseleave(function() {
      $(this).parent().find('.skill-hover').removeClass('visible');
    });
  }

  /* Banner */
  function loadTall() {
    $('#home').css('height', $(window).height());
  }

  /* Jump Menu */
  function loadJump() {
    $('.jump-menu').click(function() {
      if ($('#navbar').hasClass('active')) {
        $('#navbar').removeClass('active');
      } else {
        $('#navbar').addClass('active');
      }
    });
    $('#navbar ul li a').click(function() {
      $('#navbar').removeClass('active');
    });
  }

  /* Parallax */
  function move(section){
    $(section).each(function() {
      if ($(this).attr('class') === 'parallax') {
        $(this).css('background-position', '0 ' + $(window).scrollTop() / 3 + 'px');
      } else {
        $(this).css('background-position', '0 ' + (($(window).scrollTop() + $(window).height() - $(this).attr('yPos')) / 3 + $(this).height()) + 'px');
      }
    });
  }

  /* Counter */
  $.fn.countTo = function(options) {
    // merge the default plug-in settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});
    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
      increment = (options.to - options.from) / loops;

    return $(this).each(function() {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(Math.round(value).toLocaleString('en-US',{useGrouping:true}));

        if (typeof(options.onUpdate) === 'function') {
          options.onUpdate.call(_this, value);
        }
        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;
          if (typeof(options.onComplete) === 'function') {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

  /* Main Menu Section Selector */
  $("#mobile-nav > li > a").first().click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
    return false;
  });

  $(".logo").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
    return false;
  });

  $('#nav').onePageNav({
    currentClass: 'current',
  });

  $('#mobile-nav').onePageNav({
    currentClass: 'mobile-current',
  });

  /* Isotope/Portfolio Filter PlugIn */
  var container = $('#portfolio-grid');
  container.isotope({
    animationEngine: 'best-available',
    animationOptions: {
      duration: 200,
      queue: false
    },
    layoutMode: 'fitRows'
  });
  // filter items when filter link is clicked
  $('#filters a').click(function() {
    $('#filters a').removeClass('active');
    $(this).addClass('active');
    container.isotope({ filter: $(this).attr('data-option-value') });
    setProjects();
  });

  function splitColumns() {
    var winWidth = $(window).width();
    var columnNumb = 1;
    if (winWidth > 1250) {
      columnNumb = 5;
    } else if (winWidth > 1000) {
      columnNumb = 4;
    } else if (winWidth > 750) {
      columnNumb = 3;
    } else if (winWidth > 400) {
      columnNumb = 2;
    }
    return columnNumb;
  }

  function setColumns() {
    var winWidth = $(window).width(),
      columnNumb = splitColumns(),
      postWidth = Math.floor(winWidth / columnNumb),
      postHeight = Math.floor(postWidth * 0.75);
    container.find('.element').each(function() {
      $(this).css({
        width: postWidth + 'px',
        height: postHeight + 'px'
      });
      var _height = ($(this).find('div').height() / 2) - 49;
      $(this).find('div > span').css({
        margin: _height + 'px 20px'
      });
    });
  }

  function setProjects() {
    setColumns();
    container.isotope('reLayout');
  }

  function loadIsotope() {
    container.imagesLoaded(function() {
      setProjects();
    });
    setProjects();
  }

  /* Call HoverDir Portfolio RollOver */
  function loadHoverDir() {
    $('#portfolio-grid > .portfolio-element').each(function() {
      $(this).hoverdir({
        hoverDelay: 50
      });
    });
  }

  /* Dynamic Window Ajax Portfolio Content */
  // Open project and set actual to active project.
  var $actual = null;
  $('.portfolio-element').click(function() {
    openProject($(this).attr('id') + '.html');
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
        $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 500).promise().done(function() {
          if (history.pushState) {
            history.pushState(null, null, '#' + projectName.split('.')[0]);
          } else {
            location.hash = '#' + projectName.split('.'[0]);
          }
        });
      }
    });
  }

  function closeProject() {
    $('.close').click(function() {
      $('.project-window').slideUp('slow');
      $('html, body').animate({scrollTop: $('#projects').offset().top}, 500).promise().done(function() {
        if (history.pushState) {
          history.pushState(null, null, '#projects');
        } else {
          location.hash = '#projects';
        }
      });
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
      openProject($actual.attr('id') + '.html');
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
      openProject($actual.attr('id') + '.html');
    }
  }

  function changeProject() {
    $('.next-button').click(function() {
      nextProject();
      $('html, body').animate({scrollTop: $('#project-show').offset().top}, 500);
    });

    $('.prev-button').click(function() {
      prevProject();
      $('html, body').animate({scrollTop: $('#project-show').offset().top}, 500);
    });
  }

  /* Scroll Parallax */
  $(window).on('scroll', function() {
    move('.paraOn'); // move the background images in relation to the movement of the scrollbar
    /* Scroll to top button */
    if ($(this).scrollTop() > $(window).height() - 1) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  /* Resize */
  function resizedw() {
    setProjects();
    loadTall();
  }

  var doit;
  $(window).on('resize', function() {
    clearTimeout(doit);
    doit = setTimeout(resizedw, 1000);
  });

  /* Inview */
  function loadInview() {
    /* Parallax */
    $('.parallax').on('inview', function(event, visible) {
      if (visible === true) {
        // element is now visible in the viewport
        var offset = $(this).offset();
        $(this).addClass('paraOn').attr('yPos', offset.top);
      } else {
        // element has gone out of viewport
        $(this).removeClass('paraOn');
      }
    });

    /* Stats Counter */
    var count = 0;
    var dataValue;
    $('.stat-counter').on('inview', function(event, visible) {
      if (visible === true && count === 0) {
        count++;
        $('.stat-counter').each(function() {
          dataValue = $(this).attr('data-value');
          $(this).find('.stat-count').delay(6000).countTo({
            from: 0,
            to: dataValue,
            speed: 3000,
            refreshInterval: 50
          });
        });
      }
    });

    /* Fade In Elements */
    $('.hideme').on('inview', function(event, visible) {
      if (visible === true) {
        $(this).removeClass('hideme');
      }
    });

    /* Sliding Fade In Elements */
    $('.horizontal-line').on('inview', function(event, visible) {
      if (visible === true) {
        $('.mobile-parallax-image').removeClass('hideme-slide');
      }
    });

    /* Work Experience */
    $('.work-exp-left-0').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-left-0').addClass('animated fadeInRight');
        $('.work-exp-left-0').removeClass('hideme');
      }
    });

    $('.work-exp-right-0').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-right-0').addClass('animated fadeInLeft');
        $('.work-exp-right-0').removeClass('hideme');
      }
    });

    $('.work-exp-left-1').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-left-1').addClass('animated fadeInRight');
        $('.work-exp-left-1').removeClass('hideme');
      }
    });

    $('.work-exp-right-1').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-right-1').addClass('animated fadeInLeft');
        $('.work-exp-right-1').removeClass('hideme');
      }
    });

    $('.work-exp-left-2').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-left-2').addClass('animated fadeInRight');
        $('.work-exp-left-2').removeClass('hideme');
      }
    });

    $('.work-exp-right-2').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-right-2').addClass('animated fadeInLeft');
        $('.work-exp-right-2').removeClass('hideme');
      }
    });

    $('.work-exp-left-3').on('inview', function(event, visible) {
      if (visible === true) {
        $('.work-exp-left-3').addClass('animated fadeInRight');
        $('.work-exp-left-3').removeClass('hideme');
      }
    });
  }

  /* Load Functions */
  loadServices();
  loadJump();
  loadInview();
  loadIsotope();
  loadHoverDir();
});
