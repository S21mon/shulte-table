<template>
    <div>
        <section class="home">
            <div class="container">
                <div class="title">
                    Для чего нужна таблица Шульте?
                </div>
                <div class="info-game">
                    <div class="desc">
                        Таблицы Шу́льте (англ. Schulte Table) — таблицы со случайно расположенными объектами (обычно числами или буквами), служащие для проверки и развития быстроты нахождения этих объектов в определённом порядке. Упражнения с таблицами позволяют улучшить периферическое зрительное восприятие, что важно, например, для скорочтения.
                    </div>
                    <div class="rules">
                        <div class="title">
                            <div class="title__text">Как пользоваться таблицей?</div>
                            <img
                                src="../../icons/listArrow.png"
                                alt="arrow"
                                class="title__img"
                                :class="{ 'rotate-img': listVisible }"
                                @click="changeListVisible()"
                            >
                        </div>
                        <transition name="visible">
                            <ul class="rules-list" v-if="listVisible">
                                <li class="rule">
                                    Перед началом работы с таблицей взгляд фиксируется в ее центре, чтобы охватывать всю таблицу целиком.
                                </li>
                                <li class="rule">
                                    Выбирать цифру требуется кликом мышки по нужной области таблицы.
                                </li>
                                <li class="rule">
                                    При поиске цифр разрешается фиксация глаз в центре таблицы.
                                    Горизонтальные движения глаз запрещены.
                                </li>
                                <li class="rule">
                                    И самое главное - время тренировки нужно выбирать так, чтобы не переутомляться.
                                </li>
                            </ul>
                        </transition>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHiddenList: false,
        };
    },

    methods: {
        changeListVisible() {
            this.isHiddenList = !this.isHiddenList;
        }
    },

    computed: {
        listVisible() {
            return this.isHiddenList;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Nunito');

    .title {
        margin-top: 1rem;
        font-size: 3rem;
        font-weight: bold;
    }

    .info-game {
        margin-top: 3rem;

        .desc {
            font-size: 2.5rem;
        }
    }

    .rules {
        margin-top: 3rem;

        .title {

            &__text {
                display: inline-block;
                vertical-align: middle;
                font-size: 3rem;
                font-weight: bold;
            }

            &__img {
                display: inline-block;
                width: 2rem;
                height: 2rem;
                vertical-align: middle;
                cursor: pointer;
            }

            &__img:active {
                transform: scale(1.5);
            }
        }
    }

    .rules-list {
        padding: 2rem 0;
        list-style: none;
        counter-reset: li;

        .rule {
            position: relative;
            margin: 2.5rem 4rem;
            padding: 0 2rem 0 2.8rem;
            font-size: 2.5rem;
            transition-duration: .3s;
        }

        .rule:before {
            content: counter(li);
            position: absolute;
            top: 0;
            left: -3rem;
            width: 4.2rem;
            box-sizing: border-box;
            border: .6rem solid transparent;
            text-align: center;
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 3rem;
            counter-increment: li;
            color: #094d74;
            transition-duration: .3s;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;

        }

        .rule:after {
            content: '';
            position: absolute;
            top: 0;
            left: -3rem;
            width: 4.2rem;
            height: 4.2rem;
            box-sizing: border-box;
            border: .6rem solid #D8F1FF;
            border-radius: 50%;
            opacity: 0.5;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        .rule:hover:after {
            animation: .5s ease-in-out bounceIn;
            opacity: 1;
            border: .6rem solid #094d74;
        }
    }

    .rotate-img {
        transition: all 1s;
        transform: rotate(180deg);
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        20% {
            transform: scale3d(1.3, 1.3, 1.3);
        }
        40% {
            transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: scale3d(.97, .97, .97);
        }
        to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
    }

    .visible-enter-active, .visible-leave-active {
        transition: opacity 1.5s;
    }
    .visible-leave-active {
        transition: 1s;
    }
    .visible-enter, .visible-leave-to {
        opacity: 0;
    }

    @media(max-width: 1200px) {
        .container {
            padding: 0 13rem;
        }

        .info-game {
            .desc {
                font-size: 2rem;
            }
        }

        .rules {
            .title__text {
                font-size: 3rem;
            }
        }

        .rules-list {
            .rule {
                font-size: 2rem;
            }
        }
    }

    @media(max-width: 768px) {
        .container {
            padding: 0;
        }
    }

    @media(max-width: 350px) {
        .title {
            font-size: 2rem;
        }

        .info-game {
            .desc {
                font-size: 1.5rem;
            }
        }

        .rules {
            .title {
                &__text {
                    font-size: 2rem;
                }

                &__img {
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }
        }

        .rules-list {
            .rule {
                font-size: 1.5rem;
            }
        }
    }
</style>
