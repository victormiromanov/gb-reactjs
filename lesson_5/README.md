# Домашняя работа по уроку "Взаимодействие в ReactJS"

**Задача: Начальное изучение роутинга, Ajax загрузка данных.**

Для запуска приложения лучше использовать локальный сервер, который запускается командой:

```bash
$ npm start
```

## Что сделано

* Изменена структура приложения для организации роутинга.
* Добавлен главный `layout Main`.
* Написан роутинг в `app/app.jsx`.
* Разделы меню загружаются из JSON файла `dist/data/menu.json` с помощью библиотеки `axios`.
* В меню выделяется текущее местоположение.
* Данные для блога загружаются с ресурса `https://jsonplaceholder.typicode.com/posts`.
* Данные для пользователей загружаются с ресурса `https://jsonplaceholder.typicode.com/users`.
* Пока данные загружаются показывается экран ожидания, компонент `Preloader`.