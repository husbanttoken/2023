var lastId,topMenu=$("nav.onepage, .footer-menu.onepage"),topMenuHeight=$("header").height();menuItems=topMenu.find("a"),scrollItems=menuItems.map((function(){})),menuItems.click((function(e){var t=$(this).attr("href"),n="#"===t?0:$(t).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:n},900),e.preventDefault()})),$(window).scroll((function(){var e=$(this).scrollTop()+topMenuHeight,t=scrollItems.map((function(){if($(this).offset().top<e)return this})),n=(t=t[t.length-1])&&t.length?t[0].id:"";lastId!==n&&(lastId=$(),menuItems.parent().removeClass("active").end().filter("[href=#"+n+"]").parent().addClass("active")),$(window).scroll((function(){$(window).scrollTop()>topMenuHeight?$("header").addClass("fixed"):$("header").removeClass("fixed")}))}));