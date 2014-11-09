"use strict";

$(window).load(function() {
	$('.preloader').fadeOut('slow');
});

$(document).ready(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		// Hide player and display a background picture instead of a video.
		$('#home').css('display','none');
		$('#homedevice').css('display','block');
	} else {
		$(".player").mb_YTPlayer();
	}

	$('body').addClass('green');
	$(".header").sticky({ topSpacing: 0 });

	/* Menu Anchors */
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset-75}, 2000);
				return false;
			}
		}
	});

	/*Validation*/	
	$("#contact").validate({
		submitHandler: function(form) {
			$(form).ajaxSubmit();
			$('.formSent').show();
		}
	});		
	
	/* Services RollOver Info */
	function loadServices() {
		$(".sl-ico").mouseenter(function() {
			$(this).parent().find(".s-roll").addClass('visible');
		});
		$(".sl-ico").mouseleave(function() {
			$(this).parent().find(".s-roll").removeClass('visible');
		});
	}
	
	/* Banner */
	function loadTall() {
		var altura = $(window).height();
		$('#home').css('height',altura);
	}
	
	/* Jump Menu */
	function loadJump() {
		$('.jump-menu').click(function() {
			if ($('#nav2').hasClass('active')) {
				$('#nav2').removeClass('active');
			}
			else {
				$('#nav2').addClass('active');
			}
		});
		$('#nav2 ul li a').click(function() {
			$('#nav2').removeClass('active');
		});
	}
	
	/* Scroll Up */ 
	$('.scrollup').click(function() {
		$("html,body").animate({ scrollTop: 0 }, 3000);
		return false;
	});
	
	/* Parallax */
	function Move(seccio){
		$(seccio).each(function() {
			if ($(this).attr('class')==='parallax') {
				$(this).css('background-position', '0 '+$(window).scrollTop()/3+'px');
			} else {
				$(this).css('background-position', '0 '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');
			}
		});
	}
	
	/* Counter */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
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
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }
                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

	/* Slider AutoChanging Title */
	function loadTitleAnimated() {
		var myInterval;
		var contador = 1;
		var myFunc = function() {
			var cur = $('.main-title ul li').length;
			//alert(contador);
			if (cur == contador) {
					$('.main-title ul li.t-current').removeClass('t-current');
					$('.main-title ul li').first().addClass('t-current');
					contador = 1;
				} else {
					contador++;
					$('.main-title ul li.t-current').removeClass('t-current').next().addClass('t-current');
				}
		};
		myInterval = setInterval(myFunc, 5000); // Set Animation Interval in Miliseconds
	}

	/* Main Menu Section Selector */
	function loadMenuSelector() {
		$('#nav').onePageNav({
			begin: function() {
				console.log('start');
			},
			end: function() {
				console.log('stop');
			},
			scrollOffset: 75 // header Height
		});
	}

	/* Isotope/ Portfolio Filter PlugIn */    
	var container = $('#i-portfolio');	
	container.isotope({
		animationEngine : 'best-available',
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
		var selector = $(this).attr('data-option-value');
		container.isotope({ filter: selector });
		setProjects();		
		return false;
	});
	
	function splitColumns() { 
		var winWidth = $(window).width(), 
			columnNumb = 1;
		if (winWidth > 1200) {
			columnNumb = 4;
		} else if (winWidth > 900) {
			columnNumb = 3;
		} else if (winWidth > 600) {
			columnNumb = 2;
		} else if (winWidth > 300) {
			columnNumb = 1;
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
				width : postWidth + 'px',
				height : postHeight + 'px'
			});
			var marhei = ($(this).find('div').height()/2)-49;
			$(this).find('div > span').css({ 
				margin : marhei+'px 20px' 
			});
		});
	}
	function setProjects() { 
		setColumns();
		container.isotope('reLayout');
	}
	
	function loadIsotope() {
		container.imagesLoaded(function () {setProjects();});
		setProjects();
	}
	
	/* Call HoverDir Portfolio RollOver */
	function loadHoverDir() {
		$('#i-portfolio > .ch-grid').each(function() {
			$(this).hoverdir({
				hoverDelay : 5
			});
		});
	}
	
	/* Logos/Company Carousel */
	function loadLogos() {
		$('#logos').carouFredSel({
			responsive: true,
			width: '100%',
			scroll: 1,
			items: {
				width: 400,
			//	height: '30%',	//	optionally resize item-height
				visible: {
					min: 1,
					max: 6
				}
			}
		});	
	}
	
	/* Scroll */
	$(window).bind("scroll", function() {
		/* Parallax */
		Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
		
		/* Scroll Top Btn */
		if ($(this).scrollTop() > $(window).height()-1) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	/* Resize */
	function resizedw() {
		// Haven't resized in 500ms!
		setProjects();
		loadTall();
	}
	
	var doit;
	$(window).bind('resize', function () { 
		clearTimeout(doit);
		doit = setTimeout(resizedw, 1000);
	});		
	
	/* Inview */
	function loadInview() {
		/* Parallax */
		$('.parallax').bind('inview', function (event, visible) {
			if (visible === true) {
			// element is now visible in the viewport
			var offset = $(this).offset();
			$(this).addClass('paraOn').attr('yPos',offset.top);
			} else {
			// element has gone out of viewport
			$(this).removeClass('paraOn');
			}
		});
		
		/* Fade In Elements */
		$('.hideme').bind('inview', function (event, visible) {
			if (visible === true) {
				var offset = $(this).offset();
				$(this).removeClass('hideme');
			}
		});
		$('.p-image-02').bind('inview', function (event, visible) {
			if (visible === true) {
				$('.dontHide').removeClass('hideme-slide');
			}
		});
		$('.newtr').bind('inview', function (event, visible) {
			if (visible === true) {
				$('.dontHide').removeClass('hideme-slide2');
			}
		});
		
		/* Facts Counter */
		var count=0;
		var dataperc;
		//mobile counter
		$('.milestone-counter').bind('inview', function (event, visible) {
			if (visible === true && count === 0) {
			// element is now visible in the viewport
			count++;
			$('.milestone-counter').each(function() {
				dataperc = $(this).attr('data-perc'),
				$(this).find('.milestone-count').delay(6000).countTo({
					from: 0,
					to: dataperc,
					speed: 2500,
					refreshInterval: 80
				});
			});
			} else {
				// element has gone out of viewport
			}
		});
	}
	
	/* Load Functions */
	loadServices();
	loadJump();
	
	if ($(window).width()>974) {	
		loadInview();
	} else {
		$('.milestone-count.highlight').each(function() {
			$(this).html($(this).parent().attr('data-perc'));
		});
	}
	loadTitleAnimated();
	loadMenuSelector();
	loadIsotope();
	loadHoverDir();
	loadLogos();
});