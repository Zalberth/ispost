$(function() {
    //Need Front-End Automation Tools
	String.prototype.trim=function()
	{
	     return this.replace(/(^\s*)|(\s*$)/g,'');
	};
	   
	$('#joinis').on('click',joinIS);

	$('#centerZone .confirmBtn').on('click',confirmJOIN);

	$('#centerZone .nextTime').on('click',joinNextTime);

	$('#logoTitle').on('click',function() {
		 window.location.href='index.html';
	});

    function joinIS() {
    	// body...
    	$('#centerZone .recruit').css('display','block');
    	$('#centerZone .recruit').animate({height:"200px"});    	
    }
    function confirmJOIN() {
    	var regx = /^\d{11}$/;
    	if($('#urname').val().trim() === ''|| $('#urname').val().trim() ===''){
    		alert(constants.NO_NAME_CLASS);
    	}else {
    		if(regx.test($('#urphone').val())) {
    			var jsonData = $('#recruitForm').serializeJson(),
    			    doneFlag = {
    				state:'0',
    				count: 1
    			};
    			//progressbar,end in 2s as a default,check the flag.
    			$('#centerZone .recruit').progressbarIs(doneFlag);
    			//try to convert progressbarIs to a callback pattern
    			$.post('/recruit',jsonData,function(data) {
    					if(data.state === '1') {							
    					doneFlag.state = '1';
    					
    					}
    					else {
    					//
    					}
    				});
    		}else {
    			alert(constants.INVALIDPHONE);
    		}
    	}    	
    }

    function joinNextTime() {   	
    	$('#centerZone .recruit').animate({height:"0px"},function() {
    		$(this).css('display','none');
    	});
    }
});
