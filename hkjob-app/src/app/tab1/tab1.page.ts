import { Component, OnInit } from '@angular/core'
import { GetJobsOverviewOutput, getJobsOverview } from 'src/api/job'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  data?: GetJobsOverviewOutput

  constructor() {}

  async ngOnInit() {
    this.data = await getJobsOverview({})
  }
}
