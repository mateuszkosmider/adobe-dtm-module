import { ISnippet } from './types'

export const Snippets: ISnippet = {
  script: function (url) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    return script
  },

  digitalData: function (digitalData, digitalDataName) {
    return `var ${digitalDataName} = ${JSON.stringify(digitalData)}`
  }
}  