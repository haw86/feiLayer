/*
    http://ui.xfei.me/
    By 似懂非懂 
*/
;!function(win) {
    win.feiLayer = {
        v:"1.0",
        index:0,
        
        //默认配置
        default:{
            title:false,
            type:1, //1:信息框  4:加载中
            content:"",
            shade:true,
            shadeClose:true,
            skin:"",
            btn:["取消","确定"],
            yes:function(){
                
            },
            no:function(){
                
            },
            success:function(){
                
            },
            end:function(){
                
            }
        }, 
        
        //关闭
        close:function(e){
            var t = this;
            var d = document.getElementById("feiui-Layer-"+e);
            console.log(d);
            if(d&&d.parentNode){
                var lc2 = d.getElementsByClassName("layer-center2");
                var mask = d.getElementsByClassName("layer-mask");
                if(mask[0]) mask[0].setAttribute("class", "layer-mask anim-fadeOut");
                var closeTime = 300;
                if(t.config.type==3){
                    lc2[0].setAttribute("class", "layer-center2 anim-fadeDownOut");
                    closeTime = 500;
                }else{
                    if(lc2&&lc2[0]){
                        lc2[0].setAttribute("class", "layer-center2 anim-fadeUpOut");
                    }
                }
                setTimeout(function(){
                    if(d.parentNode) d.parentNode.removeChild(d); 
                    t.config.end && t.config.end();
                },closeTime)
            }
        },
        
        //关闭所有
        closeAll:function(){
            var t = this;
            for(var i=0;i<t.index;i++){
                t.close(i);
            }
            t.config.end && t.config.end();
        },
        
        //生成dom
        createDom:function(){
            var t = this;
            var skin = t.config.skin ? t.config.skin : "";
            
            //msg
            var type = t.config.type==2 ? "feiui-msg" : "";
            
            //弹窗页面
            if(t.config.type==3){
                var type = " feiui-page";
            }
            
            var div = document.createElement("div");
            div.setAttribute("class", "feiui-Layer feiui-Layer-"+t.index + " " + type + " " + skin),
            div.setAttribute("index", t.index);
            div.setAttribute("id", "feiui-Layer-"+t.index);
            
            var title = "";
            if(t.config.title&&t.config.type!=2){
                title = "<div class='layer-title'>"+t.config.title+"</div>";
            }
            
            var dom = "<div class='layer-content'>"+t.config.content+"</div>";
            
            var b = t.config.btn;
            var btn = "";
            var f = "";
            if(b.length==1){
                btn = "<div class='layer-btn layer-btn-full'><div class='btn' type='yes'>"+b[0]+"</div></div>";
            }else if(b.length==2){
                if(b[0]){
                    btn += "<div class='btn' type='no'>"+b[0]+"</div>";
                }
                if(b[1]){
                    btn += "<div class='btn' type='yes'>"+b[1]+"</div>";
                }
                btn = "<div class='layer-btn'>"+btn+"</div>";
            }
            if(t.config.type==2){
                btn = "";
            }
            
            //是否需要遮罩
            var mask = "";
            if(t.config.shade==true){
                if(t.config.type!=2)
                    mask = "<div class='layer-mask anim-fadeIn'></div>";
            }
            
            if(t.config.type==3){
                var btn = "";
            }

            
            //动画
            var anim = "";
            if(!t.config.anim){
                anim = "anim-fadeDownIn";
                if(t.config.type==3){
                    anim = "anim-fadeUpIn";
                }
            }
            
            div.innerHTML = mask + "<div class='layer-main'><div class='layer-center'><div class='layer-center2 "+anim+"'>" + title + dom + btn + "</div></div></div>";

            //加载中...
            if(t.config.type==4){
                div.innerHTML = mask + "<div class='layer-main'><div class='layer-center'><div class='Js-layer-center layer-loading-box'><div class='layer-loading'><div></div><div></div><div></div></div><div class='loading-tips'>"+t.config.content+"</div></div></div></div>";
            }

            return div;
        },
        
        //绑定事件
        bindElem:function(e){
            var t = this;
            function close(el){
                el.onclick = function(){
                    var type = this.getAttribute("type");
                    t.close(e);
                    if(type=="yes"){
                        t.config.yes && t.config.yes();
                    }
                    if(type=="no"){
                        t.config.no && t.config.no();
                    }
                }
            }
            var d = document.getElementById("feiui-Layer-"+e);
            var b = d.getElementsByClassName("btn");
            if(b&&b.length){
                for(var i=0;i<b.length;i++){
                    close(b[i]);
                }
                
                    
            }
            
            //是否遮罩关闭组件
            if(t.config.shadeClose==true){
                var b = d.getElementsByClassName("layer-main");
                var b2 = d.getElementsByClassName("layer-center2");
                b[0].onclick = function(event){
                    t.close(e);
                };
                if(b2&&b2[0]){
                    b2[0].onclick = function(event){
                        event.stopPropagation();
                    }
                }
            }
            
            //如果设置了高度
            if(t.config.height){
                var con = d.getElementsByClassName("layer-content");
                con[0].style.height = t.config.height;
            }
            
            if(t.config.style){
                var con = d.getElementsByClassName("layer-center2");
                con[0].style = t.config.style;
            }
            
            //自动关闭
            if(t.config.type==2&&!t.config.time){
                t.config.time = 3000;
            }
            if(t.config.time){
                if(typeof t.config.time == "number"){
                    setTimeout(function(){
                        t.close(e);
                    },t.config.time);
                }
            }
        },
        
        //合并json
        merge:function(e){
            var t = this;
            var c = {};
            for (var d in t.default){
                c[d] = t.default[d];
            };
            
            for (var i in e){
                c[i] = e[i];
            };
            return c;
        },
            
        //打开
        open:function(e){
            var t = this;
            t.config = t.merge(e);
            
            var dom = t.createDom();
            
            document.body.appendChild(dom);
            t.bindElem(t.index);
            t.index += 1;   //计数
            
            t.config.success && t.config.success(t.index-1);
            return t.index-1;
        }
        
        
    }
    
    
    ;"function" == typeof define ? define(function() {
        return feiLayer
    }) : function() {
    } ()
} (window);


