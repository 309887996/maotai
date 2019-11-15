function ReturnTop(){
	this.mark=$("#fixed")
	
	
}
ReturnTop.prototype={
	
	init:function(){
		var that=this;
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>100){
				that.mark.show();
			}else{
				that.mark.hide();
			}
		}
	}
}
var returnTop=new ReturnTop();
export default returnTop