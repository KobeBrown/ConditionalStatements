var containerEle=document.body.querySelector(".container");
var num1=Number(prompt("Enter a number"));
if (isNaN(num1)==false){
  var num2= Number(prompt("Enter another number"));
  if(isNaN(num2)==false){
    var operator=prompt("Choose an operator:+,-,*,/");
    if(operator=="+"){
      answer=num1+num2;
      containerEle.innerHTML="The answer is "+answer;
    }else if (operator=="-"){
      answer=num1-num2;
      containerEle.innerHTML="The answer is "+answer;
    }else if(operator=="*"){
    answer=num1*num2;
      containerEle.innerHTML="The answer is "+answer;
    }else if(operator=="/"){
      answer=num1/num2
    containerEle.innerHTML="The answer is "+answer;
    }else{
        containerEle.innerHTML="Invalid operator";
      }
      }else{
        containerEle.innerHTML="Invalid number 2";
      }
    }else{
    containerEle.innerHTML="Invalid number 1";
  }