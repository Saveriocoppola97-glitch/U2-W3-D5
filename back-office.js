const shopUrl = "https://striveschool-api.herokuapp.com/api/product/";

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

  fetch(shopUrl, {
    method: "POST",
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
