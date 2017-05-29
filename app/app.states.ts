import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
import { WorkflowService }    from './workflow/workflow.service';

export const appStates = [
    // 1st State
    { name: 'personal', url: '/personal',  component: PersonalComponent },
    // 2nd State:
    { name: 'work', url: '/work',  component: WorkComponent, onEnter: verifyWorkFlow },
    // 3rd State
    { name: 'address', url: '/address',  component: AddressComponent, onEnter: verifyWorkFlow },
    // 4th State
    { name: 'result', url: '/result',  component: ResultComponent, onEnter: verifyWorkFlow }
];

function verifyWorkFlow(transition, state) {
    console.log("Entered '" + state.name + "' state.");

    var $stateService = transition.router.stateService;
    var workflowService = transition.injector().get(WorkflowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    let firstState = workflowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log("Redirected to '" + firstState + "' state which it is the first invalid step.");
        return $stateService.target(firstState);
    };
}