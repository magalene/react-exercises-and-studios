let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(rating) {
  function GiveRating() {
   rating >= 1 && rating<= 5 ? <h3>{stars[rating - 1]}</h3> : null
    return GiveRating();
 }

}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
