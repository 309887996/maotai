function getNowTime(){
 this.timeWrap=document.querySelector("#timer");
 this.time=new Date();
 this.weekArr=['日',"一","二",'三','四','五','六']
 //获取年份
 this.year= this.time.getFullYear();
 //获取月份
 this.months= this.time.getMonth()+1>9?this.time.getMonth()+1:"0"+this.time.getMonth()+1;
 //获取日期
 this.Day= this.time.getDate()>9?this.time.getDate():"0"+this.time.getDate();
 //获取星期几
 this.week=this.weekArr[this.time.getDay()];
 
   this.timeWrap.innerHTML="<font>"+this.year+"年"+this.months+"月"+this.Day+"日</font>&nbsp;&nbsp;&nbsp;&nbsp;<font>星期"+this.week+"</font>"
}
getNowTime.prototype.init=function(){
 
  setInterval(function(){
	     //获取年份
		 this.year= this.time.getFullYear();
		 //获取月份
		 this.months= this.time.getMonth()+1>9?this.time.getMonth()+1:"0"+this.time.getMonth()+1;
		 //获取日期
		 this.Day= this.time.getDate()>9?this.time.getDate():"0"+this.time.getDate();
		 //获取星期几
		 this.week=this.weekArr[this.time.getDay()];
     
         this.timeWrap.innerHTML="<font>"+this.year+"年"+this.months+"月"+this.Day+"日</font>&nbsp;&nbsp;&nbsp;&nbsp;<font>星期"+this.week+"</font>"
  }.bind(this),1000)

}
var nowTime=new getNowTime();
export default nowTime;
