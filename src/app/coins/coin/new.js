const div = document.getElementById("coins");
const list = document.createDocumentFragment();
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let coins = data;

    coins.map(function (coin) {
      let ul = document.createElement("div");
      // let li = document.createElement("li");
      // let name = document.createElement("h2");
      // let email = document.createElement("span");

      // name.innerHTML = `${coin.name}` + " " + `${coin.symbol}`.toUpperCase();
      // email.innerHTML = "Rupees : " + `${coin.current_price}`;

      // ul.innerHTML = "";
      let img_src = coin.image;
      let symbol = coin.symbol;
      // console.log(img_src);
      ul.classList.add("col-lg-5");
      ul.classList.add("align-items-center");
      ul.classList.add("coin-style");

      ul.innerHTML = `<div class="row justify-content-center coin-data"><div class="col-2 d-flex text-center align-items-center"><a href="#"><img id="${symbol}-image" src="${
        coin.image
      }" width="60%"/></a></div><div class="col-5"><h6 id="${symbol}"> ${
        coin.name
      } ( ${symbol.toUpperCase()} )</h6><h4 > &#x20b9; <span id="${symbol}-price">${
        coin.current_price
      }</span> </h4></div><div class="col-5 d-flex align-items-center justify-content-around">
      <button class="btn btn-success" onClick="coinBS(this)" data-bs-toggle="modal"
      data-bs-target="#exampleModal" src="${symbol}">BUY</button>
      <button class="btn btn-danger" onClick="coinBS(this)" data-bs-toggle="modal"
      data-bs-target="#exampleModal" src="${symbol}">SELL</button></div></div>`;
      div.appendChild(ul);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

div.appendChild(list);

function searchCoin() {
  let coins = document.getElementsByClassName("coin-style");
  let input = document.getElementById("coin-input");
  filter = input.value.toUpperCase();

  for (let i = 0; i < coins.length; i++) {
    a = coins[i].getElementsByTagName("h6")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      coins[i].style.display = "";
    } else {
      coins[i].style.display = "none";
    }
  }
}

function calculateFiat() {
  let coin_p = document.getElementById("bs-coin-name").innerText;
  let entered = document.getElementById("entered-coins").value;
  coin_p = Number(coin_p);
  entered = Number(entered);
  if (entered < 0) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
  }
  coin_p = coin_p * entered;
  document.getElementById("entered-fiat").value = coin_p;
}

function calculateCrypto() {
  let coin_p = document.getElementById("bs-coin-name").innerText;
  let entered_fiat = document.getElementById("entered-fiat").value;
  coin_p = Number(coin_p);
  entered_fiat = Number(entered_fiat);
  if (entered_fiat <= 0) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
  }
  coin_p = entered_fiat / coin_p;
  document.getElementById("entered-coins").value = coin_p;
}

function coinBS(clicked_object) {
  let coin_symbol = clicked_object.getAttribute("src");
  let coin_image = document.getElementById(coin_symbol + "-image").src;
  let coin_price = document.getElementById(coin_symbol + "-price").innerText;
  let coin_name = document.getElementById(coin_symbol).innerText;
  document.getElementById("bs-coin-name").innerHTML = coin_price;
  document.getElementById("exampleModalLabel").innerHTML = coin_name;
  document.getElementById("coin-img").src = coin_image;
}
