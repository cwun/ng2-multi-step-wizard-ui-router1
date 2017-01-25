import { Inject, Injectable } from "@angular/core";
import { UIRouter }           from "ui-router-ng2";


/** UIRouter Config  */
@Injectable()
export class UIRouterConfig {
  constructor(@Inject(UIRouter) router: UIRouter) {
    // If no URL matches, go to the `personal` state's name by default
    router.urlRouterProvider.otherwise(() => router.stateService.go('personal'));
  }
}
