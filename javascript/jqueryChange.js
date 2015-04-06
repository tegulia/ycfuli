/**
 * Created by tegulia on 2014/10/12.
 */

$(document).ready(
	function(){
	
	$('#shouye').click(function(){
		//window.location.reload()
		location.href='/index.html'
	})
	

	function myClick(xinwenid){
		
		/* Try to use Jekyll
		window.event.returnValue = false;
        $('#maincontent').fadeOut(200,function(){
            $('#othercontent').fadeOut(100,function(){ $('#othercontent').load('web/'+xinwenid+'.htm');
                $('#othercontent').fadeIn();});});
			*/
		location.href='/web/'+xinwenid+'/'
	}
	
	$('#imgADPlayer > :not(ul)').click(function(event){
        event.preventDefault();
		var xinwenid=$('#imgADPlayer h1 a').attr('id')
		
		myClick(xinwenid);
		})
	$('#kaiye').click(function(){
		myClick('kaiye');
	});
	
	$('#yingchengshouchuangfuliyuangongjianminyingmoshi').click(function(){
		myClick('yingchengshouchuangfuliyuangongjianminyingmoshi')
	});
	$('#chongyangjiehuodong').click(function(){
		myClick('chongyangjiehuodong');
	});
	$('#yingchengtianshiyunleyuanyanglaoyuantanfang').click(function(){
		myClick('yingchengtianshiyunleyuanyanglaoyuantanfang')
	});
	$('#yingchengxintianshehuifulizhongxin').click(function(){
		myClick('yingchengxintianshehuifulizhongxin')
	});

$('#lingdaoguanhuai').click(function(){
		myClick('lingdaoguanhuai')
	});

//使用jekyll啦～～动态直接生成静态页面
    $('#lianxiwomen').click(function(event){
       myClick('lianxiwomen')

            

    });

	    $('#zhaopinqishi').click(function(event){
       myClick('zhaopinqishi')

            

    });
	
    $('#fuwuneirong').click(function(event){
        myClick('fuwuneirong');



    });

    $('#juzhuhuanjing').click(function(event){
        myClick('juzhuhuanjing')



    });
	
    $('#ruyuanxuzhi').click(function(event){
        myClick('ruyuanxuzhi');


    });
    $('#xinwenhuodong').click(function(event){
        myClick('xinwenhuodong');


    });
	/*

    $('#imgADPlayer').children().click(function(event){
        event.preventDefault();
        $('#maincontent').fadeOut(200,function(){
            $('#othercontent').fadeOut(100,function(){ $('#othercontent').load('web/huanjing.htm');
                $('#othercontent').fadeIn();});});

        })
	*/
		
	
		
    });


