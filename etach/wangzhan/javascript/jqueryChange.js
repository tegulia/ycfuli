/**
 * Created by tegulia on 2014/10/12.
 */

$(document).ready(
	function(){
	
	$('#shouye').click(function(){
		window.location.reload()
	})
	

	function myClick(xinwenid){
		
		
		window.event.returnValue = false;
        $('#maincontent').fadeOut(200,function(){
            $('#othercontent').fadeOut(100,function(){ $('#othercontent').load('web/'+xinwenid+'.htm');
                $('#othercontent').fadeIn();});});
			
		
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


    $('#contactus').click(function(event){
       myClick('contactus')

            

    });

	    $('#zhaopin').click(function(event){
       myClick('zhaopin')

            

    });
	
    $('#fuwu').click(function(event){
        myClick('fuwu');



    });

    $('#huanjing').click(function(event){
        myClick('huanjing')



    });
	
    $('#xuzhi').click(function(event){
        myClick('xuzhi');


    });


    /*$('#imgADPlayer').children().click(function(event){
        event.preventDefault();
        $('#maincontent').fadeOut(200,function(){
            $('#othercontent').fadeOut(100,function(){ $('#othercontent').load('web/huanjing.htm');
                $('#othercontent').fadeIn();});});

        })*/
		
		
		
    });


