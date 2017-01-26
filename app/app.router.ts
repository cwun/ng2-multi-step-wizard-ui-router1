import { UIRouter }  from "ui-router-ng2";


/** UIRouter Config  */
export function UIRouterConfigFn(router: UIRouter) {
    // If no URL matches, go to the `personal` state's name by default
    router.urlService.rules.otherwise({ state: 'personal' });
}
