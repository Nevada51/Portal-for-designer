
'use strict';
var minPrice = 333;
var maxPrice = 13333;

$( document ).ready(function() {
    $('.slider-wrapper').slick({
        infinite: false,
        speed: 300,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // variableWidth: true
    });

    $('.products-filters_list').on('click', '.products-filters_item .filters-name', function() {
      $(this)
        .closest('.products-filters_item').toggleClass('active').siblings().removeClass('active');
        // .closest('.tab_description_wrapper').find('.tab_description').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.technical-information').on('click', '.tab_item', function() {
      $(this)
        .toggleClass('active').siblings().removeClass('active')
        .closest('.technical-information').find('.tab_description').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.slider-main').slick({
      slidesToShow: 1,

      arrows: false,
      asNavFor: '.slider-nav',
      vertical: true,
      autoplay: false,

      verticalSwiping: true,
      centerMode: false,
      adaptiveHeight: true,
      infinite: false
    });



    $('.slider-nav').slick({
      slidesToShow: 4,

      asNavFor: '.slider-main',
      vertical: true,
      autoplay: false,

      verticalSwiping: true,
      centerMode: true,
      adaptiveHeight: true,
      infinite: false,

      centerPadding: 0,
      appendArrows: $('.btns-wrap'),
      nextArrow: '<button id="next" type="button" class="btn next"></button>',
      responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
        }
    ]
    });

    $('.mobile_filter_btn').on('click', '.btn', function() {
      $('.products-filters').toggleClass('open');
      $('.filter_overlay').toggleClass('open');
    })

    $('.products-filters_top').on('click', 'h3', function() {
      $('.products-filters').removeClass('open');
      $('.filter_overlay').removeClass('open');
    })

    $('.content-wrapper').on('click', '.show-full-prew', function() {
      $('.show-full-prew').toggleClass('open');
    })


    // ----- чекаут список товаров на мобильном-----
    $('.cart-prev_top').on('click', '.show-full-prew', function() {
      $('.cart-prev_list').toggleClass('open');
    });

    // --- basket buttons ---
    $('[data-quantity="plus"]').click(function(e){
      e.preventDefault();
      fieldName = $(this).attr('data-field');
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      if (!isNaN(currentVal)) {
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          $('input[name='+fieldName+']').val(0);
      }
    });
    $('[data-quantity="minus"]').click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    });

    $('.settings-item_wrapper input').on('keyup',function(){
      var $this = $(this),
          val = $this.val();
      
      if(val.length >= 1){
        $(this).closest('.settings-item_wrapper').addClass('dirty')
      }else {
        $(this).closest('.settings-item_wrapper').removeClass('dirty')
      }
    });

    $('.field_wrapper input').on('keyup',function(){
      var $this = $(this),
          val = $this.val();
      
      if(val.length >= 1){
        $(this).addClass('dirty')
      }else {
        $(this).removeClass('dirty')
      }
    });

    $('.login-page_wrapper input').on('keyup',function(){
      var $this = $(this),
          val = $this.val();
      
      if(val.length >= 1){
        $(this).closest('.login-page_wrapper').addClass('dirty')
      }else {
        $(this).closest('.login-page_wrapper').removeClass('dirty')
      }
    });

    $(".header_container").on('click', '.hamburger-menu', function() {
      $(this).toggleClass("active");
      $(".mobile-menu").addClass("active");
    });
    $(".mobile-menu_top").on('click', '.close', function() {
      console.log('work');
      $(this).closest(".mobile-menu").removeClass("active");
      $('.hamburger-menu').removeClass("active");
    });

    // --- show popups ---
    // --- ths-message ---
    $(".cashback-result").on('click', '.cashback-result_btn', function() {
      $('.overlay').addClass('open');
      $('.cashback_popup').addClass('open');
    });
    $(".cashback_popup .pop-up_btn").click(function() {
      $('.overlay').removeClass("open");
      $(this).closest(".cashback_popup").removeClass("open");
    })

    // --- exit-popup ---
    $(".cabinet_btns").on('click', '.profile', function() {
      $('.overlay').addClass('open');
      $('.exit_popup').addClass('open');
    });
    $(".exit_popup .pop-up_btn.back").click(function() {
      $('.overlay').removeClass("open");
      $(this).closest(".exit_popup").removeClass("open");
    })

    // --- basket-popup ---
    $(".cabinet_btns").on('click', '.basket', function() {
      $('.overlay').addClass('open');
      $('.basket-wrapper').addClass('open');
    });
    $(".basket-wrapper .basket_close").click(function() {
      $('.overlay').removeClass("open");
      $(this).closest(".basket-wrapper").removeClass("open");
    })

    // --- order-popup ---
    $(".cart-prev").on('click', '.cart-prev_btn', function() {
      $('.overlay').addClass('open');
      $('.order-list-wrapper').addClass('open');
    });
    $(".order-list-wrapper .basket_close").click(function() {
      $('.overlay').removeClass("open");
      $(this).closest(".order-list-wrapper").removeClass("open");
    })

    // --- price slider ---
    if($('.products-filters').length != 0){
      $(".price-slider").slider({
        min: 0,
        max: 5000,
        values: [2000, 3000],
        range: true,
        animate: "fast",
        slide : function(event, ui) {    
            $(".control-start").val(ui.values[ 0 ]);   
            $(".control-end").val(ui.values[ 1 ]);  
        }    
      });
      $(".control-start").val($(".price-slider").slider("values", 0));
      $(".control-end").val($(".price-slider").slider("values", 1));
      $(document).focusout(function() {
        var input_left = $(".control-start").val().replace(/[^0-9]/g, ''),	
        opt_left = $(".price-slider").slider("option", "min"),
        where_right = $(".price-slider").slider("values", 1),
        input_right = $(".control-end").val().replace(/[^0-9]/g, ''),	
        opt_right = $(".price-slider").slider("option", "max"),
        where_left = $(".price-slider").slider("values", 0); 
        if (input_left > where_right) { 
          input_left = where_right; 
        }
        if (input_left < opt_left) {
          input_left = opt_left; 
        }
        if (input_left == "") {
        input_left = 0;	
        }		
        if (input_right < where_left) { 
          input_right = where_left; 
        }
        if (input_right > opt_right) {
          input_right = opt_right; 
        }
        if (input_right == "") {
        input_right = 0;	
        }	
        $(".control-start").val(input_left); 
        $(".control-end").val(input_right); 
        $(".price-slider").slider( "values", [ input_left, input_right ] );
      });
      $( ".price-slider" ).slider( "option", "min", window.minPrice);
      $( ".price-slider" ).slider( "option", "max", window.maxPrice);
    }

    //--- автозаполнение ---
    var langs = ["London", "Lutsk", "Одеса", "Дніпро (Дніпропетровськ)", "Донецьк", "Ніжин"] ;

    $('#autocomplete').devbridgeAutocomplete({
      // serviceUrl: '/autocomplete/countries',
      lookup: langs
    });

});

