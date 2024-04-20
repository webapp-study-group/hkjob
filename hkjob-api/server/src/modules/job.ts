import { defModule } from '../api'

export let jobModule = defModule({ name: 'job' })
let { defAPI } = jobModule

defAPI('GET', '/jobs/overview', {
  sampleInput: {},
  sampleOutput: { job_count: 123 },
})

jobModule.saveSDK()
