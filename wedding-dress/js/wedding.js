/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 17-7-11
 * Time: 下午11:37
 * To change this template use File | Settings | File Templates.
 */
window.onload = function ()
{
  //倒计时

 var interval = 1000;
function ShowCountDown(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime(); //getTime 方法返回一个整数值,这个整数代表了从 1970 年 1 月 1 日开始计算到 Date 对象中的时间之间的毫秒数
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));

var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
    if(day1<10)
    {
        day1="0"+day1;
    }
    if(hour<10)
    {
        hour="0"+hour;
    }
    if(minute<10)
    {
        minute="0"+minute;
    }
     if(second<10)
    {
        second="0"+second;
    }
var cc = document.getElementById(divname);
cc.innerHTML = hour+ "：" +minute+ "：" + ""+ second;
}
window.setInterval(function(){ShowCountDown(2018,12,16,'downtime');}, interval);


//轮播图
	var oLunbo = document.getElementById("lunbo");
	var aUl = oLunbo.getElementsByTagName("ul");
	var aImg = aUl[0].getElementsByTagName("li");
	var aNum = aUl[1].getElementsByTagName("li");
	var timer = play = null;
	var i = index = 0;

	//切换按钮
	for (i = 0; i < aNum.length; i++)
	{
		aNum[i].index = i;
		aNum[i].onmouseover = function ()
		{
			show(this.index)
		}
	}

	//鼠标划过关闭定时器
	oLunbo.onmouseover = function ()
	{
		clearInterval(play)
	};

	//鼠标离开启动自动播放
	oLunbo.onmouseout = function ()
	{
		autoPlay()
	};

	//自动播放函数
	function autoPlay ()
	{
		play = setInterval(function () {
			index++;
			index >= aImg.length && (index = 0);
			show(index);
		},2000);
	}
	autoPlay();//应用

	//图片切换, 淡入淡出效果
	function show (a)
	{
		index = a;
		var alpha = 0;
		for (i = 0; i < aNum.length; i++)aNum[i].className = "";
		aNum[index].className = "cur";
		clearInterval(timer);

		for (i = 0; i < aImg.length; i++)
		{
			aImg[i].style.opacity = 0;
			aImg[i].style.filter = "alpha(opacity=0)";
		}

		timer = setInterval(function () {
			alpha += 2;
			alpha > 100 && (alpha =100);
			aImg[index].style.opacity = alpha / 100;
			aImg[index].style.filter = "alpha(opacity = " + alpha + ")";
			alpha == 100 && clearInterval(timer)
		},20);
	}

//搜索下拉选择
 function listDown(obj) {
   var oSort = document.getElementById(obj);
   var aH4 = oSort.getElementsByTagName('h4')[0];
   var oB = aH4.getElementsByTagName('b')[0];
   var aUl = oSort.getElementsByTagName('ul')[0];
   var aLi= aUl.getElementsByTagName('li');
        aH4.onclick = function(e)
        {
            var ev = e||window.event;
            aUl.style.display="block";
            document.onclick = function()
            {
                aUl.style.display = 'none';
            }
            ev.cancelBubble = true;
        }


            for(var j=0;j<aLi.length;j++){
                 aLi[j].onclick = function(e){
                     var ev = e||window.event;
                     oB.innerHTML = this.innerHTML;
                     this.parentNode.style.display = 'none';
                     ev.cancelBubble = true;
                 }
            }
 }
listDown("form21");
listDown("form22");
listDown("form23");
listDown("form24");
listDown("form25");
listDown("form26");
listDown("form27");
listDown("form28");
listDown("form29");
}
    
$(function()
{
  //搜索菜单选择
    (function($){
        var oLi = $('#search-all ul li');
        oLi.each(function(){
            $(this).click(function(){
                oLi.removeClass();
                $(this).addClass('active')
            })
        })

    })(jQuery);

        //菜单下拉
    (function ($)
    {

          $("#nav li").hover(function () {
       $("#nav li").children(".subnav").css("display","none");
        $(this).children(".subnav").css("display","block");
        $(this).addClass("active");
    },function () {
        $(this).children(".subnav").css("display","none");
         $(this).removeClass("active");
    });
    }
     )(jQuery);

//menu实现tab切换
   (function($){
          function dTab(oLis,aCon,sEvent){
               aLi = oLis.children();
               aCon.hide().eq(0).show();
              aLi.each(function(index){
                  $(this).on(sEvent,function(){
                      aLi.removeClass('active');
                      $(this).addClass('active');
                      aCon.hide().eq(index).show();

                  });
              });
          }
          dTab($('.menu-list'),$('.sub'),'mouseover');
      })(jQuery);

//婚纱透明遮罩
   (function($){
     function Cop(obj,oChild,aChild1,aChild2){
      var oChd = obj.find(oChild);
        oChd.hover(function()
         {
       oChd.find(aChild1).css({'display':'block'});
       oChd.find(aChild2).css({'display':'none'});
        $(this).find(aChild2).css({'display':'block'});
        $(this).find(aChild1).addClass("active");
             },
             function()
             {
        $(this).find(aChild1).removeClass("active");
        oChd.find(aChild1).css({'display':'none'});
         oChd.find(aChild2).css({'display':'block'});
              });
          }

   Cop($('#new-dress'),$('li'),$('p'),$('h4'));
   Cop($('#w-dresses'),$('span'),$('em'),$('h4'));
    Cop($('#dress-con'),$('span'),$('em'),$('h4'));
    Cop($('#cheongsam-con'),$('span'),$('em'),$('h4'));

      })(jQuery);

/*(function ($) {
       $('#new-dress li').hover(function(){
        $('#new-dress li').children ('p').css({'display':'block'});
        $(this).children('p').addClass("active");
       },function() {
        $(this).children('p').removeClass("active");
       $('#new-dress li').children ('p').css({'display':'none'});
   })

})(jQuery);*/

/*(function ($) {
     $('#w-dresses span').hover(function(){
        $('#w-dresses span').children ('em').css({'display':'block'});
        $(this).children('em').addClass("active");
       },function() {
        $(this).children('em').removeClass("active");
       $('#w-dresses span').children ('em').css({'display':'none'});
   })

})(jQuery);

 (function ($) {
   $('#dress-con  span').hover(function(){
        $('#dress-con span').children ('em').css({'display':'block'});
        $(this).children('em').addClass("active");
       },function() {
        $(this).children('em').removeClass("active");
       $('#dress-con span').children ('em').css({'display':'none'});
   })
})(jQuery);


    (function ($) {
   $('#cheongsam-con  span').hover(function(){
        $('#cheongsam-con span').children ('em').css({'display':'block'});
        $(this).children('em').addClass("active");
       },function() {
        $(this).children('em').removeClass("active");
       $('#cheongsam-con span').children ('em').css({'display':'none'});
   })
})(jQuery);*/

})
