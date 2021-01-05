<template>
    <div>
        <section class="user-info">
            <div class="container">
                <div class="actions" v-if="!$store.state.isAuth">
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
}
</script>

<style lang="scss" scoped>
    @import '../../sass/_mixin.scss';

    .container {
        padding: 0 15rem;
    }

    .actions {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 2rem;
        padding-top: 10rem;
    }

    .action {
        display: grid;
        grid-template-rows: repeat(2, 1fr);

        &__desc {
            font-size: 2.5rem;
            color: #022d43;
        }

        &__button {
            justify-self: center;
            width: 40%;
            height: 70%;
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

    @media(max-width: 1200px) {
        .action__button {
            height: 70%;
            width: 60%;
            padding: 1.8rem 3.3rem;
        }
    }

    @media(max-width: 992px) {
        .container {
            padding: 0 8rem;
        }

        .action__button {
            width: 80%;
        }
    }

    @media(max-width: 768px) {
        .action{
            &__button, &__desc {
                font-size: 2rem;
            }

            &__button {
                height: 65%;
                width: 65%;
                padding: 1.5rem 2.3rem;
            }
        }
    }

    @media(max-width: 350px) {
        .container {
            padding: 0;
        }

        .actions {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-top: 5rem;
        }

        .action:not(:first-child)
        {
            margin-top: 6rem;
        }

        .action {
            grid-gap: 2rem;

            &__button {
                height: 100%;
                margin: 0;
                align-self: start;
            }

            &__desc {
                font-size: 1.7rem;
            }
        }
    }
</style>
