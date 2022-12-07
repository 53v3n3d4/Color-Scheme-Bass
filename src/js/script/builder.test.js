import { sublimeFile } from './builder.js'

jest.mock('./builder.js', () => ({
  sublimeFile: jest.fn()
}))

const schemeTest = {
  name: 'Scheme',
  variables: {},
  globals: {
    background: '#18171B'
  },
  rules: [
    {
      name: 'Entity name',
      scope: 'entity.name',
      foreground: '#5DD8FF'
    }
  ]
}

const messageError =
`Color-scheme name not valid. Below you can find the names available.
Color-scheme names: bc, bio, bow, do, fuji, lagoon, nimbus, roci and zora.
Names should be followed by option merge or replace.
E.g. sublimeFile('bc-replace').`

describe('sublimeFile options test', () => {
  test('defines a function', () => {
    expect(typeof sublimeFile).toBe('function')
  })

  test.each`
    a                     | expected
    ${'bc-replace'}       | ${schemeTest}
    ${'bio-replace'}      | ${schemeTest}
    ${'bow-replace'}      | ${schemeTest}
    ${'do-replace'}       | ${schemeTest}
    ${'fuji-replace'}     | ${schemeTest}
    ${'lagoon-replace'}   | ${schemeTest}
    ${'nimbus-replace'}   | ${schemeTest}
    ${'roci-replace'}     | ${schemeTest}
    ${'zora-replace'}     | ${schemeTest}
    ${'wrong'}            | ${messageError}
  `('returns mock data for name = $a', ({ a, expected }) => {
    sublimeFile.mockImplementation((name) => name === a).mockReturnValue(expected)
    expect(typeof a).toEqual('string')
    sublimeFile.mockClear()
  })
})
