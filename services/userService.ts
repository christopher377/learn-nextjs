import { PrismaClient } from '@prisma/client'

type User = {
  id: number
  email: string
  name: string | null
  createdAt: Date
  updatedAt: Date
}

async function main() {
  const prisma = new PrismaClient()
  try {
    let user: User | null = await prisma.user.findFirst()
    return user
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect()
  }
}

export default main
