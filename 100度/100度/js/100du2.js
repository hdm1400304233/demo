/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 17-6-29
 * Time: 下午3:32
 * To change this template use File | Settings | File Templates.
 */

  //tabS
window.onload=function () {
  function tabS(obj1,cls1,obj2,cls2)
  {
    var oB=get.byId(obj1);
    var oLis=oB.getElementsByTagName("li");
    var oContent=get.byId(obj2);
    var oDiv=oContent.getElementsByTagName("div");
     for(var i=0;i<oLis.length;i++)
    {
        oLis[i].index=i;
        oLis[i].onmouseover=function()
        {
            for(var j=0;j<oLis.length;j++)
            oLis[j].className="";
            this.className=cls1;
            for(var n=0;n<oDiv.length;n++)
                oDiv[n].className="";
                oDiv[this.index].className=cls2;

        }
    }
  }

tabS('item1','cur1','content1','current1');
tabS('item2','cur2','content2','current2');
tabS('chose3','cur3','content3','current3');
tabS('chose4','cur4','content4','current4');
};





$(function () {
//for search
 (function ($){
  var oLi=$("#menu li");
 var oText=$("#search form .key");
 var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
  var iNow=0;
    oText.val(arrText[iNow]);
  oLi.each(function (index) {
      $(this).click(function ()
      {   oLi.removeClass();
         // $(this).addClass("active").siblings().addClass("gradient");
          $(this).attr("class","active");
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
 
//新闻滚动
    (function ($) {
     var oUl=$(".updates .wrap ul");
     var oBtnup=$("#updateUpBtn");
     var oBtndown=$("#updateDownBtn");
     var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.maomao.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.maomao.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.maomao.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.maomao.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.maomao.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.maomao.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.maomao.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.maomao.com/2013/#message' }
		];
      var iH=0;
      var iNow=0;
      var timer=null;
      var str='';
        for(var i=0;i<arrData.length;i++){
           str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+'...</a></li>';
        }
       oUl.html(str);
        iH=oUl.find("li").height();
        function autoPlay(){
            timer=setInterval(function(){
                doMove(-1);
            },3000);
        }
        autoPlay();
        function doMove(number)
        {
            iNow+=number;
            if(Math.abs(iNow)>arrData.length-1){
                 iNow=0;
            }

            if(iNow>0)
            {
              iNow=-(arrData.length-1);
            }
            oUl.animate({"top":iNow*iH },2000,'easeIn');

        }
        oBtnup.click(function () {
            doMove(-1);
        });
        oBtndown.click(function () {
            doMove(1);
        });

oUl.hover(function () {
    clearInterval(timer)
},autoPlay)
    })(jQuery);




/*    //tab选项卡切换
(function ($) {
function dTab(oLis,aCon,sEvent) {
    aLi=oLis.children();
    aCon.hide().eq(0).show();
    aLi.each(function(index) {
        $(this).on(sEvent, function(){
        aLi.removeClass("active").addClass("gradient");
        $(this).removeClass("gradient").addClass("active");
       aLi.find('a').removeClass("triangle_down_red").addClass("triangle_down_gray");
        $(this).find('a').removeClass("triangle_down_grey").addClass("triangle_down_red");

        aCon.hide().eq(index).show();
        });
       
    });
}
dTab($('.tabNav1'),$('.tabCon1'),'click');
dTab($('.tabNav2'),$('.tabCon2'),'click');
dTab($('.tabNav3'),$('.tabCon3'),'mouseover');
dTab($('.tabNav4'),$('.tabCon4'),'mouseover');


})(jQuery);*/
    
//自动播放的焦点图
    
    (function($){
         // 找对象
        var oDiv = $('#art');
        var aUlLi = oDiv.find('ul li');
        var aOlLi = oDiv.find('ol li');
        var oP = oDiv.find('p')
        var arrTxt = ['爸爸去啊里了','人们在学习中成长','美丽大方'];
        var iNow = 0;
        var timer = null;

        fadePlay();
        aOlLi.click(function(){
            iNow = $(this).index();
            fadePlay()

        })
        oDiv.hover(function(){
                clearInterval(timer)},
                autoPlay

        )
        function autoPlay(){
            timer=setInterval(function(){
                iNow++;
                iNow%=arrTxt.length;
                //if(iNow>=arrTxt.length-1)iNow=0;
                fadePlay()
            },2000)
        }
        autoPlay();

        function fadePlay(){
            aUlLi.each(function(ind){
                if(ind != iNow){
                    aUlLi.eq(ind).fadeOut().css('zIndex',1)
                    aOlLi.eq(ind).removeClass('active')
                }else{
                    aUlLi.eq(ind).fadeIn().css('zIndex',2);
                    aOlLi.eq(ind).addClass('active');
                }
            })
            oP.text(arrTxt[iNow]);
        }

    })(jQuery);

//日历提示
    (function ($) {
     var oWeek=$(".everyday h3 span");
     var aImg=$(".everyday ol .img");
     var oToday_info=$(".everyday .today_info");
     var oImg=oToday_info.find("img");
     var oStrong=oToday_info.find("strong");
     var oP=oToday_info.find("p");
        aImg.hover(function () {
            var iTop=$(this).parent().position().top-30;
            var iLeft=$(this).parent().position().left+55;
            oToday_info.show().css({"top":iTop,"left":iLeft});
            oImg.attr("src",$(this).attr("src"));
            oP.text($(this).attr("info"));
            var index = $(this).parent().index()%oWeek.size();
            oStrong.text(oWeek.eq(index).text());
        },function () {
            oToday_info.hide();
        });
    })(jQuery);
    
//BBS高亮显示
    (function ($) {
       $(".bbs ol li").mouseover(function () {
          $(".bbs ol li").removeClass("active");
           $(this).addClass("active");
       });

    })(jQuery);

//HOT人气提示
    (function($){
          var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];

       $('#hot-area li').mouseover(function(){
            if($(this).index()==0) return;
            $('.hot-area li p').remove();

           $(this).append('<p style="background:rgba(255,34,34,0.5);width:'+ ($(this).width()-12)+'px;height:' + ($(this).height()-12)+'px;">'+ arr[$(this).index()]+'</p>');

       })

    })(jQuery);
})