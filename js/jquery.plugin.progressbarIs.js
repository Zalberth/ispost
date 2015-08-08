(function($){  
        $.fn.progressbarIs=function(doneFlag){  //translate form data to json format
            var masker = '<div class="progressbarIs"></div><div class="mask4progress"></div>';
            this.append(masker);
            var self = this;
            var delta = parseInt(this.css('width'))/10 + 'px';  
            progressCyle(doneFlag,delta);
            function progressCyle(doneFlag,delta) { //进度条动画
            		$('.progressbarIs').animate({width:'+='+delta},1000,function() {
            			if(doneFlag.state === '1' && parseInt($(this).css("width")) <= parseInt(self.css('width')))		
            			  {
            			  	var littleOver = (parseInt(self.css('width'))+5)+'px';
            			  	$(this).animate({width:littleOver},function() {
            		
            			  		alert("报名成功！");
            			  		$('.progressbarIs').remove();
            			  		$('.mask4progress').remove();
            			  		self.find('input').val('');
            			  	});
            			  	
            			  }
            			else if(doneFlag.state === '0' && parseInt($(this).css("width")) < parseInt(self.css('width')))
            			  {
                            doneFlag.count++;
                            console.log("doneFlag.count:"+doneFlag.count);
                            if(doneFlag.count < 8)
            			  	progressCyle(doneFlag,delta);
            			    else {
            			    	alert('暂时无法报名！');
            			    	$('.progressbarIs').remove();
            			  		$('.mask4progress').remove();
            			    }
            			  }

            		});
            };
            return this;
        };  
 })(jQuery); 