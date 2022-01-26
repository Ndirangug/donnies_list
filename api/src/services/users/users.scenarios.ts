import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String7156520',
        firstName: 'String',
        lastName: 'String',
      },
    },
    two: {
      data: {
        username: 'String282871',
        firstName: 'String',
        lastName: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
