import { Snippets } from './Snippet'
import { IManager } from './types'

export const AdobeTagManager: IManager = {
  insertDataScript: function (digitalData) {
    const script = document.createElement('script')
    script.innerHTML = digitalData
    return script
  },

  dtm: function ({ trackerUrl, digitalData, digitalDataName }) {
    const script = Snippets.script(trackerUrl)
    // @ts-ignore
    const data = Snippets.digitalData(digitalData, digitalDataName)
    const dataScript = this.insertDataScript(data)

    return {
      script,
      dataScript
    }
  },

  initialize: function ({ trackerUrl, digitalData, digitalDataName = 'digitalData' }) {
    const dtm = this.dtm({
      trackerUrl,
      digitalData: digitalData || undefined,
      digitalDataName
    })

    document.head.insertBefore(dtm.script, document.head.childNodes[0])
    if (digitalData) document.head.insertBefore(dtm.dataScript, document.head.childNodes[0])
  }
}
