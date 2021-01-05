<template>
    <div>
        <section class="game">
            <div class="container">
                <div class="title">
                    Таблица Шульте
                </div>
                <div class="game-buttons">
                    <div class="game-buttons__button" @click="startGame">Начать</div>
                    <div
                        class="game-buttons__button"
                        v-show="$store.getters.isStarted"
                        @click="stopGame"
                    >Закончить</div>
                </div>
                <Timer/>
                <ShulteTable @completeGame="_completeGame"></ShulteTable>
                <div class="result" v-show="$store.getters.isCompletedGame">
                    <div class="result__title">
                        Поздравляем!
                    </div>
                    <div class="result__text">
                        Вы успешно завершили выполнение таблицы Шульте.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Timer from './Timer';
import ShulteTable from './Table';

export default {
     mounted() {
         if (this.$store.getters.isStarted) {
             this.$store.dispatch('changeStatusStarted');
             this.$store.dispatch('changeStatusActive');
         }
     },

    methods: {
        startGame() {
            if (this.$store.getters.isStarted) {
                return 0;
            }
            this._setDefaultValue();
            this.$store.dispatch('changeStatusStarted');
            if (!this.$store.getters.isActive) {
                this.$store.dispatch('changeStatusActive');
            }
            this._scrollToGame();
        },

        _scrollToGame() {
            const game = this.$el.querySelector('.container');
            game.scrollIntoView(true);
        },

        _setDefaultValue() {
            if (this.$store.getters.isCompletedGame === true) {
                this.$store.dispatch('changeStatusCompleted');
            }
        },

        _completeGame() {
            this.stopGame();
            this.$store.dispatch('changeStatusCompleted');
        },

        stopGame() {
            this.$store.dispatch('changeStatusStarted');
        },
    },

    components: {
        Timer,
        ShulteTable,
    },
}
</script>

<style lang="scss" scoped>
    @import '../../sass/_mixin.scss';

    .container {
        padding: 0 15rem;
    }

    .game {
        margin-bottom: 2rem;
    }

    .title {
        font-size: 5rem;
    }

    .game-buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;

        &__button {
            @include button();
        }

        &__button:hover {
            transform: scale(1.1);
        }

        &__button:active {
            position:relative;
            top: 1px;
        }
    }

    .result {
        margin: 3rem 0;
        font-size: 4rem;
        font-weight: bold;

        &__text {
            font-size: 3rem;
        }
    }

    @media(max-width: 992px) {
        .game-buttons__button {
            padding: 1.8rem 3.2rem;
        }
    }

    @media(max-width: 768px) {
        .container {
            padding: 0;
        }

        .title {
            font-size: 3rem;
        }

        .game-buttons__button {
            padding: 1.5rem 2.3rem;
        }

        .result {
            font-size: 3rem;

            &__text {
                font-size: 2.5rem;
            }
        }
    }

    @media(max-width: 350px) {
        .title {
            font-size: 2.5rem;
        }

        .game-buttons {
            margin-top: 2rem;

            &__button {
                padding: 1rem 2rem;
                font-size: 1.5rem;
            }
        }

        .result {
            margin: 5rem;
            font-size: 2rem;

            &__text {
                font-size: 1.5rem;
            }
        }
    }
</style>
