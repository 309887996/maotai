import nowTime from "./modules/getNowTime.js";
import getMenuList from "./modules/getMenuList.js";
import banner from "./modules/banner.js";
import mainBaner from "./modules/mainBaner.js";
import tabActive from "./modules/tabActive.js";
import returnTop from "./modules/returnTop.js"

nowTime.init();
getMenuList.getMenu();
banner.startToggle()
banner.clickToggle();
mainBaner.init();
tabActive.init()
returnTop.init();
//tabActive.getData()
