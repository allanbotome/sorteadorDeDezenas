function gerarDezenas() {
  var qnt = 0;
  var nums = [];
  var op = document.getElementById('option').value;

  while(qnt<op){
    var num = Math.round((Math.random()*100)+1);
      if(num<60){
       nums[qnt] = num;
       qnt = qnt+1;
    }
  }


  switch (op) {
    case '6':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]
    break;
    case '7':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]
    break;
    case '8':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]
    break;
    case '9':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]
    break;
    case '10':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]
    break;
    case '11':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]+" - "+nums[10]
    break;
    case '12':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]+" - "+nums[10]+" - "+nums[11]
    break;
    case '13':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]+" - "+nums[10]+" - "+nums[11]+" - "+nums[12]
    break;
    case '14':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]+" - "+nums[10]+" - "+nums[11]+" - "+nums[12]+" - "+nums[13]
    break;
    case '15':
      document.getElementById('num').innerHTML = nums[0]+" - "+nums[1]+" - "+nums[2]+" - "+nums[3]+" - "+nums[4]+" - "+nums[5]+" - "+nums[6]+" - "+nums[7]+" - "+nums[8]+" - "+nums[9]+" - "+nums[10]+" - "+nums[11]+" - "+nums[12]+" - "+nums[13]+" - "+nums[14]
    break;
    default:
      alert('Selecione uma quantidade de dezenas');
  }
}
