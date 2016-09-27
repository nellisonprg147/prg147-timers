var $ = function (id) {
    return document.getElementById(id);
};

//declare variables and arrays

var timer;
var currentSlide = 0;
var image = new Image();
var images = [ "images/image01.jpg" , "images/image02.jpg" , "images/image03.jpg" , "images/image04.jpg" , "images/image05.jpg" ,
                "images/image06.jpg" , "images/image07.jpg" , "images/image08.jpg" , "images/image09.jpg" , "images/image10.jpg"];

var captions = ["We saw quite a few water falls. One of the coolest things was the sound. No city noises, just the wind, and the water bouncing off the rocks.",
                "Some of the natural formations are proof that water takes its time and shapes the earth." ,
                "Just stopping by to say hello" ,
                "Paducah Kentucky was just over the border and was worth the visit." ,
                "Moonshine has a rich history in Kentucky, and colorful stories of the moon shiners tiring to out run and out smart the Feds." ,
                "We saw a variety of stills from the backyard style to the large production of whiskey" ,
                "It felt like a good time for a selfie, every year we plan a trip. Life gets busy, but we make time once a year to have fun." ,
                "We ran into some free roaming peacocks. They can be heard form miles away" ,
                "Camel Rock was named for a good reason. It really looks like a camel." ,
                "The size of the rock formations are larger than life."];

var titles = ["Waterfalls" , "Water is patient", "The locals" , "PADUCAH" , "Moon Shine Museum" , "Moon shine Still" ,
              "Downtown Paducah" ,  "Peacocks" , "Camel Rock" , "Hanging out at Camel Rock"];


var count = images.length;

//functions


// loading photos
var preload = function()
{
    for ( var i = 0; i < count; i++)
    {
        images.src = image[i];
        images.push(images);
    }
}

//play pause button
var slidecontrol = function ()
{
    var path=$("control").src;
    //alert (path);
    var testState = new RegExp("play");
    if(testState.test(path))
    {
        $("control").src = "images/pause.png";
        displayImage();
    }
    else
    {
        $("control").src = "images/play.png";
        clearTimeout(timer);
    }

}

// Image, title, captions changes page by page
var displayImage = function()
{
    if (currentSlide > 9)
    {
        currentSlide = 0;
    }
    $("main_image").src = images[currentSlide];
    $("title").innerHTML =titles[currentSlide];
    $("caption").innerHTML =captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 5000); // controls the time of each slide
}



// function calls to load photos
window.onload = function()
{
    preload();

}