  $(document).ready(function() {
    $('#laptop').show().addClass('animated fadeInUp');
    setTimeout(function () {
        $('#headline').show().addClass('animated fadeInUp').removeClass('none');}, 200
    );
    setTimeout(function () {
        $('#tag-line').show().addClass('animated fadeInUp').removeClass('none');}, 300
    );
    setTimeout(function () {
        $('#features,#download').show().addClass('animated fadeIn').removeClass('none');}, 600
    );
    navigator.sayswho= (function(){
          var ua= navigator.userAgent,
          M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          if(M[1]=== 'Chrome'){
            setTimeout(function () {
                    $('#chat-base').show().addClass('animated fadeIn').removeClass('none');}, 1500
                );
                setTimeout(function () {
                    $('#chat-item-left').show().addClass('animated fadeIn').removeClass('none');}, 2200
                );
                setTimeout(function () {
                    $('#chat-item-right').show().addClass('animated fadeIn').removeClass('none');}, 2800
                );
                setTimeout(function () {
                    $('#heart').show().addClass('animated fadeInRight').removeClass('none');}, 3200
                );
          }
    })();
    
    setTimeout(function () {
        $('#main-fm').show().addClass('animated fadeIn').removeClass('none');}, 3700
    );
    setTimeout(function () {
        $('#heart-2').show().addClass('animated fadeInRight').removeClass('none');}, 4200
    );
    setTimeout(function () {
        $('#stt').show().addClass('animated fadeInLeft').removeClass('none');}, 4300
    );
    setTimeout(function () {
        $('#heart-4').show().addClass('animated fadeInLeft').removeClass('none');}, 4800
    );
  });