<template>
  <div>
    <input type="text" v-model="ingredient" placeholder="Add an ingredient">
    <button class="button" @click="addIngredient">Add</button>
    <ul>
      <li v-for="ing in ingredients" :key="ing">{{ ing }}</li>
    </ul>
    <button class="button" @click="searchRecipes">Search for recipes</button>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.recipe.uri">
        <h3> Name: {{ recipe.recipe.label }}</h3>
        <p>Ingredients: {{ recipe.recipe.ingredientLines.join(', ') }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
      ingredient: '',
      ingredients: [],
      recipes: []
    }
  },
  methods: {
    addIngredient() {
      if (this.ingredient) {
        this.ingredients.push(this.ingredient)
        this.ingredient = ''
      }
    },
    searchRecipes() {
        const queryParams = this.ingredients.join(',')
        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=853ee6c7&app_key=
4b22ca3bf01f1af0576e31ead66a0085&q=${queryParams}`
        axios.get(url)
        .then(response => {
        this.recipes = response.data.hits
        }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style>
li {
    list-style-type: none;
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 4px solid #00ce89;
}
button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
</style>