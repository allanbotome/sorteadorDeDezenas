function gerarDezenas() {
  var op = parseInt(document.getElementById('option').value);

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
