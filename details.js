const getUrl = "https://striveschool-api.herokuapp.com/api/product/";

// COME RECUPERARE ID UNIVOCO MESSO IN PRECEDENZA NEL HTML
const allP = new URLSearchParams(location.search);
const idU = allP.get("id");
// FARE LA GET SPECIFICA
const getDt = function () {
  fetch(getUrl + "/" + idU, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjJhOTczOWY4NzAwMTU3YWIwOWIiLCJpYXQiOjE3NzY0MTU0MDEsImV4cCI6MTc3NzYyNTAwMX0.T9zJKAqepEH31Zqkmiexp5sH_bZIzBY5Ml-fPEFCIrM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel recupero ");
      }
    })
    .then((details) => {
      console.log(details);
      document.getElementById("spinner").classList.add("d-none");
      const rowP = document.getElementById("details");
      rowP.innerHTML = `
      <div class="col-12 col-md-6 col-lg-3>
      <div class="card">
        <img src="${details.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body text-dark bg-light border border-1 p-3">
                <h5 class="card-title">${details.name}</h5>
                <p class="card-text">${details.description}</p>
                <p class="card-text">${details.brand}-${details.price}$</p>
                <div class="d-flex justify-content-center gap-3">
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <button class="btn btn-primary" onclick="deleteObj()">🗑️Elimina</button>
                </div>
            </div>
        </div>
      </div>`;
    })
    .catch((err) => {
      console.log(err);
    });
};

getDt();

const deleteObj = function () {
  fetch(getUrl + "/" + idU, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjJhOTczOWY4NzAwMTU3YWIwOWIiLCJpYXQiOjE3NzY0MTU0MDEsImV4cCI6MTc3NzYyNTAwMX0.T9zJKAqepEH31Zqkmiexp5sH_bZIzBY5Ml-fPEFCIrM",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("eliminato");
        location.assign("./homepage.html");
      } else {
        throw new Error("errore nell'eliminazione");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
