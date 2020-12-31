<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="/css/app.css">
        <link href="{{ mix('/css/style.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
        </div>
        <script src="/js/app.js"></script>
        <script src="{{ mix('js/main.js') }}"></script>
    </body>
</html>