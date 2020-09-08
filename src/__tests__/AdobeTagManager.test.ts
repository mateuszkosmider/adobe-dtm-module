import { AdobeTagManager } from '../AdobeTagManager'

describe('AdobeTagManager', () => {
  it('should render digitalData', () => {
    const dtmArgs = {
      trackerUrl: 'trackerUrl',
      digitalData: {
        reportSuites: 'reportSuites',
        userInfo: 'userInfo',
      },
    }
    AdobeTagManager.initialize(dtmArgs)
    // @ts-ignore
    expect(window.digitalData).toEqual({ reportSuites: 'reportSuites', userInfo: 'userInfo' })
  })
})
