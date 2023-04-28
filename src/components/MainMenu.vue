<script>
export default {
    name: "MainMenu",
    data() {
        return {
        }
    },
    props: {
        menu: Array
    }
}
</script>


<template>
    <nav class="d-none d-md-flex">
        <div class="dropdown-center mx-2" v-for="option in menu">
            <button class="dropdown-toggle border border-0 bg-transparent" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ option.title }}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" v-for="drop in option.drops">{{ drop }}</a></li>
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