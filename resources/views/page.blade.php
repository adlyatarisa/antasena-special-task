<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>Antasena</title>
</head>
<body>
    <x-navbar />
    <section id="home">
        <x-hero />
    </section>
    <section id="about">
        <x-about />
    </section>
    <section id="achievements">
        <x-achievements />
    </section>
    <x-footer />
    @vite(['resources/js/scroll.js'])
</body>
</html>