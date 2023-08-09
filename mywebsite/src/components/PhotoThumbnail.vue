<template>
    <div class="container">
        <p class="title"> {{ getName() }} </p>
        <img v-bind:src='getImage()'/>
    </div>
</template>
<script>
export default {
    name: "PhotoThumbnail",
    props: {
        file: String,
    },
    data() {
        return {
            fileDirectory: "",
        }
    },
    mounted() {
        this.getImage();
    },
    methods: {
        getImage() {
            // NOTE: This will only allow png files
            return require("../assets/photography/" + this.file);
        },
        getName() {
            return /^.*(?=(\.))/.exec(this.file)[0];
        }
    },
}
</script>
<styles scoped src="../css/PhotoThumbnail.css"/>