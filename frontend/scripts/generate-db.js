import { fakerRU } from '@faker-js/faker'
import { writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cities = ['Омск', 'Красноярск', 'Новосибирск', 'Москва', 'Санкт-Петербург']
const statuses = ['new', 'in_progress', 'approved', 'rejected']
const comments = [
  '',
  'Нужно связаться в понедельник',
  'Одобрено руководителем',
  'Не подходит по требованиям',
  'Ожидает подтверждения',
  '',
  '',
]

const partners = Array.from({ length: 100 }, (_, i) => {
  const daysAgo = Math.floor(Math.random() * 30)
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)

  return {
    id: i + 1,
    name: fakerRU.person.fullName(),
    phone: fakerRU.phone.number('+7 (9##) ###-##-##'),
    city: cities[Math.floor(Math.random() * cities.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    comment: comments[Math.floor(Math.random() * comments.length)],
    createdAt: date.toISOString()
  }
})

const dbPath = resolve(__dirname, 'db.json')
writeFileSync(dbPath, JSON.stringify({ partners }, null, 2))
console.log(`Generated ${partners.length} partners`)
