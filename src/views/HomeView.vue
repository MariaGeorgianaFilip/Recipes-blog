<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleRecipe :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleRecipe from '../components/SingleRecipe.vue'

export default {
  name: 'HomeView',
  components: {
    SingleRecipe
  },
  data() {
    return {
      projects:[]
    }
  },
  mounted() {
    fetch(' http://localhost:3000/projects')
        .then(res=> res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }
  }
}
</script>
