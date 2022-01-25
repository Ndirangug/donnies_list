import { PrismaClient } from '@prisma/client'
import faker from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // const categories = ['Software Engineering', 'Graphic Design', 'Arhicecture']
  // for (let i = 0; i < categories.length; i++) {
  //   await prisma.category.create({
  //     data: {
  //       name: categories[i],
  //       users: {
  //         create: [
  //           {
  //             username: faker.internet.userName(),
  //             firstName: faker.name.firstName(),
  //             lastName: faker.name.lastName(),
  //             email: faker.internet.email(),
  //             areasOfExpertise: {
  //               connectOrCreate: [
  //                 {
  //                   where: {
  //                     name: 'C++',
  //                   },
  //                   create: {
  //                     name: 'C++',
  //                   },
  //                 },
  //                 {
  //                   where: {
  //                     name: 'Java',
  //                   },
  //                   create: {
  //                     name: 'Java',
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             username: faker.internet.userName(),
  //             firstName: faker.name.firstName(),
  //             lastName: faker.name.lastName(),
  //             email: faker.internet.email(),
  //             areasOfExpertise: {
  //               connectOrCreate: [
  //                 {
  //                   where: {
  //                     name: 'Web Development',
  //                   },
  //                   create: {
  //                     name: 'Web Development',
  //                   },
  //                 },
  //                 {
  //                   where: {
  //                     name: 'Python',
  //                   },
  //                   create: {
  //                     name: 'Python',
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   })
  // }

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
