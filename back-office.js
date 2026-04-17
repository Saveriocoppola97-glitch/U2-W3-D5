const shopUrl = "https://striveschool-api.herokuapp.com/api/product/";
// MODIFICA DEL PRODOTTO
const allP = new URLSearchParams(location.search);
const idU = allP.get("id");

if (idU) {
  fetch(shopUrl + "/" + idU, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjJhOTczOWY4NzAwMTU3YWIwOWIiLCJpYXQiOjE3NzY0MTU0MDEsImV4cCI6MTc3NzYyNTAwMX0.T9zJKAqepEH31Zqkmiexp5sH_bZIzBY5Ml-fPEFCIrM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel recupero details");
      }
    })
    .then((details) => {
      const nameInput = document.getElementById("name");
      const descriptionInput = document.getElementById("description");
      const brandInput = document.getElementById("brand");
      const priceInput = document.getElementById("price");
      const imageInput = document.getElementById("imageUrl");
      const buttonMod = document.getElementById("btnMod");
      buttonMod.innerText = "Modifica";

      nameInput.value = details.name;
      descriptionInput.value = details.description;
      brandInput.value = details.brand;
      priceInput.value = details.price;
      imageInput.value = details.imageUrl;
    })
    .catch((err) => {
      console.log(err);
    });
}

class objPrd {
  constructor(_name, _description, _brand, _price, _imageUrl) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
}

const form = document.getElementById("form-obj");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const priceInput = document.getElementById("price");
  const imageInput = document.getElementById("imageUrl");
  const name = nameInput.value;
  const description = descriptionInput.value;
  const brand = brandInput.value;
  const price = Number(priceInput.value);
  const image = imageInput.value;
  const newObj = new objPrd(name, description, brand, price, image);
  console.log(newObj);

  let urlUse;
  if (idU) {
    urlUse = shopUrl + "/" + idU;
  } else {
    urlUse = shopUrl;
  }

  fetch(urlUse, {
    method: idU ? "PUT" : "POST",
    body: JSON.stringify(newObj),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjJhOTczOWY4NzAwMTU3YWIwOWIiLCJpYXQiOjE3NzY0MTU0MDEsImV4cCI6MTc3NzYyNTAwMX0.T9zJKAqepEH31Zqkmiexp5sH_bZIzBY5Ml-fPEFCIrM",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Save Obj");
        form.reset();
      } else {
        throw new Error("il server ha rifiutato l'obj");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
