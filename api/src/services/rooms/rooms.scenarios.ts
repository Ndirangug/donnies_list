import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoomCreateArgs>({
  room: {
    one: { data: { name: 'String3452703', title: 'String' } },
    two: { data: { name: 'String4146371', title: 'String' } },
  },
})

export type StandardScenario = typeof standard
