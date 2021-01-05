<template>
    <div>
        <div class="timer" v-if="$store.getters.isActive">
            <div class="timer__description">Время прохождения:</div>
            <div class="timer__value">{{ time }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameTimer: null,
            time: '',
            newDate: '',
            oldDate: '',
        }
    },

    methods: {
        _createInterval() {
            this.time = '';
            this.oldDate = new Date;
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
            return (number.toString().length === 1) ? '0' + number : number;
        },
    },

    computed: {
        isStarted() {
            return this.$store.getters.isStarted;
        },
    },

    watch: {
        isStarted: function(newStatusStarted, oldStatusStarted) {
            if (!newStatusStarted) {
                clearInterval(this.gameTimer);
            } else {
                this._createInterval();
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .timer {
        margin-top: 4rem;
        font-size: 4rem;

        &__value {
            font-weight: bold;
        }
    }

    @media(max-width: 768px) {
        .timer {
            font-size: 3rem;
        }
    }

    @media(max-width: 350px) {
        .timer {
            font-size: 2rem;
        }
    }
</style>
