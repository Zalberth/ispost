var constants={NO_NAME_CLASS:"亲，你的姓名或者班级还没有告诉我们",INVALIDPHONE:"请输入正确的11位手机号码，如：18866668888",SYSTEM_BUSY:"系统正忙，请稍后再试"};!function(s){s.fn.serializeJson=function(){{var t={},e=this.serializeArray();this.serialize()}return s(e).each(function(){t[this.name]?s.isArray(t[this.name])?t[this.name].push(this.value):t[this.name]=[t[this.name],this.value]:t[this.name]=this.value}),t}}(jQuery),function(s){s.fn.progressbarIs=function(t){function e(t,i){s(".progressbarIs").animate({width:"+="+i},1e3,function(){if("1"===t.state&&parseInt(s(this).css("width"))<=parseInt(n.css("width"))){var a=parseInt(n.css("width"))+5+"px";s(this).animate({width:a},function(){alert("报名成功！"),s(".progressbarIs").remove(),s(".mask4progress").remove(),n.find("input").val("")})}else"0"===t.state&&parseInt(s(this).css("width"))<parseInt(n.css("width"))&&(t.count++,console.log("doneFlag.count:"+t.count),t.count<8?e(t,i):(alert("暂时无法报名！"),s(".progressbarIs").remove(),s(".mask4progress").remove()))})}var i='<div class="progressbarIs"></div><div class="mask4progress"></div>';this.append(i);var n=this,a=parseInt(this.css("width"))/10+"px";return e(t,a),this}}(jQuery),$(function(){function s(s){function t(){clearTimeout(n),$(".banLine").removeClass("turnGreen"),$(this).removeClass("slightMoveup"),$(this).css("font-size","16px")}function e(){var s=this;$(".picZone img").attr("src",$(this).data("filesrc")),$(".explains p").stop().animate({left:"+="+$(".explains").css("width")},200,function(){$(".explains").html("<p>"+$(s).data("explains")+"</p>"),$(".explains p").stop().animate({left:"40px"},400,function(){$(this).stop().animate({left:"0px"},100)})}),$("li.selected").removeClass("selected"),$(this).addClass("selected")}for(var i="",n=0,a=0,r=s.list.length;r>a;a++)i+='<li data-filesrc="'+s.list[a].filesrc+'" data-explains="'+s.list[a].explains+'">'+s.list[a].number+"</li>";$("#hublists ul").append(i),$("#hublists li").on("mouseenter",function(){function s(){parseInt(t.css("font-size"))<e&&(t.css("font-size",parseInt(t.css("font-size"))+1+"px"),n=setTimeout(s,i))}$(this).css("font-size","16px");var t=$(this),e=(parseInt(t.css("font-size")),23),i=20;$(".banLine").addClass("turnGreen"),$(this).addClass("slightMoveup"),s()}),$("#hublists li").on("mouseleave",t),$("#hublists li").on("click",e)}function t(s,t,e){alert("暂时没有上线的格子！")}function e(){$("#displayArea .recruit").css("display","block"),$("#displayArea .recruit").animate({height:"80px"})}function i(){var s=/^\d{11}$/;if(""===$("#urname").val().trim()||""===$("#urname").val().trim())alert(constants.NO_NAME_CLASS);else if(s.test($("#urphone").val())){var t=$("#recruitForm").serializeJson(),e={state:"0",count:1};$("#displayArea .recruit").progressbarIs(e),$.post("/recruit",t,function(s){"1"===s.state?e.state="1":alert(constants.SYSTEM_BUSY)})}else alert(constants.INVALIDPHONE)}function n(){$("#displayArea .recruit").animate({height:"0px"},function(){$(this).css("display","none")})}String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},$.ajax({type:"get",contentType:"application/json; charset=utf-8",dataType:"json",url:"json/slotlist.json",success:s,error:t}),$("#joinis").on("click",e),$("#displayArea .confirmBtn").on("click",i),$("#displayArea .nextTime").on("click",n),$("#logoTitle").on("click",function(){window.location.href="index.html"})});