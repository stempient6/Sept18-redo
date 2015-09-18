var li_list = document.getElementsByTagName('li');

var loop_all = function(){
    for (var i= 0; i < li_list.length; i++){
        li_list[i].addEventListener('click',function(){
            fu_click(this);
        });
        li_list[i].addEventListener('mouseover',function(){
            fu_hover(this);
        });
        li_list[i].addEventListener('mouseleave',function(){
            fu_mouse_leave(this);
        });
    }
};


var fu_click= function(){

};

var fu_hover= function(target){
    target.classList.add("hover");
    make_minus(target);
};

var fu_mouse_leave= function(target){
    target.classList.remove("hover");
    remove_minus(target);
};

loop_all();


function make_minus(target){
    if (target.classList.contains('title') || target.classList.contains('form')){return;}
    if (target.children.length<1){
    var new_minus = document.createElement('div');
    target.appendChild(new_minus);
    new_minus.innerText = "-"; 
    new_minus.classList.add("minus");
    }
};

function remove_minus(target){
    if (target.children.length==1) {
        target.removeChild(target.children[0])
    };
}