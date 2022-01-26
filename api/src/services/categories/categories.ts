import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const categories = () => {
  return db.category.findMany()
}

export const category = ({ id }: Prisma.CategoryWhereUniqueInput) => {
  return db.category.findUnique({
    where: { id },
  })
}

interface CreateCategoryArgs {
  input: Prisma.CategoryCreateInput
}

export const createCategory = ({ input }: CreateCategoryArgs) => {
  return db.category.create({
    data: input,
  })
}

interface UpdateCategoryArgs extends Prisma.CategoryWhereUniqueInput {
  input: Prisma.CategoryUpdateInput
}

export const updateCategory = ({ id, input }: UpdateCategoryArgs) => {
  return db.category.update({
    data: input,
    where: { id },
  })
}

export const deleteCategory = ({ id }: Prisma.CategoryWhereUniqueInput) => {
  return db.category.delete({
    where: { id },
  })
}

export const Category = {
  users: (_obj, { root }: ResolverArgs<ReturnType<typeof category>>) =>
    db.category.findUnique({ where: { id: root.id } }).users(),
}
