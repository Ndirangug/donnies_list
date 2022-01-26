import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const rooms = () => {
  return db.room.findMany()
}

export const room = ({ id }: Prisma.RoomWhereUniqueInput) => {
  return db.room.findUnique({
    where: { id },
  })
}

interface CreateRoomArgs {
  input: Prisma.RoomCreateInput
}

export const createRoom = ({ input }: CreateRoomArgs) => {
  return db.room.create({
    data: input,
  })
}

interface UpdateRoomArgs extends Prisma.RoomWhereUniqueInput {
  input: Prisma.RoomUpdateInput
}

export const updateRoom = ({ id, input }: UpdateRoomArgs) => {
  return db.room.update({
    data: input,
    where: { id },
  })
}

export const deleteRoom = ({ id }: Prisma.RoomWhereUniqueInput) => {
  return db.room.delete({
    where: { id },
  })
}

export const Room = {
  participants: (_obj, { root }: ResolverArgs<ReturnType<typeof room>>) =>
    db.room.findUnique({ where: { id: root.id } }).participants(),
  tags: (_obj, { root }: ResolverArgs<ReturnType<typeof room>>) =>
    db.room.findUnique({ where: { id: root.id } }).tags(),
}
