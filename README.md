# Sirius CRM — Заявки партнёров

Тестовое задание на Vue.js 2 + Vuex.

## Запуск

```bash
cd frontend
npm install
npm run generate-db
npm run start:all
```

Приложение: http://localhost:3000  
API: http://localhost:3001/api/partners

## Структура

```
frontend/
├── src/
│   ├── api/              # Axios клиент
│   ├── components/       # UI компоненты
│   │   ├── PartnerCard.vue
│   │   ├── PartnerTable.vue
│   │   ├── SearchBar.vue
│   │   ├── SortControls.vue
│   │   ├── StatusFilter.vue
│   │   └── Pagination.vue
│   ├── store/modules/
│   │   └── partners.js   # Vuex модуль
│   └── views/
│       └── PartnersPage.vue
└── scripts/
    └── generate-db.js    # Генератор данных
```

## Команды

```bash
npm run generate-db   # Сгенерировать тестовые данные (100 заявок)
npm run server        # Запустить json-server
npm run start:dev     # Запустить Vue
npm run start:all     # Запустить frontend + backend
npm run build         # Сборка
npm run lint          # Проверка кода
```

## Стек

- Vue 2.7
- Vuex 3.6
- Axios 1.6
- Quasar 1.22
- json-server 1.0

## Данные

Статусы: `new`, `in_progress`, `approved`, `rejected`

Города: Омск, Красноярск, Новосибирск, Москва, Санкт-Петербург
