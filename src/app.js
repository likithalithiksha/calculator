let x = document.getElementById("display-num");
function display(num){
    x.value += num;
}
function calculate(){
    try{
        x.value=eval(x.value);
    }
    catch(err){
        alert("invalid")
    }
}
function Clear(){
    x.value= "";
}
function del(){
    x.value=x.value.slice(0, -1);
}
