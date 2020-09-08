import { Snippets } from './Snippet'
import { IData } from './types'

const insertDataScript = (digitalData: string) => {
  const script = document.createElement('script')
  script.innerHTML = digitalData
  return script
}

const initialize = ({ trackerUrl, digitalData, digitalDataName = 'digitalData' }: IData) => {
  const script = Snippets.script(trackerUrl)
  const data = Snippets.digitalData(digitalData, digitalDataName)
  const dataScript = insertDataScript(data)

  document.head.insertBefore(script, document.head.childNodes[0])
  if (digitalData) document.head.insertBefore(dataScript, document.head.childNodes[0])
}

export const AdobeTagManager = {
  initialize,
}
