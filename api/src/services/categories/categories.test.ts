import {
  categories,
  category,
  createCategory,
  updateCategory,
  deleteCategory,
} from './categories'
import type { StandardScenario } from './categories.scenarios'

describe('categories', () => {
  scenario('returns all categories', async (scenario: StandardScenario) => {
    const result = await categories()

    expect(result.length).toEqual(Object.keys(scenario.category).length)
  })

  scenario('returns a single category', async (scenario: StandardScenario) => {
    const result = await category({ id: scenario.category.one.id })

    expect(result).toEqual(scenario.category.one)
  })

  scenario('creates a category', async () => {
    const result = await createCategory({
      input: { name: 'String2405141' },
    })

    expect(result.name).toEqual('String2405141')
  })

  scenario('updates a category', async (scenario: StandardScenario) => {
    const original = await category({ id: scenario.category.one.id })
    const result = await updateCategory({
      id: original.id,
      input: { name: 'String77319762' },
    })

    expect(result.name).toEqual('String77319762')
  })

  scenario('deletes a category', async (scenario: StandardScenario) => {
    const original = await deleteCategory({ id: scenario.category.one.id })
    const result = await category({ id: original.id })

    expect(result).toEqual(null)
  })
})
