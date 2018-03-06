function test1(){
    feiLayer.open({
        title:"温馨提示",
        content:"晚上好，春天小姐，约吗？",
        btn:["约"],
        skin:"layout-className",
        success:function(){
            //成功
        },
        yes:function(){
            //确定
            feiLayer.open({
                btn:false,
                type:2,
                content:"我们春天里，不见不散！"
            });
        },
        no:function(){
            //取消
            console.log("取消");

        }
    });
}
function test2(){
    feiLayer.open({
        content:"这是一个询问框",
        yes:function(){
            //确定
            feiLayer.open({
                btn:false,
                type:2,
                content:"春天小姐提醒：你点了确定"
            });
        },
        no:function(){
            //取消
            feiLayer.open({
                btn:false,
                type:2,
                content:"春天小姐提醒：你点了取消"
            });

        }
    });
}
function test3(){
    feiLayer.open({
        type:2,
        content:"来自“春天小姐”的第一个提示框"
    });
}
function test4(){
    feiLayer.open({
        time:3000,
        content:"3秒后自动关闭"
    });
}
function test5(){
    feiLayer.open({
        type:3,
        style:"height:50%;max-width: 100%;",
        content:"这里是Html内容，别让“春天小姐”等太久！<br /><button class='ui-btn' onclick='feiLayer.closeAll()'>关闭弹窗</button>"
    }); 
}
function test6(){
    feiLayer.open({
        title:"温馨提示",
        content:"春天小姐，没有黑色遮罩",
        btn:["约"],
        shade:false,
        success:function(){
            //成功
        },
        yes:function(){
            //确定

        },
        no:function(){
            //取消

        }
    });
}


function test7(){
    feiLayer.open({
        title:"温馨提示",
        shadeClose:false,
        content:"点击遮罩不允许关闭",
        btn:["朕知道了"],
    });
}


//标题dom
function dom_titleFn(){
    feiLayer.open({
        title:"温馨提示",
        content:"人家是标题，好伐！",
        btn:["朕知道了"]
    });
}
//标题dom2
function dom_titleFn2(){
    feiLayer.open({
        content:"无标题！",
        btn:["朕知道了"]
    });
}
//内容 dom
function dom_contentFn(){
    feiLayer.open({
        content:"我是被带进来的内容！",
        btn:["朕知道了"]
    });
}
//遮罩 dom
function dom_shadeFn(){
    feiLayer.open({
        shade:false,
        content:"无遮罩！",
        btn:["朕知道了"]
    });
}
//遮罩不能关闭 dom
function dom_shadeCloseFn(){
    feiLayer.open({
        shadeClose:false,
        content:"遮罩不能关闭！",
        btn:["朕知道了"]
    });
}

//自定义skin dom
function dom_skinFn(){
    feiLayer.open({
        title:"标题",
        skin:"layout-class",
        content:"自定义风格Class！",
        btn:["朕知道了"]
    });
}

//btn dom
function dom_btnFn(){
    feiLayer.open({
        content:"一个按钮！",
        btn:["确定"],
        yes:function(){
            feiLayer.open({
                type:2,
                content:"yes 回调"
            });
        }
    });
}
function dom_btnFn2(){
    feiLayer.open({
        content:"2个按钮！",
        btn:["取消","确定"],
        yes:function(){
            feiLayer.open({
                type:2,
                content:"yes 回调"
            });
        },
        no:function(){
            feiLayer.open({
                type:2,
                content:"no 回调"
            });
        }
    });
}

//time
function dom_timeFn(){
    feiLayer.open({
        time:3000,
        content:"3秒后自动关闭"
    });
}

//success
function dom_successFn(){
    feiLayer.open({
        content:"success会执行吗？",
        btn:["取消","确定"],
        success:function(){
            feiLayer.open({
                type:2,
                content:"success被执行了"
            });
        }
    });
}

//yes dom
function dom_successFn(){
    feiLayer.open({
        content:"yes会执行吗？",
        yes:function(){
            feiLayer.open({
                type:2,
                content:"yes 回调"
            });
        }
    });
}


//no dom
function dom_noFn(){
    feiLayer.open({
        content:"no会执行吗？",
        no:function(){
            feiLayer.open({
                type:2,
                content:"no 回调"
            });
        }
    });
}
//end dom
function dom_endFn(){
    feiLayer.open({
        content:"end会执行吗？",
        end:function(){
            feiLayer.open({
                type:2,
                content:"end 回调"
            });
        }
    });

}






//插件滚动
function autoGotoFn(key){
    var $in = $("[in="+key+"]");
    var offset = $in.offset();
    $("html, body").animate({scrollTop:offset.top-30},"fast");
}


$(function(){
    
    //选中
    $("sidebar .list .link").on("click",function(){
        var key = $(this).attr("to");
        $("sidebar .list .link").removeClass("current");
        $(this).addClass("current");
        autoGotoFn(key);
    })
})




