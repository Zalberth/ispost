$(function() {
	//Need Front-End Automation Tools
	//Load Data from slotlist.json
	String.prototype.trim=function()
	{
	     return this.replace(/(^\s*)|(\s*$)/g,'');
	};
    
    $.ajax({
		type:'get',
		contentType: 'application/json; charset=utf-8',
		dataType:'json',
		url:'json/slotlist.json',
		success:dealSuccess,
		error:dealFailure
	});
    $('#joinis').on('click',joinIS);
    $('#displayArea .confirmBtn').on('click',confirmJOIN);
    $('#displayArea .nextTime').on('click',joinNextTime);
    $('#logoTitle').on('click',function() {
    	 window.location.href='index.html';
    });

    function dealSuccess(slotlist) {
    				var showList ='',
    				    timeoutId = 0;

    				for( var i = 0,len = slotlist.list.length; i < len; i++ ) {
    					showList += '<li data-filesrc="'+slotlist.list[i].filesrc+'" data-explains="'+slotlist.list[i].explains+'">'+slotlist.list[i].number+'</li>';
    				}

    				$('#hublists ul').append(showList);	

    				//Bind Events
    				$('#hublists li').on('mouseenter',function() {
    				//	console.log('isLeaving value:'+isLeaving);
    					$(this).css('font-size','16px');
    					var listObj = $(this),
    					    minSize = parseInt(listObj.css('font-size')),
    					    MAXFONTSIZE = 23,
    					    INTERVAL = 20;
    					$('.banLine').addClass('turnGreen');
    					$(this).addClass('slightMoveup');

    	                function fontSizeZoomOut() { //产生字体放大动画
    	                //	console.log(listObj.css('font-size'));    
    	                	if(parseInt(listObj.css('font-size')) < MAXFONTSIZE) {
    	                      	listObj.css('font-size',(parseInt(listObj.css('font-size'))+1)+'px');
    	                	   	timeoutId = setTimeout(fontSizeZoomOut,INTERVAL);
    	                	}                                   
    	                }
    	                fontSizeZoomOut();   					
    				});
    				$('#hublists li').on('mouseleave',mouseLeaveEvent);	
    				$('#hublists li').on('click',mouseClickEvent); 
    	            function mouseLeaveEvent() {
    	            	// body...
    	            	clearTimeout(timeoutId);
    					$('.banLine').removeClass('turnGreen');
    					$(this).removeClass('slightMoveup');
    					$(this).css('font-size','16px');
    	            }
    	            function mouseClickEvent() {
    	            	    var self = this;
    	            		$('.picZone img').attr('src',$(this).data('filesrc'));
    	            		$('.explains p').stop().animate({left:'+='+$('.explains').css('width')},200,function() {
    	            			// body...
    	            				$('.explains').html('<p>'+$(self).data('explains')+'</p>');
    	            	  			$('.explains p').stop().animate({left:'40px'},400,function() {
    	            			// body...
    	            			  		  $(this).stop().animate({left:'0px'},100);
    	            				});
    	            		});
    	            					
    	            		$('li.selected').removeClass('selected');
    	            		$(this).addClass('selected');
    	            }    				   	
    }

    function dealFailure(XMLHttpRequest, textStatus, errorThrown) {   	
	           alert("暂时没有上线的格子！");
    }

	function joinIS() {
		// body...
		$('#displayArea .recruit').css('display','block');
		$('#displayArea .recruit').animate({height:"80px"});		
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

				$('#displayArea .recruit').progressbarIs(doneFlag);
				$.post('/recruit',jsonData,function(data) {
						if(data.state === '1') {				
						doneFlag.state = '1';
						
						}
						else {
						alert(constants.SYSTEM_BUSY);
						}
					});
			}else {
				alert(constants.INVALIDPHONE);
			}
		}		
	}
	
	function joinNextTime() {
		// body...
		$('#displayArea .recruit').animate({height:"0px"},function() {
			$(this).css('display','none');
		});		
	}	
});