/*-----------------------------------------------------------------------------------
/*
/* Custom JS
/*
-----------------------------------------------------------------------------------*/
	  
/* Start Document */
jQuery(document).ready(function() {

/* ---------------------------------------------------------------------- */
/* Google Like Gallery
/* ---------------------------------------------------------------------- */	
		
	  Grid.init(); 	  

/*----------------------------------------------------*/
/*	Progress Bar
/*----------------------------------------------------*/

	jQuery('.block_levels .progress div').each(function() {
		var w = jQuery(this).attr('data-level');
		jQuery(this).animate({width : w + '%'}, 500);
	});

/* ---------------------------------------------------------------------- */
/* Owl Carousel
/* ---------------------------------------------------------------------- */	

    $(document).ready(function() {

      var time = 7; // time in seconds

      var $progressBar,
          $bar, 
          $elem, 
          isPause, 
          tick,
          percentTime;

        //Init the carousel
        $("#post-slider").owlCarousel({
          slideSpeed : 500,
          paginationSpeed : 500,
          singleItem : true,
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging
        });

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem){
          $elem = elem;
          //build progress bar elements
          buildProgressBar();
          //start counting
          start();
        }

        //create div#progressBar and div#bar then prepend to $("#owl-demo")
        function buildProgressBar(){
          $progressBar = $("<div>",{
            id:"progressBar"
          });
          $bar = $("<div>",{
            id:"bar"
          });
          $progressBar.append($bar).prependTo($elem);
        }

        function start() {
          //reset timer
          percentTime = 0;
          isPause = false;
          //run interval every 0.01 second
          tick = setInterval(interval, 10);
        };

        function interval() {
          if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
               width: percentTime+"%"
             });
            //if percentTime is equal or greater than 100
            if(percentTime >= 100){
              //slide to next item 
              $elem.trigger('owl.next')
            }
          }
        }

        //pause while dragging 
        function pauseOnDragging(){
          isPause = true;
        }

        //moved callback
        function moved(){
          //clear interval
          clearTimeout(tick);
          //start again
          start();
        }

        //uncomment this to make pause on mouseover 
        // $elem.on('mouseover',function(){
        //   isPause = true;
        // })
        // $elem.on('mouseout',function(){
        //   isPause = false;
        // })
    });	

/*----------------------------------------------------*/
/*	Typer
/*----------------------------------------------------*/	
	
		$(function () {
		  $('[data-typer-targets]').typer();
		});
		
/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/
		var btnUp = $('<div/>', {'class':'btn-up'});
		btnUp.appendTo('body');

		$(document)
			.on('click', '.btn-up', function() {			
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});

		$(window)	
			.on('scroll', function() {			
				if ($(this).scrollTop() > 200)
					$('.btn-up').addClass('active');
				else
					$('.btn-up').removeClass('active');
			});

/* End Document */
});