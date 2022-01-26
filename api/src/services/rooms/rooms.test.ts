import { rooms, room, createRoom, updateRoom, deleteRoom } from './rooms'
import type { StandardScenario } from './rooms.scenarios'

describe('rooms', () => {
  scenario('returns all rooms', async (scenario: StandardScenario) => {
    const result = await rooms()

    expect(result.length).toEqual(Object.keys(scenario.room).length)
  })

  scenario('returns a single room', async (scenario: StandardScenario) => {
    const result = await room({ id: scenario.room.one.id })

    expect(result).toEqual(scenario.room.one)
  })

  scenario('creates a room', async () => {
    const result = await createRoom({
      input: { name: 'String8127817', title: 'String' },
    })

    expect(result.name).toEqual('String8127817')
    expect(result.title).toEqual('String')
  })

  scenario('updates a room', async (scenario: StandardScenario) => {
    const original = await room({ id: scenario.room.one.id })
    const result = await updateRoom({
      id: original.id,
      input: { name: 'String70564972' },
    })

    expect(result.name).toEqual('String70564972')
  })

  scenario('deletes a room', async (scenario: StandardScenario) => {
    const original = await deleteRoom({ id: scenario.room.one.id })
    const result = await room({ id: original.id })

    expect(result).toEqual(null)
  })
})
