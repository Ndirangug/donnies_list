import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { name: 'String561417' } },
    two: { data: { name: 'String6389386' } },
  },
})

export type StandardScenario = typeof standard
