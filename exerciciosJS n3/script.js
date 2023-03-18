function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let pas = document.getElementById("txtp");
  let result = document.getElementById("res");

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert("insira um numero");
  } else {
    res.innerHTML = "contando: "; // nao esquecer de usar o =
    let i = Number(ini.value); //number é diferente de Number
    let f = Number(fim.value);
    let p = Number(pas.value);
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `; // usar crases ao inves de aspas simples
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
