import { Inject, Injectable } from "@angular/core";
import { UIRouter }           from "ui-router-ng2";

import { FormDataService }    from './data/formData.service'

/** UIRouter Config  */
@Injectable()
export class UIRouterConfig {
  constructor(@Inject(FormDataService) formDataService, @Inject(UIRouter) router: UIRouter) {
    // If no URL matches, go to the `personal` state's name by default
    router.urlRouterProvider.otherwise(() => router.stateService.go('personal'));
  }
}
