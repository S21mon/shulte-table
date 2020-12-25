<template>
    <div>
        <nav class="navigation">
            <div class="container">
                <div class="menu">
                    <div class="page">
                        <router-link exact-active-class="active-page" class="page__link" :to="{ name: 'home' }">Главная</router-link>
                    </div>
                    <div class="page">
                        <router-link exact-active-class="active-page" class="page__link" :to="{ name: 'game' }">Игра</router-link>
                    </div>
                    <div class="page">
                        <router-link exact-active-class="active-page" class="page__link" :to="{ name: 'user' }">Пользователь</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../sass/_mixin.scss';

    .navigation {
        min-height: 10rem;
        padding-top: 2.5rem;
        background-color: #D8F1FF;
    }

    .menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-bottom: 2rem;
    }

    .page {
        text-align: center;
        font-size: 3rem;

        &__link {
            position: relative;
            text-decoration:none;
        }

        &__link:after {
            @include underline();
        }

        &__link:hover:after {
            width: 100%;
        }
    }

    .active-page {
        color: #022d43;
    }

    .active-page:after {
        @include underline();
        width: 100%;
    }
</style>
