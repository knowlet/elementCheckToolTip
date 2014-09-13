// use strict;
var mouse = {
    x: 0,
    y: 0
};
var mouseClick = false;
var currentElement = null;
var body = document.getElementsByTagName('body')[0];
//document.onmousedown
function mouseTooltip(e, callback) {

    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;

    if (mouseClick === true) return;
    currentElement = document.elementFromPoint(mouse.x, mouse.y);
    console.log(currentElement);
    var content = "";



    for (var i = 0, atts = currentElement.attributes, n = atts.length, arr = []; i < n; i++) {
        content += atts[i].nodeName + " : <input type='text' name=" + atts[i].nodeName + " value= ' "  + atts[i].value + "'> <br>";
    }
    content += "innerTexture : <input type='text' name='innerText' value='" + currentElement.innerText + "'> <br>";
    currentElement.innerHTML += " <span class=" + "coupontooltip" + ">" + content + "</span>";
    for (var i = 0, atts = currentElement.attributes, n = atts.length, arr = []; i < n; i++) {
        var node = atts[i];
        document.getElementsByName(node.nodeName)[0].onchange = function(e) {
            console.log(e.srcElement.value);
            currentElement.setAttribute(e.srcElement.name, e.srcElement.value);
        }
    }
    document.getElementsByName("innerText")[0].onchange = function(e) {
        currentElement.innerText = document.getElementsByName("innerText")[0].value;
    }
    mouseClick = true;
    document.getElementsByClassName('coupontooltip')[0].ondblclick = function() {
        document.getElementsByClassName('coupontooltip')[0].remove();
        mouseClick = false;
    }
}
document.onmousedown = mouseTooltip;
