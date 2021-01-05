<template>
    <div>
        <div class="shulte-table" v-if="!$store.getters.isCompletedGame">
            <div class="shulte-table__current-number" v-if="$store.getters.isActive">{{ currentNumber }}</div>
            <table class="table">
                <tbody class="table-body">
                <tr v-for="row in $store.getters.rowQty">
                    <td v-for="column in $store.getters.columnQty"
                        @click="pickNumber(numbers[column + $store.getters.columnQty * (row - 1) - 1])"
                    >
                        {{ numbers[column + $store.getters.columnQty * (row - 1) - 1] }}
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="shulte-table__current-number" v-if="$store.getters.isActive">{{ currentNumber }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            startTimer: null,
            numbers: [],
            currentNumber: 1,
        }
    },

    mounted() {
        this._fillTable();
        this.startTimer = setInterval(() => {
            this.numbers.length = 0;
            this._fillTable();
        }, 1000);
    },

    methods: {
        _setDefaultValue() {
            this.numbers.length = 0;
            this.currentNumber = 1;
        },

        _fillTable() {
            const columnQty = this.$store.getters.columnQty;
            const rowQty = this.$store.getters.rowQty;

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
            if (this.$store.getters.isStarted) {
                if (number === this.currentNumber ) {
                    this._checkCompletedGame()
                }
            }
        },

        _checkCompletedGame() {
            const columnQty = this.$store.getters.columnQty;
            const rowQty = this.$store.getters.rowQty;

            if (this.currentNumber === columnQty * rowQty) {
                this._setDefaultValue();
                this.$emit('completeGame');
            } else {
                this.currentNumber++;
            }
        },
    },

    computed: {
        isStarted() {
            return this.$store.getters.isStarted;
        },
    },

    watch: {
        isStarted: function(newStatusStarted, oldStatusStarted) {
            if (newStatusStarted) {
                clearInterval(this.startTimer);
                this._setDefaultValue();
                this._fillTable();
            }
        },
    },
}
</script>

<style lang="scss" scoped>
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
    }

    @media(max-width: 768px) {
        .shulte-table {
            .table {
                width: 30rem;
                height: 30rem;
                font-size: 3rem;
            }

            &__current-number {
                margin: 0 2rem;
                font-size: 3rem;
            }
        }
    }

    @media(max-width: 350px) {
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
    }
</style>
