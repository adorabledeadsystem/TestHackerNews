# Тестовое задание Frontend

Разработать интерфейс для сайта [Hacker News](https://news.ycombinator.com/news), состоящий из двух страниц.

## Требования

### Главная страница

- Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху. <img src={https://github.com/primer/octicons/approved} alt=''>
- Каждая новость содержит:
  - название
  - рейтинг
- ник автора
- дату публикации
- По клику на новость происходит переход на страницу новости
- Список новостей должен автоматически обновляться раз в минуту без участия пользователя
- На странице должна быть кнопка для принудительного обновления списка новостей

### Страница новости

- Должна содержать:
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - список комментариев в виде дерева
- Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
- На странице должна быть кнопка для принудительного обновления списка комментариев
- На странице должна быть кнопка для возврата к списку новостей

## Технические требования

- TypeScript
- [Next.js](https://nextjs.org/)
- Фреймворк для UI на выбор:
  - [ui.shadcn](https://ui.shadcn.com/)
  - [mantine](https://mantine.dev/)
  - [chakra](https://chakra-ui.com/)
  - или свои компоненты со стилями ([Tailwind](https://tailwindcss.com/) / [SCSS Modules](https://www.npmjs.com/package/sass) или [Styled Components](https://styled-components.com/))
- [React Query v4](https://tanstack.com/query/v4/docs/react/overview)
- Стейт менеджер на выбор (при необходимости):
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Jotai](https://jotai.org/)
  - [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- Пакетный менеджер `npm`

---

- Использован [официальный API Hacker News](https://github.com/HackerNews/API)
  - Для удобства тестирования API [импортируйте](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/) Postman коллекцию [`HackerNewsAPI.json`](./HackerNewsAPI.json)
- Приложение должно запускаться по адресу `localhost:3000` командой `npm run start`
- При переходах по ссылкам страница не перезагружается
- Добавить статическую генерацию главной страницы и 100 страниц новостей на сервере (с помощью SSG и ревалидацией, каждые 10 минут)
- Исходный код решения должен быть загружен с вашего аккаунта в репозиторий на [GitHub](http://github.com/)
- Будет плюсом деплой решения на хостинг: [Vercel](https://vercel.com/) (или свой VPS)

