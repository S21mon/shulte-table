<template>
    <div>
        <section class="game">
            <div class="container">
                <div class="title">
                    Таблица Шульте
                </div>
                <div class="game-buttons">
                    <div class="game-buttons__button">Начать</div>
                    <div class="game-buttons__button">Закончить</div>
                </div>
                <div class="timer">
                    <div class="timer__description">Время прохождения:</div>
                    <div class="timer__value">00:00:00.0</div>
                </div>
                <div class="shulte-table">
                    <div class="shulte-table__current-number">{{increment}}</div>
                    <table class="table">
                        <tbody class="table-body">
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="shulte-table__current-number">{{increment}}</div>
                </div>
                <div class="result" v-if="statusCompleted">
                    <div class="result__title">
                        Поздравляем!
                    </div>
                    <div class="result__text">
                        Вы успешно выполнили таблицу Шульте.
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
            currentNumber: 0,
        };
    },

    computed: {
        increment() {
            return this.currentNumber++;
        },

        statusCompleted() {
            return this.$store.state.isCompleted;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../sass/_mixin.scss';

    .game {
        margin-bottom: 2rem;
    }

    .title {
        font-size: 5rem;
    }

    .game-buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 4rem;

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

    .timer {
        margin-top: 4rem;
        font-size: 4rem;

        &__value {
            font-weight: bold;
        }
    }

    .shulte-table {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        align-items: center;

        &__current-number {
            font-size: 5rem;
            font-weight: bold;
        }

        .table {
            width: 70%;
            font-size: 5rem;
            border-collapse: collapse;
            border-spacing: 0;

            td {
                border: 2px solid #333;
                padding: 4px;
                text-align: center;
            }
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
</style>
