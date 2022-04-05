// 11_Color.js

var coworkers = {
    "programmer" : "egoing",
    "designer" : "leezche"
};

document.write(coworkers.programmer + '<br>');
document.write(coworkers.designer + '<br>');

coworkers.bookkeeper = "duru";
document.write(coworkers.bookkeeper + '<br>');

coworkers["data scientist"] = "taeho";
document.write(coworkers["data scientist"] + '<br>');

coworkers.showAll = function(){
    for (var key in this){
        if(key != 'showAll'){ document.write(key + ' : ' + this[key] + '<br>'); }
    }
}