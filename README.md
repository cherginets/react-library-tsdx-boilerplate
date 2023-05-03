# TSDX + React + Example (create-react-app)

Репозиторий сделан для одной единственной цели - удобного создания простых библиотек 
для react

### Базовый стек будущей библиотеки

* React 18
* TypeScript 5
* Eslint ?
* Prettier ?

### Обновления
Если хотите оставить возможность получать обновления из этого репозитория - меняйте код только в папке *src* и в package(-lock).json.

Обновиться можно будет командами: 
```
git remote add boilerplate https://github.com/cherginets/react-library-tsdx-boilerplate.git
git pull boilerplate master
```




## Старт разработки собственной библиотеки

### Клонируем проект
```
git clone <repopath> mylib
cd mylib
```
### Устанавливаем и запускаем каркас либы
```
yarn install
yarn start
```
### Устанавливаем и запускаем Example project
```
cd example
yarn install
yarn start
```