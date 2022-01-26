import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { name: 'String1141359' } },
    two: { data: { name: 'String4281735' } },
  },
})

export type StandardScenario = typeof standard
