var command = process.argv[2];
var value = parseInt(process.argv[3]);
var fs = require('fs');
var total = 0;

function appendToFile(value){
  fs.appendFile('bank.txt', value.toString() + ',' , function(error){
    if(error) console.log("Error occured when appending");
  })
}

function printTotal(){
  fs.readFile('bank.txt', 'utf8', function(err, data){
      var dataArray = data.split(',');
      dataArray.forEach(function(item){
        if(item){
          total += parseInt(item);
        }
      })
      console.log(total);
  });
}


  switch(command){

    case 'total':

      printTotal()

    break;
    case 'deposit':

      appendToFile(value);
      printTotal();

    break;
    case 'withdraw':

      value = value * -1
      appendToFile(value);
      printTotal();

    break;
    case 'lotto':

      appendToFile(-.25)
      
    break;
    default:
    console.log('Not a recognized command');


  }
