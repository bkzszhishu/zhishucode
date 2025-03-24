import {SidebarConfig4Multiple} from "vuepress/config";
import javaSESideBar from "./sidebars/javaSESideBar";
import mySQLSideBar from "./sidebars/mySQLSideBar";
import javaWebSideBar from "./sidebars/javaWebSideBar";
import frontFrameworkSideBar from "./sidebars/frontFrameworkSideBar";
import backendFrameworkSideBar from "./sidebars/backendFrameworkSideBar";
import microservicesSideBar from "./sidebars/microservicesSideBar";
import techStackSideBar from "./sidebars/techStackSideBar";



// 侧边栏
// @ts-ignore
export default {


    "/JavaSE/": javaSESideBar,

    "/MySQL/": mySQLSideBar,

    "/JavaWeb/": javaWebSideBar,

    "/前端框架技术/": frontFrameworkSideBar,

    "/后端框架技术/": backendFrameworkSideBar,

    "/微服务/": microservicesSideBar,

    "/技术栈/": techStackSideBar,

    "/": "auto"



    // 降级，默认根据文章标题渲染侧边栏

} as SidebarConfig4Multiple;
