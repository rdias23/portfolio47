$(document).ready(function() {

	//rotation speed and timer
	var speed = 5000;
	var run = setInterval('rotate()', speed);
	
	//grab the width and calculate left value
	var item_width = $('#slides li:eq(1)').outerWidth(); 
	var left_value = item_width * (-1); 
        
    //move the last item before first item, just in case user click prev button
	$('#slides li:first').before($('#slides li:last'));
	
	//set the default item to the correct position 
	$('#slides ul').css({'left' : left_value});

    //if user clicked on prev button
	$('#prev').click(function() {

		//get the right position            
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//slide the item            
		$('#slides ul').animate({'left' : left_indent}, 200,function(){    

            //move the last item and put it as first item            	
			$('#slides li:first').before($('#slides li:last'));
		
			if($('#slides li:eq(1)').attr("id") == "trivia_link")
                        {
                                $("#trivia_info").toggle("slide");
                                $("#wishlist_info").toggle("slide");
                        }
                        if($('#slides li:eq(1)').attr("id") == "wishlist_link")
                        {
                                $("#wishlist_info").toggle("slide");
                       		$("#art_info").toggle("slide"); 
			}
                        if($('#slides li:eq(1)').attr("id") == "art_link")
                        {
				$("#art_info").toggle("slide");
				$("#trivia_info").toggle("slide");
                        }

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});
			$('#slides li:eq(1)').height(300).width(300);
                        $('#slides li:eq(1) img').height(300).width(300);
                        $('#slides li:eq(2)').height(250).width(250);
                        $('#slides li:eq(2) img').height(250).width(250);
                        $('#slides li:eq(0)').height(250).width(250);
                        $('#slides li:eq(0) img').height(250).width(250);		
		});

		//cancel the link behavior            
		return false;
            
	});

 
    //if user clicked on next button
	$('#next').click(function() {
		
		//get the right position
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		
		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 200, function () {
            
            //move the first item and put it as last item
			$('#slides li:last').after($('#slides li:first'));                 	


			if($('#slides li:eq(1)').attr("id") == "trivia_link")
                        {
                                $("#trivia_info").toggle("slide");
				$("#art_info").toggle("slide");
                        }
                        if($('#slides li:eq(1)').attr("id") == "wishlist_link")
			{
				$("#wishlist_info").toggle("slide");
				$("#trivia_info").toggle("slide");
			}
			if($('#slides li:eq(1)').attr("id") == "art_link")
			{
				$("#art_info").toggle("slide");
                                $("#wishlist_info").toggle("slide");
                        }
			
			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});
			$('#slides li:eq(1)').height(300).width(300);
			$('#slides li:eq(1) img').height(300).width(300);
			$('#slides li:eq(2)').height(250).width(250);
			$('#slides li:eq(2) img').height(250).width(250);
			$('#slides li:eq(0)').height(250).width(250);
			$('#slides li:eq(0) img').height(250).width(250);	
		});

		//cancel the link behavior
		return false;
		
	});        
	
	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('#slides, #buttons').hover(
		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
        
});

//a simple function to click next link
//a timer will call this function, and the rotation will begin :)  
function rotate() {
	$('#next').click();
}

