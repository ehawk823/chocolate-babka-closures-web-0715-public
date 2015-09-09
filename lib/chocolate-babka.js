function counterCreator(value){
  var count = value;
  return function(){
    return count += 1;
  }
}

function countAnnouncer(input, counter){
  var food = input;
  var ticket = counter();
  return function(){
    return "Now serving " + food + " number " + ticket + "!";
  }
}
