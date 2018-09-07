import { Component, OnInit } from '@angular/core';
import {
    HttpClient,
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";

import {
    AnalysisType,
    EntitySpaceViewVersionState,
    ViewerType,
    WorkItemState,
    TriageAnalysisResultDiaplayType,
    EntitySpaceViewState,
    ReportType,
    MissSlaType
} from '../../core/enums';

import { Logger } from '../../helper/logger';
import { Constants } from '../../core/common/constants';
import { JobType, JobState } from '../../core/job/job';

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseComponent implements OnInit {
    AnalysisType: typeof AnalysisType = AnalysisType;
    JobType: typeof JobType = JobType;
    JobState: typeof JobState = JobState;
    EntitySpaceViewVersionState: typeof EntitySpaceViewVersionState = EntitySpaceViewVersionState;
    EntitySpaceViewState: typeof EntitySpaceViewState = EntitySpaceViewState;
    ViewerType: typeof ViewerType = ViewerType;
    WorkItemState: typeof WorkItemState = WorkItemState;
    TriageAnalysisResultDiaplayType: typeof TriageAnalysisResultDiaplayType = TriageAnalysisResultDiaplayType;
    ReportType: typeof ReportType = ReportType;
    MissSlaType: typeof MissSlaType = MissSlaType;
    logger: Logger = new Logger("onboardingToolLogger");
    largestDisplayHours: number = Constants.largestDisplayHours;

    constructor() { }

    ngOnInit() { }

    transformToDays(hours: number) {
        if (hours < this.largestDisplayHours) {
            return hours;
        }
        else {
            return Number((hours / 24).toFixed(2));
        }
    }

    trackByIndex(index: number, item: any) {
        return item.id;
    }
}