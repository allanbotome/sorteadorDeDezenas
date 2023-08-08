function gerarDezenas() {
  var op = parseInt(document.getElementById('option').value);

  if (isNaN(op) || op < 6 || op > 15) {
    alert('Selecione uma quantidade válida de dezenas (entre 6 e 15).');
    return;
  }

  var nums = [];

  while (nums.length < op) {
    var num = Math.floor(Math.random() * 60) + 1;
    if (nums.indexOf(num) === -1) {
      nums.push(num);
    }
  }

  nums.sort(function(a, b) {
    return a - b;
  });

  document.getElementById('num').innerHTML = nums.join(' - ');
}