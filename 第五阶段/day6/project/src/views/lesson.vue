<template>
    <div>
        <h1>课程</h1>
        <h2>{{ params.title }}</h2>
        <h2>{{ params.desc }}</h2>
    </div>
</template>

<script>
export default {
    name: 'lesson',
    data () {
        return {
            params: {}
        }
    },
    created() {
        this.params = this.$route.params
    },
}
</script>

