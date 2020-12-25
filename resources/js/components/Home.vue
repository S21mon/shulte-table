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
                        <div class="rules__title">
                            Как пользоваться таблицей?
                        </div>
                        <ul class="rules-list">
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

        &__title {
            font-size: 3rem;
            font-weight: bold;
        }
    }

    .rules-list {
        list-style-type: circle;
        font-size: 2.5rem;

        .rule {
            margin-top: 1rem;
        }
    }
</style>
