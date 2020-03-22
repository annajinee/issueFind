<template>
    <div class="row justify-content-center">
        <section class="page-section">
            <div class="container text-center">
                <img src="img/portfolio/service/prepare.png" class="d-block w-100 text-center">
            </div>
        </section>
    </div>
</template>
<script>
    import VueMq from 'vue-mq'
    import Vue from "vue";

    export default {
        components: {
            vueMq: VueMq
        }
    };
    Vue.use(
        VueMq, {
            breakpoints: {
                tablet: 500,
                laptop: 1250
            }
        }
    );
</script>

<style scoped>
</style>