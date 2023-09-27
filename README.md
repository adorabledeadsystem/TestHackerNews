# Тестовое задание Frontend

Разработать интерфейс для сайта [Hacker News](https://news.ycombinator.com/news), состоящий из двух страниц.

## Требования

### Главная страница

- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху. <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- Каждая новость содержит:
  - <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> название <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
  - <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> рейтинг <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> ник автора <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> дату публикации <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- По клику на новость происходит переход на страницу новости
- Список новостей должен автоматически обновляться раз в минуту без участия пользователя
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> На странице должна быть кнопка для принудительного обновления списка новостей <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>

### Страница новости

- Должна содержать:
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> список комментариев в виде дерева <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой. <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> На странице должна быть кнопка для принудительного обновления списка комментариев <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>
- На странице должна быть кнопка для возврата к списку новостей

## Технические требования

- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> TypeScript <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> [Next.js](https://nextjs.org/) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- Фреймворк для UI на выбор:
  - [ui.shadcn](https://ui.shadcn.com/)
  - [mantine](https://mantine.dev/)
  - [chakra](https://chakra-ui.com/)
  - <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> или свои компоненты со стилями ([Tailwind](https://tailwindcss.com/) / [SCSS Modules](https://www.npmjs.com/package/sass) или [Styled Components](https://styled-components.com/)) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> [React Query v4](https://tanstack.com/query/v4/docs/react/overview) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> Стейт менеджер на выбор (при необходимости): <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Jotai](https://jotai.org/)
  - [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> Пакетный менеджер `npm` <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>

---

- Использован [официальный API Hacker News](https://github.com/HackerNews/API)
  - <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> Для удобства тестирования API [импортируйте](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/) Postman коллекцию [`HackerNewsAPI.json`](./HackerNewsAPI.json) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> Приложение должно запускаться по адресу `localhost:3000` командой `npm run start` <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- При переходах по ссылкам страница не перезагружается
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> Добавить статическую генерацию главной страницы и 100 страниц новостей на сервере (с помощью SSG и ревалидацией, каждые 10 минут) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''> Исходный код решения должен быть загружен с вашего аккаунта в репозиторий на [GitHub](http://github.com/) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg" alt=''>
- <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''> Будет плюсом деплой решения на хостинг: [Vercel](https://vercel.com/) (или свой VPS) <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChangesGrey.svg" alt=''>

