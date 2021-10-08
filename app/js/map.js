function init() {
    // Создание экземпляра карты и его привязка к контейнеру с заданным id ("map").
    const myMap = new ymaps.Map(
        'map',
        {
            center: [59.938635, 30.323118],
            zoom: 17, //коэффициент масштабирования.
            controls: [], //для создания карты без элементов управления, в опции controls следует задать пустой массив.
            behaviors: ['scrollZoom', 'multiTouch'],
        },
        {
            suppressMapOpenBlock: true, //убрал "как добраться" и т.п.
        },
    );

    const myPlacemark = new ymaps.Placemark(
        [59.938635, 30.323118],
        {
            hintContent: 'ул. Большая Конюшенная, д.19/8, офис 101',
        },
        {
            // Своё изображение иконки метки.
            iconImageHref: 'img/ico/map-pin.svg',
            // Размеры метки.
            iconImageSize: [66, 101],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-33, -111],
        },
    );

    myMap.geoObjects.add(myPlacemark);
}

// поверяю есть ли на странице карта, если есть, то запускаю ее
if (document.querySelector('.map')) {
    ymaps.ready(init);
}
