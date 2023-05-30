const apiUrl = "https://api.coinlore.net/api/tickers/";

fetch(apiUrl)
  .then((response) => response.json())
  .then((responseData) => {
    if (Array.isArray(responseData?.data)) {
      const html = responseData?.data
        .map((item) => createCryptoCard(item))
        .join("");
      document.getElementById("cryptoContainer").innerHTML = html;
    } else {
      console.log("Invalid API response format");
    }
  })
  .catch((error) => {
    console.log(error);
  });

// Function to create HTML for each crypto card
// I am using BTC logo as fallback image, since there is no image data from API.
function createCryptoCard(crypto) {
  return `
    <div class="cryptocard d-flex flex-column justify-content-evenly">
      <div class="d-flex align-items-center gap-2">
        <img class="cryptocard__logo" src="assets/${crypto.symbol.toLowerCase()}.png" onerror="this.src='assets/btc.png';" alt="${
    crypto.symbol
  }_icon" />
        <h6 class="cryptocard_title">${crypto.symbol}</h6>
        <div class="cryptocard__badge text-truncate">
          <p class="cryptocard__badgetext">${crypto.name}</p>
        </div>
      </div>
      <div class="cryptocard__divider"></div>
      <p class="cryptocard__price">$${crypto.price_usd}</p>
      <span class="d-flex align-items-center gap-1">
        <i class="cryptocard__uparrow fa-sharp fa-solid fa-circle-chevron-up"></i>
        <small class="cryptocard__percentage">%${
          crypto.percent_change_7d
        }</small>
      </span>
    </div>
  `;
}
