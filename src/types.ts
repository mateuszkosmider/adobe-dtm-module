export interface IData {
  trackerUrl: string
  digitalData: object
  digitalDataName?: string
}

// export interface ITags {
//   script: HTMLScriptElement
//   digitalDataVar: string
// }

export interface ISnippet {
  script: (url: string) => HTMLScriptElement
  digitalData: (digitalData: object, digitalDataName: string) => string
}

export interface IManager {
  initialize: (params: IData) => void
  dtm: (args: IData) => any
  insertDataScript: (digitalData: string) => HTMLScriptElement
}
