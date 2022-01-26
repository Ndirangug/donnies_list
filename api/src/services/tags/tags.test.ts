import { tags, tag, createTag, updateTag, deleteTag } from './tags'
import type { StandardScenario } from './tags.scenarios'

describe('tags', () => {
  scenario('returns all tags', async (scenario: StandardScenario) => {
    const result = await tags()

    expect(result.length).toEqual(Object.keys(scenario.tag).length)
  })

  scenario('returns a single tag', async (scenario: StandardScenario) => {
    const result = await tag({ id: scenario.tag.one.id })

    expect(result).toEqual(scenario.tag.one)
  })

  scenario('creates a tag', async () => {
    const result = await createTag({
      input: { name: 'String1772204' },
    })

    expect(result.name).toEqual('String1772204')
  })

  scenario('updates a tag', async (scenario: StandardScenario) => {
    const original = await tag({ id: scenario.tag.one.id })
    const result = await updateTag({
      id: original.id,
      input: { name: 'String92970072' },
    })

    expect(result.name).toEqual('String92970072')
  })

  scenario('deletes a tag', async (scenario: StandardScenario) => {
    const original = await deleteTag({ id: scenario.tag.one.id })
    const result = await tag({ id: original.id })

    expect(result).toEqual(null)
  })
})
