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

        &__link:active {
            color: #022d43;
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

    @media(max-width: 768px) {
        .container {
            padding: 0;
        }
    }

    @media(max-width: 350px) {
        .navigation {
            min-height: 4rem;
            padding-top: 1.5rem;
        }

        .menu {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .page {
            font-size: 2rem;
        }
    }
</style>
