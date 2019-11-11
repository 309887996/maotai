function Banner(){
  this.bannerPointers=$(".banner ol li");
  this.bannerArea=$(".banner ul");
  this.scrollWidth=$(".scroll").width();
  this.arrows=$(".scroll div span")
  this.index=null;

}
Banner.prototype={
     startToggle:function(){
     //banner图中的轮播点被触发
        var that=this;
         this.bannerPointers.hover(function(){
               that.index=$(this).index();//获取当前轮播索引
               //轮播点被改变颜色
               $(this).addClass("bannerActive").siblings().removeClass("bannerActive");
               //图片被切换
               that.bannerArea.animate({
                  left:-that.index* that.scrollWidth+"px"
               },1000,"swing")
         })
     },
     clickToggle:function(){
        var that=this;
         this.arrows.click(function(){
             var classname=$(this).attr("class");
               switch (classname){
                  case "arrow_left"://向左运动，距离越来越小，索引越来越小
                      if(that.index<=0){
	                      that.index=0;
	                  }else{
	                     that.index--
	                  }
	                  that.bannerArea.animate({
		                  left:-that.index* that.scrollWidth+"px"
		               },1000,"swing")
                     break;
                  case "arrow_right":
	                  if(that.index>=that.bannerPointers.length-1){
	                      that.index=that.bannerPointers.length-1;
	                  }else{
	                     that.index++
	                  }
	                  that.bannerArea.animate({
		                  left:-that.index* that.scrollWidth+"px"
		               },1000,"swing")
                     break;
               }
               console.log(  that.index)
               console.log( that.bannerPointers[that.index])
               that.bannerPointers.eq(that.index).addClass("bannerActive").siblings().removeClass("bannerActive")
             
         })
     }
}
var banner=new Banner();
export default banner