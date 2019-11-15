function GetMenuList(){
  this.Lis=$(".nav .list>ul>li");
}
GetMenuList.prototype.getMenu=function(){

 this.Lis.hover(function(){
 //第一级菜单
    var index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    var child= $(this).find("ol")
     child.stop().slideDown();
     //第二级子菜单
     child.find("li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
     },function(){
         $(this).removeClass("active");
     })
    
    //鼠标移入
 },function(){
   //鼠标移出
    $(this).removeClass("active");
     var index=$(this).index();
    $(this).find("ol").stop().slideUp();
 })
}

var getMenuList=new GetMenuList();

export default getMenuList