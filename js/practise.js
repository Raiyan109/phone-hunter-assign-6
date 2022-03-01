<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> Name : ${phone.phone_name}</h5>
              <p class="card-text">Brand : ${phone.brand}</p>
              <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
            </div>
          </div>
        </div>
      </div>









      <div class="row  row-cols-1 row-cols-md-3 g-4">
      <div class="col-lg-4">
          <div class="card h-100">
              <img style="width: 10rem;" src="${phone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h2 class="card-title"> Name : ${phone.phone_name}</h2>
                  <p class="card-text">Brand : ${phone.brand}</p>
                   <button onclick="seeDetails('${phone.slug}')" class="btn btn-success">Explore</button>
              </div>

          </div>
      </div>
  </div>