/**
 * Created by KyleSaMa on 2016/9/22.
 */
window.onload = function() {
    window.onscroll = function () {
        HeightToTop();
        }
}

function HeightToTop(){
    var conGuide = document.getElementById("guide");
    var conIndex = document.getElementById("index");
    var heiTop = conGuide.offsetTop;
    var scorllTop = document.body.scrollTop;
    if(scorllTop < heiTop){
        conIndex.style.cssText = "display:none;";
    }
    else{
        conIndex.style.cssText = "display:auto;";
    }
}