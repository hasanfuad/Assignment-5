
const searchBtn = document.getElementById('searchButton')

    searchBtn.addEventListener('click',function(event){
        const input = document.getElementById('searchField').value.trim();
        event.preventDefault()

        if(!input){
            alert("Please enter your desired meal!")
        }
        else if(input.length == 1){
            const url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
            fetch(url)
            .then(res => res.json())
            .then(data => recipeDisplay(data))
        }
        else{
            const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
            fetch(url)
            .then(res => res.json())
            .then(data => recipeDisplay(data))
        }

    })


const recipeDisplay=((items)=>{
    const recipe = document.getElementById('recipe');

    items.meals.map(item=> {
        const recipeContainer = document.createElement('div');
        // console.log(item);

        recipeContainer.className = "recipeItem"
        
        const recipeInfo = `<img onclick="recipeDetails(${item.idMeal})" src="${item.strMealThumb}"/>
                            <h1 class="recipeTitle">${item.strMeal}</h1>
        `
        recipeContainer.innerHTML = recipeInfo;

        recipe.appendChild(recipeContainer)
    })
})

const recipeDetails = ((data)=>{

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;

    fetch(url)
    .then(res => res.json())
    .then(data => recipeIngredients(data))
    
})

const recipeIngredients = ((data)=>{
    const recipeIngredients = document.getElementById('recipeIngredients');

    data.meals.map((items)=>{
        const ingredientsDiv = document.createElement('div')

        const ingredientsInfo = `<ul>
                                <h3>Ingredients</h3>
                                <li>${items.strIngredient1}</li>
                                <li>${items.strIngredient2}</li>
                                <li>${items.strIngredient3}</li>
                                <li>${items.strIngredient4}</li>
                                <li>${items.strIngredient5}</li>
                                <li>${items.strIngredient6}</li>
                                <li>${items.strIngredient7}</li>
        </ul>`

        ingredientsDiv.innerHTML = ingredientsInfo;
        recipeIngredients.appendChild(ingredientsDiv)
    })
})

