//
var oZhanghao= document.getElementById("zhanghao");
 function txtChange(obj,str){   // 封装一个文本处理函数
      obj.onfocus =  function(){
          if(this.value==str){
              this.value ='';
          }
      }
      obj.onblur =  function(){
          if(this.value==''){
              this.value =str;
          }
      }
 }

   // 调用

   txtChange(oZhanghao,'请输入用户名');


function more(){
	var oShare = document.getElementById('share');
	var oMore =oShare.getElementsByTagName('a')[0];
	var timer = null;
	
	var oDis =parseInt(getStyle(oShare,'right')) ;
	
	
	oShare.onmouseover = function(){
		clearInterval(timer);
		timer = setInterval(function(){
			var iSpeed = 2;
			if(oDis == 0){
				clearInterval(timer);
			}
			else{
				oDis += iSpeed;
				oShare.style.right = oDis + 'px';
				}
			},5);
	
	}
	
	
		oShare.onmouseout = function(){
			
			clearInterval(timer);
			timer = setInterval(function(){
				var iSpeed = -2;
				if(oDis == -220){
					clearInterval(timer);
				}
				else{
					oDis += iSpeed;
					oShare.style.right = oDis + 'px';
					}
				},5);
		
		   }
	
}
	
more();

function toBanner(){
   var oDiv = document.getElementById('banner');
   var aLi = oDiv.getElementsByTagName("li");
   /*var oPrev = getByClass(oDiv,'b-left')[0];
   var oNext = getByClass(oDiv,'b-right')[0];
   var oPrevBg = getByClass(oDiv,'prev_bg')[0];
   var oNextBg = getByClass(oDiv,'next_bg')[0];*/
    var oPrev = oDiv.getElementsByClassName('b-left')[0];
    var oNext = oDiv.getElementsByClassName('b-right')[0];
    var oPrevBg = oDiv.getElementsByClassName('prev_bg')[0];
    var oNextBg = oDiv.getElementsByClassName('next_bg')[0];
   var iNow=0;
   var iPlayer= null;

   autoPlay();
   
   oPrevBg.onmouseover=oPrev.onmouseover=function(){
       oPrev.style.display='block';
       clearInterval(iPlayer);

   }
   oPrevBg.onmouseout=function(){
       oPrev.style.display='none';
       autoPlay();
   }
   oNextBg.onmouseover=oNext.onmouseover = function(){
             oNext.style.display='block';
             clearInterval(iPlayer);

   }
    oNextBg.onmouseout=function(){
             oNext.style.display='none';
             autoPlay();
    }

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

   	toBanner();
	
	// 页脚无缝滚动

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
        //alert(aLi.length);//10
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
//注册
var Oregister = document.getElementById("register");
var Oblock = document.getElementById("laugh_cn_block");
var Oclose = document.getElementById("close");
Oregister.onclick = function(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
          window.event.cancelBubble = true;
    }
}
function showreg(){
    Oregister.style.display = "block";
    Oblock.style.display = "block";
}
Oclose.onclick = function(){
    Oregister.style.display = "none";
    Oblock.style.display = "none";
}
