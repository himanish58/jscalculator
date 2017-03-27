$(document).ready(function(){

  //this holds our first value
  var value1 = '';
  //this holds our second value
  var value2 = '';
  //this holds operation
  var operation = '';
  //this tells our buttons what should happen when clicked
  // by keeping track of previous button press

  //value will be num, op or eq
  var prev = 'num';

  var firstNum = true;
  //last val is to save value after equals has been called once
  var lastVal = 0;
  //this function returns answer doing correct operation
  function answer(val1, val2){

    if(operation === '+'){return val1 + val2;}
    if(operation === '-'){return val1 - val2;}
    if(operation === 'X'){return val1 * val2;}
    if(operation === '/'){return (val1 / val2);}
    if(operation === '%'){return val1 % val2;}
  }

  $('#ac').click(function(){
    $('.disText').html(0);
    value1 = '';
    value2 = '';
    firstNum = true;
    prev = 'num';
  });

  $('#ce').click(function(){
    $('.disText').html(0);
    value1 = '';
    value2 = '';
    firstNum = true;
    prev = 'num';
  });

  $('.operation').click(function(){
    //do this if user does third operation before equalling
    if(value1 !== '' && value2 !== ''){
    value2 = parseFloat(value2);
    value1 = answer(value1, value2);
    //save lastVal incase user wants to repeat equals
    lastVal = value2;
    //reset val2 for next time
    value2 = '';
    }

    prev = 'op';
    value1 = parseFloat(value1);
    operation = $(this).html();
    firstNum = false;
  });

  $('.num').click(function(){

    //if previous func was equals reset for new sum
    if(prev === 'eq'){
      $('.disText').html(0);
      value1 = '';
      value2 = '';
      firstNum = true;
    }

    prev = 'num';
    if(firstNum === true){
    value1 += $(this).html();
    $('.disText').html(value1);
    }
    else{
      value2 += $(this).html();
    $('.disText').html(value2);
    }
  });

  // $('#mod').click(function(){alert('This functionality will be added at a later date!... Honest!')});

  $('#equals').click(function(){
    //if last press was equals repeat last operation
    if(prev === 'eq'){
      value1 = answer(value1, lastVal);
      $('.disText').html(value1);
    }
    else{
    prev = 'eq';
    value2 = parseFloat(value2);
    value1 = answer(value1, value2);
    //save lastVal incase user wants to repeat equals
    lastVal = value2;
    //reset val2 for next time
    value2 = '';
    $('.disText').html(value1);
    }
  });
});
