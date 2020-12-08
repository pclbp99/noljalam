$(function(){
    /*menu slide*/
    $('.menu > li').each(function(){
        var a = $(this).find('ul');
        $(this).hover(function(){
            a.css({'background-color':'#f5f5f5'});
            $('.menu > li > ul').stop().slideDown();
        }, function(){
            a.css({'background-color':'#fff'});
            $('.menu > li > ul').stop().slideUp();
        });
    });
    
    $('.menu > li > ul').each(function(){
        var a2 = $(this).siblings('a');
        $(this).hover(function(){
            a2.css({'color':'#468fe2'});
        },function(){
            a2.css({'color':'#333'});
        });
    })
    
    
    /*service box hover*/
    $('.ser_r ul li').each(function(){
        var b = $(this).find('p');
        $(this).hover(function(){
            b.css({'color':'#468fe2'});
        },function(){
            b.css({'color':'#333333'});
        });
    });
    
    /*submenu select*/
    $('.sel_box').each(function(){
        $(this).hover(function(){
            $(this).css({'overflow':'visible'});
        },function(){
            $(this).css({'overflow':'hidden'});
        });
    });
    
    /*sub010301,sub010302 tab*/
    $('.c_btn ul li').each(function(){
        $(this).click(function(){
            $('.c_btn ul li').removeClass('on');
            $(this).addClass('on');
            $('.c_pic ul li').fadeOut('fast');
            var c = $(this).attr('rel');
            $('.' + c).fadeIn('slow');
        });
    });
    
    
    /*sub0301,sub0302,sub0303 program button*/
    $('.grp_prg li div:nth-child(2)').each(function(){
        var d = $(this).find('p');
        var e = $(this).find('a');
        $(this).hover(function(){
            d.stop().fadeOut();
            e.stop().fadeIn();
        },function(){
            d.stop().fadeIn();
            e.stop().fadeOut();
        });
    });
    
    
    /*m_menu*/
    $('#m_menu_on').click(function(){
        $('.m_header').animate({right:"0"}, 500);
    });
    
    $('#m_menu_off').click(function(){
        $('.m_header').animate({right:"-60%"}, 500);
    });
    
    
    $('.m_header .m_menu > li').each(function(){
        var f = $(this).find('ul');
        $(this).click(function(){
            f.slideToggle();
        });
    });
    
    
});