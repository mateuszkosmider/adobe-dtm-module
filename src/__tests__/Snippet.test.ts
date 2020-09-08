import { Snippets } from '../Snippet'

describe('Snippet', () => {
  it('should generate correnct code snippet', () => {
    const url = 'https://www.adobedtm.com/id.js'
    const result = Snippets.script(url)

    expect(result.async).toBe(true)
    expect(result.src).toBe('https://www.adobedtm.com/id.js')
    expect(result.type).toBe('text/javascript')
  })
})
