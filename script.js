var elated = ["http://media.gettyimages.com/photos/middleaged-man-elated-with-beard-picture-id520325149?s=170667a&w=1007", "https://i.pinimg.com/236x/39/eb/44/39eb44be58fbde6fe3e2d9300628d562--electronic-dictionary-emotion.jpg"];

var exhausted = ["https://img.buzzfeed.com/buzzfeed-static/static/2014-11/11/17/enhanced/webdr11/longform-original-32167-1415746043-14.jpg?downsize=700:*&output-format=auto&output-quality=auto","https://image.shutterstock.com/image-photo/exhausted-tired-asian-business-woman-260nw-696252832.jpg","https://i.dailymail.co.uk/i/pix/2011/10/02/article-2044443-0E28CB8200000578-163_634x526.jpg"];

var inLove = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtX8oKYxVJqEJAiV-zGnsKKDCRji_CtI4Mg4KHtKryD4KLeDtc","https://www.emojirequest.com/images/InLoveEmojiRed.jpg","http://dutchflownow.nl/wp-content/upload_folders/dutchflownow.nl/2018/01/love-in-Dutch.jpg"];

var melancholy = ["https://thebachflower.com/wp-content/uploads/2018/08/urban_melancholy_by_since91-d4sqhdf.jpg","https://static.enotescdn.net/images/Ode%20on%20Melancholy.jpg"];

$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "elated") {
        showElated();
    }else if(input === "in love") {
        showInLove();
    }else if(input === "exhausted") {
        showExhausted();
    }else if(input === "melancholy") {
        showMelancholy();
    }else {
        alert("Make sure the answers are typed as they are shown!");
    }

});
function showMelancholy() {
    changeBackgroundColor("#c0c0c0");
    displayImage(melancholy);
}
function showExhausted() {
    changeBackgroundColor("#0CE915");
    displayImage(exhausted);
}

function showInLove() {
    changeBackgroundColor("#CE507C");
    displayImage(inLove);
}

function showElated() {
    changeBackgroundColor("orange");
    displayImage(elated);
}

function changeBackgroundColor(color) {
    $('body').css('background-color', color);
}

function displayImage(images) {
    $(".images").hide();
    
    images.forEach(function(image) {
        $('.images').append('<img src =' + image + '>');        
    });
    
    $(".images").fadeIn();
}
