/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 17-8-16
 * Time: 下午9:18
 * To change this template use File | Settings | File Templates.
 */


window.onload=function () {
    //同城视频轮播
function toWeb(obj1){
    var oDiv =document.getElementById (obj1);
    var aLi = oDiv.getElementsByTagName("li");
    var oPrev = oDiv.getElementsByClassName('to-left')[0];
    var oNext = oDiv.getElementsByClassName('to-right')[0];
   var iNow=0;
   var iPlayer= null;
   autoPlay();
   oPrev.onclick = function(){
        goPrev();
   }
   oNext.onclick = function(){
       	goNext();
   }
   function autoPlay(){
   		iPlayer=setInterval(goNext,3000);
   }


   function goNext(){
        if(iNow == aLi.length-1){
            iNow = 0;
        }
        else{
            iNow++;
        }

        for(var i=0;i<aLi.length;i++){
           fadeOut(aLi[i]);
        }
           fadeIn(aLi[iNow]);

    }
   function goPrev(){
        if(iNow == 0){
            iNow = aLi.length-1;
        }
        else{
            iNow--;
        }

        for(var i=0;i<aLi.length;i++){
            fadeOut(aLi[i]);
        }

       fadeIn(aLi[iNow]);

    }
   }
function getStyle(obj,attr){
   if(obj.currentStyle){
       return obj.currentStyle[attr];
   }else{
       return getComputedStyle(obj,false)[attr];
   }
}

function fadeIn(obj){
	var iCur = getStyle(obj,'opacity');
	if(iCur==1){ return false;}

	var value = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timer);
		}
		else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
				}
			},30);

	   }

function fadeOut(obj){

    var iCur = getStyle(obj,'opacity');
	if(iCur==0){ return false; }

	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}
		else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);

   }
   	toWeb("city1");
   	toWeb("city2");
   	toWeb("city3");
   	toWeb("city4");
   	toWeb("city5");

//show无缝滚动
    function moveAll(el,old,iTarget){
            // 防止，你上一个动没有结束，又执行下一个动作
            clearInterval(el.timer);
            el.timer = setInterval(function(){

            var iSpeed = (iTarget - old)/10;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if(iTarget == old){
                clearInterval(el.timer);
            }
            else{
                old += iSpeed;
                el.style.left = old + 'px';
            }

        },30);

        }

        (function(){
            var oCf = document.getElementById('show');

            //var ocPrev = getByClass(oCf,'cn_prev')[0];
            var ocPrev =oCf.getElementsByClassName('to-left')[0];
            var ocNext =oCf.getElementsByClassName('to-right')[0];
            // 数组， 我们没有加下标

            //var ocNext = getByClass(oCf,'cn_next')[0];
            var oUl = oCf.getElementsByTagName('ul')[0];
            var aLi = oUl.getElementsByTagName('li');
            //alert(aLi.length);
            var iNow = 0;
            oUl.innerHTML +=oUl.innerHTML;
            oUl.style.width =  aLi.length * aLi[0].offsetWidth + 'px';

            ocPrev.onclick = function(){
               if(iNow==0){
                   iNow=aLi.length/2;
                   oUl.style.left = -oUl.offsetWidth/2 + 'px';
               }
              moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth)
                iNow--;

             }

        ocNext.onclick = function(){

            if(iNow == aLi.length/2){
                iNow = 0;
                oUl.style.left = 0;
            }

            moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);

            iNow++;

        };

        })();

}





$(function () {
//菜单下拉
   (function ($)
    {

       $("#nav .xl").hover(function () {
       $("#nav .xl").children(".subnav").css("display","none");
        $(this).children(".subnav").css("display","block");
        $(this).addClass("active");
    },function () {
        $(this).children(".subnav").css("display","none");
         $(this).removeClass("active");
    });
    }
     )(jQuery);
//标签云
  (function ($){
    function randomCloudLabel() {
      var obj = $("#wrap a");
      function rand(num) {
        return parseInt(Math.random() * num + 1);
      }
      function randomcolor() {
        var str = Math.ceil(Math.random() * 16777215).toString(16);
        if (str.length < 6) {
          str = "0" + str;
        }
        return str;
      }
      for (len = obj.length, i = len; i--; ) {
        obj[i].style.left = rand(600) + "px";
        obj[i].style.top = rand(400) + "px";
        obj[i].className = "color" + rand(5);
        obj[i].style.zIndex = rand(5);
        obj[i].style.fontSize = rand(8) + 12 + "px";
        obj[i].style.color = "#" + randomcolor();
      }
    }
  randomCloudLabel();
    })(jQuery);

//搜索tab切换
(function ($){
var oLi=$("#item li");
var oText=$("#search-tab .key");
var arrText = [
			'输入你想搜索的宝贝',
			'输入你想搜索的商品',
			'输入你想搜索的店铺',
			'输入你想搜索的拍卖品',
			'输入你想搜索的物品',
			'输入你想打听的物品'
		];
var iNow=0;
 oText.val(arrText[iNow+1]);
   oLi.each(function (index) {
      $(this).click(function ()
      {  oLi.removeClass("cur");
         $(this).addClass("cur")
          iNow=index;
          oText.val(arrText[iNow]);
      })
      })

oText.focus(function () {
    if($(this).val()==arrText[iNow])
    $(this).val("");
}).blur(function () {
        if($(this).val()=='')
        $(this).val(arrText[iNow]);
    })
})(jQuery);
    
//tab
 (function($){
          function dTab(oLis,aCon,sEvent){
              var aLi = oLis.children();
               aCon.hide().eq(0).show();
              aLi.each(function(index){
                  $(this).on(sEvent,function(){
                      aLi.removeClass('active');
                      $(this).addClass('active');
                      aCon.hide().eq(index).show();

                  });
              });
          }
          dTab($('#item2'),$('.city-con'),'click');
          dTab($('#item3'),$('.tabcon1'),'click');
          dTab($('#tao-item1'),$('.taocon1'),'mouseover');
          dTab($('#tao-item2'),$('.taocon2'),'mouseover');
          dTab($('#tao-item3'),$('.taocon3'),'mouseover');


      })(jQuery);

 (function ($) {
       $(".ranking-list ol li").mouseover(function () {
          $(".ranking-list ol li").removeClass("active");
           $(this).addClass("active");
       });
    })(jQuery);















});
