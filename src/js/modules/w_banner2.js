function Banner(){
	this.slidesItem=$(".slideArea li");
	this.slides=$(".slideWindow ol li");
	this.slideArrow=$(".slideWindow div span");
	this.index=0;
}
Banner.prototype={
	init:function(){
		var that=this;
		this.slides.click(function(){
			 that.index=$(this).index();
			 $(this).addClass("active").siblings().removeClass("active");
			 that.slidesItem.eq(that.index).fadeIn().siblings().fadeOut()
		})
		this.slideArrow.click(function(){
			switch ($(this).attr("class")){
				case "left":
				that.index--
				   if(that.index<0){
				   	  that.index=1;
				   }
					break;
				case "right":
				that.index++;
				    if(that.index>1){
				    	that.index=0;
				    }
					break;
			}
			 that.slides.eq(that.index).addClass("active").siblings().removeClass("active");
			 that.slidesItem.eq(that.index).fadeIn().siblings().fadeOut()
		})
	}
}
var banner2=new Banner();
export default banner2