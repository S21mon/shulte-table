<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Таблица Шульте</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="title">
                <a href="/" class="header__link">Таблица Шульте</a>
            </div>
        </div>
    </header>

    <div id="app">
        <App></App>
    </div>

    <footer class="footer">
        <div class="container">
            <hr>
            <div class="footer__copyright">
                Designed & Developed by ©Lachestry
                <br>
                2020
            </div>
        </div>
    </footer>

    <script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
