import { PrismaClient } from '../prisma/generated/client'

// Создаем прямой экземпляр PrismaClient
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

export default prisma
export { prisma }
