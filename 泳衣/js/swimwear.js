/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 17-7-14
 * Time: 下午3:09
 * To change this template use File | Settings | File Templates.
 */
//鼠标滑过出现下拉内容
    var oUl=document.getElementById("ul2");
    var oLi=oUl.getElementsByTagName("li");
    var oP=oUl.getElementsByClassName("pxl");
    var oSubNav  = tid = null;
  for (var i = 0; i < oLi.length; i++)
	{
		oLi[i].onmouseover = function ()
		{
			//隐藏所有子菜单
			for (var i = 0; i < oP.length; i++)
                oP[i].style.display = "none";

			//获取该项下的子菜单
			oSubNav = this.getElementsByClassName("pxl")[0];
         	//显示该项下的子菜单
			oSubNav.style.display = "block";
			clearTimeout(tid);

			//阻止事件冒泡
			oSubNav.onmouseover = function (event)
			{
				(event || window.event).cancelBubble = true;
				clearTimeout(tid)
			}
		};

		oLi[i].onmouseout = function ()
		{
			tid = setTimeout(function () {
				oSubNav.style.display = "none"
			},300)
		}
	}
//鼠标点击QQ咨询出现信息框
var Xlk = document.getElementById("xl");
Xlk.onclick=function()
{ var value = document.getElementById("xinxi").style.display;
    if(value=="none")
    { document.getElementById("xinxi").style.display="block"; }
    else
        document.getElementById("xinxi").style.display="none";
}

//图片轮播
    var oBox = document.getElementById("box");
	var aUl = oBox.getElementsByTagName("ul");
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
	oBox.onmouseover = function ()
	{
		clearInterval(play)
	};

	//鼠标离开启动自动播放
	oBox.onmouseout = function ()
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
		for (i = 0; i < aNum.length; i++)
         aNum[i].className = "";
		aNum[index].className = "current";
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
