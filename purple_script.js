var playBtn = document.getElementById('play');
var getScore = 0;
const ansArr = [
    '9:30am','helendale','central street','792','8:55am'
];
const ansArr2 = [
    '9:30AM','HELENDALE','CENTRAL STREET','792','8:55AM'
];
const ansArr3 = [
    '9:30am','Helendale','Central street','792','8:55am'
];
const ansArr4 = [
    '9:30AM','Helendale','Central street','792','8:55AM'
];
const ansArr5 = [
    '9:30am','Helendale','Central Street','792','8:55am'
];
const ansArr6 = [
    '9:30AM','Helendale','Central Street','792','8:55AM'
];

var soundSelected = document.getElementById("audio1");

var playSound = function() {
    soundSelected.play();
    $('.std_class').css({ left : -300 });
    $('.btn_class').css({ left : 400 });

    $('.bit_class').addClass('show').removeClass('hide');
    $('.script_class').addClass('show').removeClass('hide');
};

playBtn.addEventListener('click', playSound, false);

// var stopBtn = document.getElementById('stop');
// stopBtn.addEventListener('click', stopSound, false);
// var stopSound = function() {soundSelected.pause();};

$('.btn2_class').click(()=>{
    var userAns = [
        $('.place_1').val(),$('.place_2').val(),$('.place_3').val(),$('.place_4').val(),$('.place_5').val()
    ];
    console.log(userAns);
    for (var i = 0; i< ansArr.length; i++){
        if (userAns[i] == ansArr[i] || userAns[i] == ansArr2[i] || userAns[i] == ansArr3[i] || userAns[i] == ansArr4[i] || userAns[i] == ansArr5[i] || userAns[i]==ansArr6[i]){
            getScore++;
            rightAns(i);
        }else{
            wrongAns(i);
        }
    }
    $('.btn2_class').css({ backgroundColor : '#ffffff', border : '1px solid #FF0000'});
    $('.btn2_class').html('Score: '+getScore);
    setTimeout(()=>{
        $('.script_class').addClass('hide').removeClass('show');
        $('.bit_class').addClass('hide').removeClass('show');
        leadPage(userAns);
    },4e3)
});


function leadPage(userAns) {
    console.log(userAns+' '+getScore);
    $('.landing_class').addClass('show').removeClass('hide');
}



function wrongAns(i) {
    switch(i) {
        case 0:
            $('.place_1').css({ color : '#FF0000' });
            $('.place_1').val('9:30am');
            break;
        case 1:
            $('.place_2').css({ color : '#FF0000' });
            $('.place_2').val('Helendale');
            break;
        case 2:
            $('.place_3').css({ color : '#FF0000' });
            $('.place_3').val('Central Street');
            break;
        case 3:
            $('.place_4').css({ color : '#FF0000' });
            $('.place_4').val('792');
            break;
        case 4:
            $('.place_5').css({ color : '#FF0000' });
            $('.place_5').val('8:55am');
            break;
        default:
        // code block
            break;
    }
}

function rightAns(i) {
    switch(i) {
        case 0:
            $('.place_1').css({ color : '#00FF00' });
            break;
        case 1:
            $('.place_2').css({ color : '#00FF00' });
            break;
        case 2:
            $('.place_3').css({ color : '#00FF00' });
            break;
        case 3:
            $('.place_4').css({ color : '#00FF00'});
            break;
        case 4:
            $('.place_5').css({ color : '#00FF00' });
            break;
        default:
            // code block
            break;
    }
}







