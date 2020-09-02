# Drive Moto
🚤  "Drive Moto", адаптивный интернет-магазин гидроциклов.

Было сделано множество тонких моментов при верстке интернет-магазинов: карточки товара, страницы товара, фильтров, пагинации, хлебных крошек, табов, слайлера с ценами, стилизация чекбоксов и радиокнопок, "звездный рейтинг" и многое другое.

Основной стек:
+ Pug
+ PostCSS
+ Webpack 4
+ jQuery

Структура сайта:

+ Главная страница: [**https://sergeev-vn.github.io/drive-moto/**](https://sergeev-vn.github.io/drive-moto/)
<p align='center'>
<img src='http://lessons.sergeev.press/drive-moto-main.png' width='100%'>
</p>

+ Каталог: [**https://sergeev-vn.github.io/drive-moto/catalog**](https://sergeev-vn.github.io/drive-moto/catalog)
<p align='center'>
<img src='http://lessons.sergeev.press/drive-moto-catalog.png' width='100%'>
</p>

+ Карточка товара: [**https://sergeev-vn.github.io/drive-moto/card-product**](https://sergeev-vn.github.io/drive-moto/card-product)
<p align='center'>
<img src='http://lessons.sergeev.press/drive-moto-card.png' width='100%'>
</p>

## Чтобы развернуть проект необходимо:
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
> [последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

```sh
$ git clone https://github.com/sergeev-vn/drive-moto.git
$ cd drive-moto
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение                                                                                   |
| ------ | -------------------------------------------------------------------------------------------- |
| dev    | Запустит webpack-dev-server с _горячей_ заменой модулей                                      |
| build  | Соберет проект для **production** (проект готов к загрузке на сервер)                        |

#### Чтобы запустить скрипт:

```sh
$ npm run имя_скрипта
```

##### Либо:

```sh
$ yarn имя_скрипта
```
