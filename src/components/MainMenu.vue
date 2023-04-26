<script>
export default {
    name: "MainMenu",
    data() {
        return {
            menu: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"]
        }
    }
}
</script>


<template>
    <nav class="d-flex">
        <div class="dropdown-center mx-2" v-for="option in menu">
            <button class="dropdown-toggle border border-0 bg-transparent" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ option }}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
nav {
    .dropdown-center button {
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 500;
    }
}
</style>