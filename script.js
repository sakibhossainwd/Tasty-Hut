const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = meals => {
   const mealsContainer = document.getElementById('mealsContainer')
   meals.forEach( meal => {
    console.log(meal.strTags);
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
                                  <h4 class="fs-5 fw-bold text-primary">View Details</h4>
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

loadMeals()