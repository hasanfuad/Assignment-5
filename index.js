

const loadData = (()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => {
        const transformToArray = Object.entries(data)
        recipeDisplay(transformToArray)
    })
})

loadData();

const recipeDisplay=((items)=>{
    // const recipe = document.getElementById('recipe');

    items.map(item=> console.log(item[1]))
})

