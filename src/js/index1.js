/*
 轮播图包括三部分
   1.轮播主题区域
   2.轮播点
   3.轮播箭头
 * 
 * */
function Carousel(options){
	//option对象中有一个属性continer,表示轮播所在的容器
	this.slideView=document.querySelector(options.View);
	//option对象中有一个属性Wrap,表示轮播主体
	this.slideWrap=document.querySelector(options.Wrap);
	//option对象中有一个属性Pointers,表示轮播点
	this.slidePointersWrap=document.querySelector(options.PointersWrap);
	//轮播箭头的容器
	this.slideArrowWrap=document.querySelector(options.ArrowWrap);
	//是否自动,鼠标放在轮播图上停止自动，鼠标离开轮播图才自动
	this.slideAuto=true;
	//轮播图索引
	this.courseIndex=1;
	this.timer=null;
	
}
Carousel.prototype={
	//本功能中轮播图已经可以运动
	 init:function(){
	 	this.addElement();
	 	this.slideWrap.style.width=this.slideView.offsetWidth*this.slideWrap.children.length+"px";
	 	this.slideWrap.style.height=this.slideView.offsetHeight+"px";
 		this.slideWrap.style.left=-this.courseIndex*this.slideView.offsetWidth+"px";
 		this.slidePointersWrap.children[this.courseIndex-1].classList.add("poinerActiveBgColor");
 		this.slideWrap.addEventListener("transitionend",function(){
 			  //不耽搁正常过度，过度结束后的瞬间切换	//监听过渡：这里的索引是过渡后的索引
 				if(this.courseIndex>=this.slideWrap.children.length-1){
 					this.courseIndex=1;
					this.slideWrap.style.transition="none";
					this.slideWrap.style.left=-this.courseIndex*this.slideView.offsetWidth+"px";
 				}
   				if(this.courseIndex<=0){
					this.courseIndex=this.slideWrap.children.length-1;
					this.slideWrap.style.transition="none";
					this.slideWrap.style.left=-this.courseIndex*this.slideView.offsetWidth+"px";
   				}
				   //轮播点切换
				   console.log(this.courseIndex);
   				this.utils.removeClass(this.slidePointersWrap,"poinerActiveBgColor");
	     	    this.slidePointersWrap.children[this.courseIndex-1].classList.add("poinerActiveBgColor")
 				
 	    }.bind(this))
 		
 	    this.statuControl();
 		
 		if(this.slideAuto){
 			 this.autoStart();
 		}else{
 			this.clickArrow();
 			this.clickPointers()
 		}
	 },
	 statuControl:function(){
	 	var that=this;
 		this.slideView.onmouseenter=function(){
 			that.slideAuto=false;
 		}
 		this.slideView.onmouseleave=function(){
 			that.slideAuto=true;
 			clearInterval(that.timer)
 			that.autoStart();
 		}
	 },
	 addElement:function(){
	 	      //保存最后一个元素
		 	  var lastChild=this.slideWrap.lastElementChild.cloneNode(true);
		 	  //保存第一个元素
		 	  var firstChild=this.slideWrap.firstElementChild.cloneNode(true);
		 	  //在上面追加一个最下面的元素
		 	  this.slideWrap.insertBefore(lastChild,this.slideWrap.firstChild);
		 	  //在下面追加一个最上面的元素
		 	  this.slideWrap.appendChild(firstChild);
	 },
	 clickArrow:function(){
	 	var that=this;
	 	this.slideArrowWrap.onclick=function(ev){
	 		var ev=ev||event;
	 		var target=ev.target||event.srcElement;
	 		if(target.className=="arrow_left"){
	 			//点击左边的箭头，会导致索引越来越大
	 			that.courseIndex++;
	 		}
	 		if(target.className=="arrow_right"){
	 			//点击右边的箭头，会导致索引越来越小
	 			that.courseIndex--;
	 		}
     		that.slideWrap.style.transition="left linear 1s";
	     	that.slideWrap.style.left=-that.courseIndex*that.slideView.offsetWidth+"px";
	 	}
	 },
	 clickPointers:function(){
	 	var that=this;
	 	for(var i=0,len=this.slidePointersWrap.children.length;i<len;i++){
	 		this.slidePointersWrap.children[i].index=i;
	 		this.slidePointersWrap.children[i].onmouseenter=function(ev){
				 ev.stopPropagation();
	 				//轮播点切换
	   				that.utils.removeClass(that.slidePointersWrap,"poinerActiveBgColor");
		     	    this.classList.add("poinerActiveBgColor");
		     	    that.courseIndex=this.index+1;
		     	    
	     	    	that.slideWrap.style.transition="left linear 1s";
     	            that.slideWrap.style.left=-that.courseIndex*that.slideView.offsetWidth+"px";
		 		
	 		}
	 		
	 	}
	 },
	autoStart:function(){
	 		this.timer=setInterval(function(){
	 				if(this.slideAuto){
	 			     	this.courseIndex++;
			     		this.slideWrap.style.transition="left linear 1s";
	 			     	this.slideWrap.style.left=-this.courseIndex*this.slideView.offsetWidth+"px";
			 		}else{
			 			clearInterval(this.timer)
			 			this.clickArrow();
		 				this.clickPointers()
			 		}
	 			   	
	 		}.bind(this),3000);
	 	
	 },
	 utils:{
	 	removeClass:function(eleP,classname){
	 		    for(var i=0;i<eleP.children.length;i++){
	 		    	   eleP.children[i].classList.remove(classname)
	 		    }
	 	}
	 }
}

var carousel=new Carousel({
	View:".View",
	Wrap:".Wrap",
	PointersWrap:".PointersWrap",
	ArrowWrap:".ArrowWrap"
})
carousel.init();


var carousel2=new Carousel({
	View:".news_left",
	Wrap:".www",
	PointersWrap:".mmm",
	ArrowWrap:".ArrowWrap"
})
carousel2.init();

var carousel3=new Carousel({
	View:".news_let>.text",
	Wrap:".news_let>.View>.hhh",
	PointersWrap:".a",
	ArrowWrap:".cc"
})
carousel3.init();