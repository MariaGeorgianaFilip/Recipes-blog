<template>
    <div class="project">
        <div class="actions">
            <h4>{{ project.title }}</h4>
            <div class="icons">
                <router-link :to="{ name:'EditProjects', params: { id: project.id }}">
                    <span class="material-symbols-outlined">edit</span>
                </router-link>
                <span @click="deleteProject" class="material-symbols-outlined">delete</span>
            </div>
        </div>
        <div class="details">
            <h5>Ingredients:{{ project.details }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            uri: 'http://localhost:3000/projects' + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.uri, {method:'DELETE'})
            .then(()=> this.$emit('delete', this.project.id))
            .catch(err =>console.log(err.message))

        }
    }
}
</script>

<style lang="scss">
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    border-left: 4px solid #00ce89;
}
h3 {
    cursor: pointer;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
    color: #bbb;
}
.material-symbols-outlined:hover {
    color: #777;
}
</style>