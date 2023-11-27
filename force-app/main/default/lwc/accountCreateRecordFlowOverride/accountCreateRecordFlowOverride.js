// accountCreateRecordFlowOverride.js
import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent, FlowLaunchEvent } from 'lightning/flowSupport';

export default class AccountCreateRecordFlowOverride extends LightningElement {
    @api recordTypeId; // Pass the record type ID from the page

    // Launch the Flow when the "New" button is clicked
    handleNewButtonClick() {
        const flowName = 'TestFlow'; // Replace with your Flow API Name
        const inputVariables = [
            {
                name: 'recordTypeId',
                type: 'String',
                value: this.recordTypeId
            }
        ];

        const flowLaunchEvent = new FlowLaunchEvent('flowLaunch');
        flowLaunchEvent.setParams({
            flowName: flowName,
            inputVariables: inputVariables
        });
        this.dispatchEvent(flowLaunchEvent);
    }

    // Handle Flow finish event
    handleFlowFinish(event) {
        if (event.detail.flowStatus === 'FINISHED') {
            // Redirect to the newly created record
            const recordId = event.detail.outputVariables[0].value; // Assuming the Flow returns the new record ID
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: recordId,
                    objectApiName: 'Account', // Replace with the API Name of the object
                    actionName: 'view'
                }
            });
        }
    }
}