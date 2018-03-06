$(".menu ul li ul").hide();


if($(window).width() >1000)
{

    $(".menu ul li").bind('mousemove', function()
        {   
            $(this).children("ul").fadeIn(300);
        }
    );
    $(".menu ul li").bind('mouseleave',function()
        {
            $(this).children("ul").fadeOut(300);
        }
    );
}
else
{
    $(".menu ul li").unbind("mousemove");
    $(".menu ul li").unbind("mouseleave");

    var show1 = 0;
    var show2 = 0;

    $(".menu ul li").bind('click', function()
        {   
            if(show1 == 0){
                $(this).children("ul").slideDown();
                show1 = 1;
            }
            else
            {
                $(this).children("ul").slideUp();
                show1 = 0;
            }
        }
    );
    $(".menu ul li ul li").bind('click', function()
        {   
            if(show2 == 0){
                $(this).children("ul").slideDown();
                show2 = 1;
            }
            else
            {
                $(this).children("ul").slideUp();
                show2 = 0;
            }
        }   
    );
    $(".icon-menu").on('click', function()
        {
            $('body').toggleClass('body2');
        }
    );
}

$(window).resize(function()
    {    
        if($(window).width() >1000)
        {
            $(".menu ul li").unbind("click");
            $(".menu ul li ul li").unbind("click");

            $(".menu ul li ul").hide();


            $(".menu ul li").bind('mousemove', function()
                {   
                    $(this).children("ul").fadeIn(300);
                }
            );
            $(".menu ul li").bind('mouseleave',function()
                {
                    $(this).children("ul").fadeOut(300);
                }
            );
        }
        else
        {
            $(".menu ul li").unbind("mousemove");
            $(".menu ul li").unbind("mouseleave");

            var show1 = 0;
            var show2 = 0;

            $(".menu ul li").bind('click', function()
                {   
                    if(show1 == 0){
                        $(this).children("ul").slideDown();
                        show1 = 1;
                    }
                    else
                    {
                        $(this).children("ul").slideUp();
                        show1 = 0;
                    }
                }
            );
            $(".menu ul li ul li").bind('click', function()
                {   
                    if(show2 == 0){
                        $(this).children("ul").slideDown();
                        show2 = 1;
                    }
                    else
                    {
                        $(this).children("ul").slideUp();
                        show2 = 0;
                    }
                }   
            );
        }
        $(".icon-menu").on('click', function()
            {
                $('body').toggleClass('body2');
            }
        );
    }
);

