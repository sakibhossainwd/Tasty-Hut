const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = meals => {
   const mealsContainer = document.getElementById('mealsContainer');
   mealsContainer.innerHTML = '';
   meals.forEach( meal => {
    // console.log(meal.strTags);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="col">
                    <div class="card" style="max-width:auto;">
                        <div class="row g-0">
                          <div class=" col-sm-12 col-md-4 col-lg-4">
                            <img src="${meal.strMealThumb}" class=" card-img-top rounded-start" alt="...">
                          </div>
                          <div class="col-sm-12 col-md-8 col-lg-8 d-flex align-items-center">
                            <div class="card-body">
                              <h4 class="fw-bold">${meal.strMeal}</h4>
                                  <p class="fs-5">Category: ${meal.strCategory}</p>
                                  <p class="fs-5">Tags: ${meal.strTags}</p>
                                  <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#mealDetails">
    View Details
  </button>
  
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
    `
    mealsContainer.appendChild(div)
    // console.log(mealsContainer);
   })
}

const serachMeals = () => {
    const searchText = document.getElementById('seach-Field').value;
    loadMeals(searchText);
}

const loadMealDetails = idMeal => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data))
}

const displayMealsDetails = meal => {
    const mealLabel = document.getElementById('mealDetailsLabel');
    console.log(meal.meals[0].strMeal);
    mealLabel.innerText = meal.meals[0].strMeal;
    const modalDetails = document.getElementById('modal-container');
    modalDetails.innerHTML = `
    <h4>ID: ${meal.meals[0].idMeal}</h4> </br>
        <h4>Category: ${meal.meals[0].strCategory}</h4> </br>
        <img src="${meal.meals[0].strMealThumb}" class="card-img-top img-fluid">
        <a class="btn btn-danger mt-2" href="${meal.meals[0].strYoutube}" target="_blank">Youtube: </a>
    `
}


loadMeals('fish')