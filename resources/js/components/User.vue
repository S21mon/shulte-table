<template>
    <div>
        <section class="user-info">
            <div class="container">
                <div class="actions" v-if="!statusAuth">
                    <div class="action">
                        <div class="action__desc">
                            Авторизуйтесь, чтобы видеть свои лучшие результаты.
                        </div>
                        <a class="action__button" href="user/login">Авторизация</a>
                    </div>
                    <div class="action">
                        <div class="action__desc">
                            Еще не зарегистрированы? - Пройдите регистрацию.
                        </div>
                        <a class="action__button" href="user/register">Регистрация</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        statusAuth() {
            return this.$store.state.isAuth
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../sass/_mixin.scss';

    .container {
        padding: 0 15rem;
    }

    .actions {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 10rem;
    }

    .action {
        &__desc {
            font-size: 2.5rem;
            color: #022d43;
        }

        &__button {
            display: inline-block;
            margin-top: 2.5rem;
           @include button();
        }

        &__button:hover {
            box-shadow: 0 0 1rem .5rem rgba(0,0,0,0.24);
            color: white;
        }

        &__button:active {
            position:relative;
            top: 2px;
        }
    }

</style>
