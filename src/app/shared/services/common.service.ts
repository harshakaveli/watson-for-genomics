import { Injectable } from "@angular/core";
import { AppConfiguration } from '../../shared/services/app-config.service';
import { Router } from '@angular/router';

@Injectable()
export class CommonService {

    constructor(
        public appConfiguration: AppConfiguration,
        private router: Router) { }

    removeSpaces(status: string) {
        if (status) {
            return status.replace(/ /g, '');
        }
    }

    removeSpacesAndFWDash(status: string) {
        if (status) {
            let result = status.replace(/ /g, '');
            result = result.replace(/\//g, '');
            return result;
        }
    }

    getSizeSet(size: any) {
        if (size) {
            return size;
        } else {
            return 10;
        }
    }
}
