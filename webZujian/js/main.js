require.config({
	paths: {
		jquery:"jquery",
		jqueryUI: "http://code.jquery.com/ui/1.10.4/jquery-ui"
	}
});

require(['jquery', 'window'], function($, w){
	$("#a").click(function(){

		var win = new w.Window();

		win.alert({
							title: "提示",
							content: "welcome!", 
							handler: function(){
										alert("you click the button");
									}, 
							width: 300,
							height: 150,
							y: 50,
							hasCloseBtn: true,
							text4AlertBtn: "ok",
							dragHandle: ".window_header",
							//skinClassName: "window_skin_a",
							handler4AlertBtn: function(){
								alert("you click the alert button");
							},
							handler4CloseBtn: function(){
								alert("you click the close button");
							}
		}).on("alert", function(){
			alert("the second alert handler");
		}).on("close",function(){
			alert("the second close handler");
		});

		win.on("alert", function(){
			alert("the third alert handler");
		});

		
	});	


    $("#b").click(function(){
    	new w.Window().confirm({
			title: "系统消息",
			content: "您确定要删除这个文件吗？",
			width: 300,
			height: 150,
			y: 50,
			text4ConfirmBtn: "是",
			text4CancelBtn: "否",
			dragHandle: ".window_header"
		}).on("confirm", function(){
			alert("确定");
		}).on("cancel", function(){
			alert("取消");
		});
    });

    $("#c").click(function(){
    	new w.Window().prompt({
    		title: "请输入您的名字",
    		content: "我们将为您保密您输入的信息",
    		width: 300,
    		height: 150,
    		y: 50,
    		text4PromptBtn: "输入",
    		text4CancelBtn: "取消",
    		defaultValue4PromptInput: "张三",
    		dragHandle: ".window_header",
    		handler4PromptBtn: function(inputValue){
    			alert("您输入的内容是:" + inputValue);
    		},
    		handler4CancelBtn: function(){
    			alert("取消");
    		}
    	})
    })

    $("#d").click(function(){
	    	new w.Window().common({
	    	content: "我是一个通用弹窗",
	    	widht: 300,
	    	height: 150,
	    	y: 50,
	    	hasCloseBtn: true
	    })
    })

    
	
});