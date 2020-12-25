<template>
    <div>
        <Navigation />
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navigation from './Navigation';

export default {
    components: {
        Navigation,
    },
}
</script>

<style lang="scss">
    .main {
        min-height: 50rem;
    }

    .container {
        padding: 0 20rem;
        text-align: center;
    }
</style>
