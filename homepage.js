// ENDPOINT
const shopUrl = "https://striveschool-api.herokuapp.com/api/product/";
// Chiamata + KEY d' Autorizzazione
const getShop = function () {
  fetch(shopUrl, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjJhOTczOWY4NzAwMTU3YWIwOWIiLCJpYXQiOjE3NzY0MTU0MDEsImV4cCI6MTc3NzYyNTAwMX0.T9zJKAqepEH31Zqkmiexp5sH_bZIzBY5Ml-fPEFCIrM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response fallita");
      }
    })
    .then((data) => {
      // SPINNER SEMPRE ALLA SECONDA THEN
      document.getElementById("spinner").classList.add("d-none");
      // FINE SPINNER
      console.log("list shop", data);
      data.forEach((objObj) => {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.innerHTML = `
        <div class="card">
            <img src="${objObj.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${objObj.name}</h5>
              <p class="card-text">${objObj.description}</p>
              <p class="card-text">${objObj.brand}-${objObj.price}$</p>
              <a href="./details.html?id=${objObj._id}" class="btn btn-primary">Details</a>
            </div>
        </div>`;
        const grid = document.getElementById("gridRow");
        grid.appendChild(newCol);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getShop();
