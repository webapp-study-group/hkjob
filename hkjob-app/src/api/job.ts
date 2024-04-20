// This file is generated automatically
// Don't edit this file directly

import { call, toParams } from './utils'

export let api_origin = '/api'

// GET /api/jobs/overview
export function getJobsOverview(input: GetJobsOverviewInput): Promise<GetJobsOverviewOutput & { error?: string }> {
  return call('GET', api_origin + `/jobs/overview`)
}
export type GetJobsOverviewInput = {
}
export type GetJobsOverviewOutput = {
  job_count: number
}
