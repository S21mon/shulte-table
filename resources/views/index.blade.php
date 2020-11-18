<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>

<header class="header">
    <div class="container">
        <div class="header__title"><a href="{{ route('home') }}">Shulte table</a></div>
    </div>
</header>

<section class="options">
    <div class="container">
        <div class="game-buttons">
            <div class="game-buttons__item">Start</div>
            <div class="game-buttons__item">Stop</div>
        </div>
        <div class="timer">
            <div class="timer__description">
                Wasted time:
            </div>
            <div class="timer__value">
                00:00:00.0
            </div>
        </div>

    </div>
</section>

<section class="shulte">
    <div class="shulte__current-number shulte__current-number_left">

    </div>
    <div class="container">
        <table class="shulte__table">
            <tbody class="shulte__table-body">
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
    </div>
    <div class="shulte__current-number shulte__current-number_right">

    </div>
</section>

<section class="congratulations">
    <div class="container">
        <div class="congratulations__title">
            Congratulations!
        </div>

        <div class="congratulations__text">
            You completed the Schulte table in
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <hr>
        <div class="footer__copyright">&copy; Lachestry {{ date('Y') }}</div>
    </div>
</footer>

<script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
