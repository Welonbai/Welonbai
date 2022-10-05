var padRightTemp = document.getElementById("padRight");
var rightTemp = document.getElementById("right");
var userTemp = document.getElementsByClassName("user"); //userTemp is htmlCollection
var mainTemp = document.getElementById("main");
var rightBlock1 = document.getElementById("user1");
var rightBlock2 = document.getElementById("user2");
var rightBlock3 = document.getElementById("user3");
var rightBlock4 = document.getElementById("user4");
var rightBlock5 = document.getElementById("user5");
var rightBlock6 = document.getElementById("user6");
var whetherMultipleAnchored = false;
var whichBlockIsCentral = 6; // me is 6
var howManyBlockLeft = 6;
//有bug 如果只剩一個區塊的時候 要立刻變成大螢幕

function onlyLeftOneBlock(){
    if(howManyBlockLeft===1){
        padRightTemp.style.display = "none";
        mainTemp.style.display = "flex";
        mainTemp.style.width = "1650px";
        var buttonTemp = document.getElementById("anchoredButtonMain");
        buttonTemp.disabled = true;

        document.getElementById("centralName").innerHTML = "昇永";
        document.getElementById("centralNameDiv").style.backgroundColor = "green";
        document.getElementById("selfName").innerHTML = "你";
    }
}
function remove1(){
    rightBlock1.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}
function remove2(){
    rightBlock2.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}
function remove3(){
    rightBlock3.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}
function remove4(){
    rightBlock4.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}
function remove5(){
    rightBlock5.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}
function remove6(){
    rightBlock6.style.display = "none";
    howManyBlockLeft--;
    onlyLeftOneBlock();
}

function anchoredRight(buttonNumber){
    var tempRightCentralName = "rightCentralName" + String(buttonNumber);
    var tempRightCentralNameDiv = "rightCentralNameDiv" + String(buttonNumber);
    var tempRightLeftBottomName = "rightLeftBottomName" + String(buttonNumber);
    var tempCrossButton = "crossButton" + String(buttonNumber);
    
    var rightTemp = document.getElementById(tempRightCentralName).innerHTML;
    var centralTemp = document.getElementById("centralName").innerHTML;
    document.getElementById(tempRightCentralName).innerHTML = centralTemp;
    document.getElementById("centralName").innerHTML = rightTemp;
    
    rightTemp = window.getComputedStyle(document.getElementById(tempRightCentralNameDiv));
    centralTemp = window.getComputedStyle(document.getElementById("centralNameDiv"));
    var rightcolorTemp = rightTemp.getPropertyValue('background-color');
    var centralcolorTemp = centralTemp.getPropertyValue('background-color');
    document.getElementById(tempRightCentralNameDiv).style.backgroundColor = centralcolorTemp;
    document.getElementById("centralNameDiv").style.backgroundColor = rightcolorTemp;
    
    rightTemp = document.getElementById(tempRightLeftBottomName).innerHTML;
    centralTemp = document.getElementById("selfName").innerHTML;
    document.getElementById(tempRightLeftBottomName).innerHTML = centralTemp;
    document.getElementById("selfName").innerHTML = rightTemp;

    if(centralTemp==="你"){
        var buttonTemp = document.getElementById(tempCrossButton);
        buttonTemp.disabled = true;
        buttonTemp.style.display = "none";
    }else{
        var buttonTemp = document.getElementById(tempCrossButton);
        buttonTemp.disabled = false;
        buttonTemp.style.display = "flex";
    }
}

function anchoredFromMultipleToOne(rightblockNumber){
    if(whetherMultipleAnchored === true){
        mainTemp.style.display = "flex";

        var tempUser = "user" + String(rightblockNumber);
        var tempBlock = document.getElementById(tempUser);
        tempBlock.style.display = "none";
        whichBlockIsCentral = rightblockNumber;

        rightTemp.style.width = "400px";
        rightTemp.style.height = "550px";
        padRightTemp.style.width = "450px";

        for (var i = 0; i < userTemp.length; i++){
            userTemp[i].style.width = "180px";
            userTemp[i].style.height = "160px";
        }
        whetherMultipleAnchored = false;
    }
}
function anchoredRight1(){
    anchoredFromMultipleToOne(1);
    anchoredRight(1);
}
function anchoredRight2(){
    anchoredFromMultipleToOne(2);
    anchoredRight(2);
}
function anchoredRight3(){
    anchoredFromMultipleToOne(3);
    anchoredRight(3);
}
function anchoredRight4(){
    anchoredFromMultipleToOne(4);
    anchoredRight(4);
}
function anchoredRight5(){
    anchoredFromMultipleToOne(5);
    anchoredRight(5);
}
function anchoredRight6(){
    var tempBlock = document.getElementById("rightLeftBottomName6");

    anchoredFromMultipleToOne(6);
    anchoredRight(6);
}

function anchoredMain(){
    console.log(howManyBlockLeft);
    whetherMultipleAnchored = true;
    mainTemp.style.display = "none";
    rightTemp.style.height = "750px";
    rightTemp.style.width = "1650px";
    padRightTemp.style.width = "1650px";

    for (var i = 0; i < userTemp.length; i++){
        userTemp[i].style.width = "540px";
        userTemp[i].style.height = "360px";
    }

    var tempUser = "user" + String(whichBlockIsCentral);
    var tempBlock = document.getElementById(tempUser);
    tempBlock.style.display = "flex";

    var additionalUserTemp = document.getElementById("user6");
    additionalUserTemp.style.display = "flex";
    anchoredRight(whichBlockIsCentral);
}