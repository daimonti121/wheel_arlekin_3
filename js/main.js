window.onload = function () {
    var button = document.querySelector('.spin-trigger');
    button.onclick = function () {
        if ( $('.wheel__button').hasClass('first_spin') ) {
            spin_1();
        }
    };


    function spin_1 () {
        $('.wheel__button').attr('disabled','disabled');
        document.querySelector('.wheel__spinner').classList.add('wheel__spinner_animated-2');
        setTimeout(function () {
            localStorage.currentSpin = '20020_spin_2';
            $('.fewmodal').css('display','flex');
            $('#exampleModalToggle-1').css('display','flex');
            $('.wheel').css('overflow', 'hidden');
        }, 4000);
    }

    $('#popup_btn_1').click(function () {
        $('.fewmodal').css('display','none');
        $('#level-1').css('display','none');
        $('.circle-button').addClass('second_spin').removeClass('first_spin').removeAttr('disabled');
        $('.wheel__spinner').css('transform','rotate(1060deg)').removeClass('wheel__spinner_animated');

        spin_2();
    });


    // switch(localStorage.currentSpin) {
    //     case '20020_spin_2':
    //         // $('.fewmodal').css('display','flex');
    //         // $('#level-2').css('display','flex');
    //         setTimeout(function() {
    //             window.location.href = 'https://www.arlekincasino.com/en/users/sign_up' + stag;
    //         }, 5);
    //         break;
    // }

    function $_GET(e,t){return!!(t=t.match(new RegExp(e+"=([^&=]+)")))&&t[1]}
    var getStag = $_GET("stag", window.location.href);
    var stag = "?stag=" + getStag;
    console.log("STAG - " + stag);

    $('#popup__win-btn').click(function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = 'https://www.arlekincasino.com/en/users/sign_up' + stag;
    })

    $('.popup__win-btn').click(function(){
        // $('.fewmodal').css('display','none');
        $('#exampleModalToggle-1').css('display','none');
        $('.modal-backdrop').css('display','none');
    })

    $('.second_btn').click(function(){
        $('#exampleModalToggle-1').css('display','flex');
        $('.modal-backdrop').css('display','none');
    })

};
