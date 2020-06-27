function write_value(num){
    var result = document.getElementById("result");
    result.value += num;
    cal(result.value);
}
function cal(val){
    var answer = document.getElementById('calculation');
    ans = eval(val);
    answer.value = ans;
}

function clear_result(){
    var result = document.getElementById("result");
    result.value = ""; 
    var ans = document.getElementById("calculation");
    ans.value = ""; 
}

function clear_digit(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,-1);

}

function upon(){
     var answer = document.getElementById('calculation');
     answer.value = 1/answer.value;
     console.log(answer.value);
}

function square(){
    var answer = document.getElementById('calculation');
    answer.value = answer.value * answer.value;
}

function under_root(){
    var answer = document.getElementById('calculation');
    answer.value = Math.sqrt(answer.value);
}
