
let searchInput = document.getElementById('search-input')
let cards = document.querySelector('.cards')
let btn = document.getElementById('btn');


const fetchData = async()=>{
    if(!(searchInput.value === "")){
    let url = await fetch(`https://api.edamam.com/search?q=${searchInput.value}&app_id=91d8a4f1&app_key=b8de077196583c4da71012b186e593d2`);
    let response = await url.json();
    let txt = "";
    for(let item of response.hits){
        console.log(item.recipe)
        txt += `<div class="card" style="width: 18rem;margin: 1rem" >
        <img src="${item.recipe.image}" class="card-img-top" style="width:100%;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.recipe.label}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><span style="font-weight: 400;">Calories per serving: </span> <span style="font-weight: 600;">${(item.recipe.calories/item.recipe.yield).toString().slice(0, 5)} ${item.recipe.totalNutrients.PROCNT.unit}</span></li>
            <li class="list-group-item"><span style="font-weight: 400;">Carbs per serving: </span> <span style="font-weight: 600;">${(item.recipe.totalNutrients.CHOCDF.quantity/item.recipe.yield).toString().slice(0, 5)} ${item.recipe.totalNutrients.CHOCDF.unit}</span></li>
            <li class="list-group-item"><span style="font-weight: 400;">Fats per serving: </span> <span style="font-weight: 600;">${(item.recipe.totalNutrients.FAT.quantity/item.recipe.yield).toString().slice(0, 5)} ${item.recipe.totalNutrients.FAT.unit}</span></li>
            <li class="list-group-item"><span style="font-weight: 400;">Protein per serving: </span> <span style="font-weight: 600;">${(item.recipe.totalNutrients.PROCNT.quantity/item.recipe.yield).toString().slice(0, 5)} ${item.recipe.totalNutrients.PROCNT.unit}</span></li>
            <li class="list-group-item"><span style="font-weight: 400;">Total servings: </span> <span style="font-weight: 600;">${item.recipe.yield}</span></li>
            <li class="list-group-item"><span style="font-weight: 400;">Total calories: </span> <span style="font-weight: 600;">${item.recipe.calories}</span></li>
          </ul>
          <a href="${item.recipe.url}" target="_blank" class="btn btn-primary">Show Recipe</a>
        </div>
      </div>`
    //        txt += `  <div class="card" style="width: 18rem;margin-top: 34px;">
    //        <img src='${item.recipe.image}' class="card-img-top" alt="...">
    //        <div class="card-body">
    //          <h5 class="card-title">${item.recipe.label}</h5>
    //          <p class="card-text">Caleroeis: ${item.recipe.yield}</p>
    //          <a href="#" class="btn btn-primary">Go somewhere</a>
    //        </div>
    //    </div>`
    }
    cards.innerHTML = txt;
    searchInput.value = "";
}else{
    alert("Please feel The Search Feild!");
}
}


btn.addEventListener('click', fetchData);