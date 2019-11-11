function MainBaner(){
  this.pointers=$(".mainslide ol li")
  this.slides=$(".mainslide ul li")

}
MainBaner.prototype={
   init:function(){
   var that=this;
       this.pointers.hover(function(){
          var index=$(this).index();
          $(this).addClass("active").siblings().removeClass("active");
          that.slides.eq(index).show().siblings().hide();
       })
   }
}
var mainBaner=new  MainBaner();

export default mainBaner