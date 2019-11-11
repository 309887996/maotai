function TabActive(){
	this.tabs=$(".main2 .tabl a");
	this.newsWrap=document.querySelector(".tabContent ul");
	this.index=0;
}
TabActive.prototype={
	init:function(){
		var that=this;
		that.getData()
		this.tabs.mouseenter(function(){
			that.index=$(this).index();
			$(this).addClass("tabActive").siblings().removeClass("tabActive");
			that.getData()
		})
	},
	getData:function(){
		var that=this;
		this.newsWrap.innerHTML=""
		console.log(that.index)
		$.getJSON("/maotai/data/w_newsList.json",function(data){
			var arr=data.filter(function(item,idx){
				 return idx>=that.index*7 && idx<that.index*7+7;
			})
			console.log(arr.length)
			arr.forEach(function(item){
				that.newsWrap.innerHTML+="<li><a href='#'>"+item.newItem+"</a><span>"+item.newsTime+"</span></li>"
			})
			
		})
	}
}
var tabActive=new TabActive();
export default tabActive