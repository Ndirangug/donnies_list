import { PrismaClient } from '@prisma/client'
import faker from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const categories = ['Software Engineering', 'Graphic Design', 'Arhicecture']
  for (let i = 0; i < categories.length; i++) {
    await prisma.category.create({
      data: {
        name: categories[i],
        users: {
          create: [
            {
              username: faker.internet.userName(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              email: faker.internet.email(),
            },
            {
              username: faker.internet.userName(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              email: faker.internet.email(),
            },
          ],
        },
      },
    })
  }

  const titles = ['Creating beautiful UIs', 'Architecting scalable APIs']
  const usernames = [
    'Shanie_Torp',
    'Earnestine.Klein2',
    'Gabriel80',
    'Maxine70',
    'Brady.Murray36',
    'Andy.Greenfelder6',
  ]
  
  for (let i = 0; i < titles.length; i++) {
    const tags = []

    prisma.room.create({
      data: {
        name: faker.lorem.word(),
        title: titles[i],
        createdAt: new Date(),
        participants: {
          connect: [
            { username: faker.helpers.randomize(usernames) },
            { username: faker.helpers.randomize(usernames) },
            { username: faker.helpers.randomize(usernames) },
          ],
        },
        tags: {
          connectOrCreate: [
            { where: { name: 'c++' }, create: { name: 'c++' } },
            { where: { name: 'java' }, create: { name: 'java' } },
            {
              where: { name: 'graphic design' },
              create: { name: 'graphic design' },
            },
            { where: { name: 'web dev' }, create: { name: 'web dev' } },
            { where: { name: 'api' }, create: { name: 'api' } },
            { where: { name: 'android' }, create: { name: 'android' } },
          ],
        },
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
