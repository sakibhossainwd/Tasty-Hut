const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
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
                                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
    console.log(searchText);
    loadMeals(searchText);
}

const loadmodaletails = async(idMeal) => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
    `
    try{
        const res = await fetch(url);
        const data = await res.json();
        didplaymodaletails(data);
    }
    catch(error){
        console.log(error);
    }
}

const didplaymodaletails = meal => {
    console.log(meal)
    document.getElementById('modaletailsLabel').innerText = meal.meals[0].strMeal;
    const modaletails = document.getElementById('modaletailsContainer');
    modaletails.innerHTML = `
    <h1>Name: ${meal.idMeal}</h1>
    `
}

loadMeals('fish')