<template>
    <div>
        <section class="game">
            <div class="container">
                <div class="title">
                    Таблица Шульте
                </div>
                <div class="game-buttons">
                    <div class="game-buttons__button" @click="startGame">Начать</div>
                    <div class="game-buttons__button" @click="stopGame">Закончить</div>
                </div>
                <div class="timer" v-if="isActive">
                    <div class="timer__description">Время прохождения:</div>
                    <div class="timer__value">{{ time }}</div>
                </div>
                <div class="shulte-table" v-if="!$store.state.isCompletedGame">
                    <div class="shulte-table__current-number" v-if="isActive">{{ currentNumber }}</div>
                    <table class="table">
                        <tbody class="table-body">
                            <tr v-for="row in $store.state.rowQty">
                                <td v-for="column in $store.state.columnQty"
                                    @click="pickNumber(numbers[column + $store.state.columnQty * (row - 1) - 1])"
                                >
                                    {{ numbers[column + $store.state.columnQty * (row - 1) - 1] }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="shulte-table__current-number" v-if="isActive">{{ currentNumber }}</div>
                </div>
                <div class="result" v-if="$store.state.isCompletedGame">
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
export default {
    data() {
        return {
            currentNumber: 0,
            startTimer: null,
            gameTimer: null,
            time: '',
            newDate: '',
            oldDate: '',
            isStarted: false,
            isActive: false,
            numbers: [],
        };
    },

    mounted() {
        this._fillTable();
        this.startTimer = setInterval(() => {
            this.numbers.length = 0;
            this._fillTable();
        }, 1000);
    },

    methods: {
        startGame() {
            if (this.isStarted) {
                return 0;
            }
            this.isActive = true;
            this.isStarted = true;
            this._setDefaultValue();
            this._createInterval();
            this._fillTable();
        },

        _setDefaultValue() {
            this.numbers.length = 0;
            this.currentNumber = 1;
            clearInterval(this.startTimer);
            if ( this.$store.state.isCompletedGame === true) {
                this.$store.dispatch('changeStatusCompleted');
            }
        },

        _createInterval() {
            this.oldDate = new Date;
            clearInterval(this.gameTimer);
            this.gameTimer = setInterval(this._calculateDate, 100);
        },

        _calculateDate() {
            this.newDate = new Date() - this.oldDate;
            this._convertDate();
        },

        _convertDate() {
            let milSec = Math.abs(Math.floor(this.newDate / 100 ) % 10);
            let sec = Math.abs(Math.floor(this.newDate / 1000) % 60);
            let min = Math.abs(Math.floor(this.newDate / 1000 / 60) % 60);
            let hours = Math.abs(Math.floor(this.newDate / 1000 / 60 / 60) % 24);
            sec = this._checkBitness(sec);
            min = this._checkBitness(min);
            hours = this._checkBitness(hours);
            this.time = hours + ':' + min + ':' + sec + '.' + milSec;
        },

        _checkBitness(number) {
            if (number.toString().length === 1) {
                return number = '0' + number;
            }
        },

        _fillTable() {
            const columnQty = this.$store.state.columnQty;
            const rowQty = this.$store.state.rowQty;

            for (let i = 0; i < columnQty * rowQty; i++) {
                this.numbers.push(i + 1);
            }
            this._mixNumbers();
        },

        _mixNumbers() {
            for (let i = this.numbers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
            }
        },

        pickNumber(number) {
            if (this.isStarted) {
                if (number === this.currentNumber ) {
                    this._checkCompletedGame();
                }
            }
        },

        _checkCompletedGame() {
            const columnQty = this.$store.state.columnQty;
            const rowQty = this.$store.state.rowQty;

            if (this.currentNumber === rowQty * columnQty) {
                this.stopGame();
                this.$store.dispatch('changeStatusCompleted');
            } else {
                this.currentNumber++;
            }
        },

        stopGame() {
            this.isStarted = false;
            clearInterval(this.gameTimer);
        },
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
        justify-content: center;
        margin-top: 3rem;
        align-items: center;

        &__current-number {
            margin: 0 7rem;
            font-size: 5rem;
            font-weight: bold;
        }

        .table {
            width: 70rem;
            height: 60rem;
            font-size: 5rem;
            border-collapse: collapse;
            border-spacing: 0;

            td {
                border: 2px solid #333;
                text-align: center;
                cursor: pointer;
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

    @media(max-width: 1200px) {
        .shulte-table {
            .table {
                width: 50rem;
                height: 50rem;
            }
        }
    }

    @media(max-width: 992px) {
        .shulte-table {
            .table {
                width: 40rem;
                height: 40rem;
            }
        }

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

        .timer {
            font-size: 3rem;
        }

        .shulte-table {
            .table {
                width: 30rem;
                height: 30rem;
                font-size: 3rem;
            }

            &__current-number {
                font-size: 3rem;
            }
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

        .timer {
            font-size: 2rem;
        }

        .shulte-table {
            flex-direction: column;
            margin-top: 4.5rem;

            &__current-number {
                padding: 1rem 0;
                font-size: 2rem;
            }

            .table {
                width: 25rem;
                height: 25rem;
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
