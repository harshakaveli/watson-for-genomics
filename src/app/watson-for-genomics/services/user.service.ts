import { RestService } from './../../shared/services/rest.service';
import { Injectable } from '@angular/core';
import { AppConfiguration } from './../../shared/services/app-config.service';

@Injectable()
export class UserService {

  constructor(private restService: RestService,
    private appConfiguration: AppConfiguration) { }
}
