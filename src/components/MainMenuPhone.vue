<script>
export default {
    name: "MainMenuPhone",
    data() {
        return {
        }
    },
    props: {
        menu: Array
    },
    methods: {

    }
}
</script>


<template>
    <div class=" phone_menù">
        <button class="phone_version border-0 bg-transparent mx-4 d-md-none" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="offcanvas offcanvas-end position-absolute my_offcanvas" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title f_fasthand heavenly fs-1" id="offcanvasWithBothOptionsLabel">Menù</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text-center px-0">
                <div v-for="(option, index) in menu" class="block_options">
                    <div class="fs-6 fw-bold">
                        {{ option.title }}
                    </div>
                    <ul>
                        <li class="items_canvas" v-for="  drop   in   option.drops">
                            <a class="dropdown-item" href="#">{{ drop }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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