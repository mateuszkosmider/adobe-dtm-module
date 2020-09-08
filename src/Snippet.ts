// export const Snippets: ISnippet = {
//   script: function (url) {
//     const script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.async = true
//     script.src = url
//     return script
//   },

//   digitalData: function (digitalData, digitalDataName) {
//     return `var ${digitalDataName} = ${JSON.stringify(digitalData)}`
//   },
// }

const script = (url: string) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = url
  return script
}

const digitalData = (digitalData: object, digitalDataName: string) => {
  return `var ${digitalDataName} = ${JSON.stringify(digitalData)}`
}

export const Snippets = {
  script,
  digitalData,
}
