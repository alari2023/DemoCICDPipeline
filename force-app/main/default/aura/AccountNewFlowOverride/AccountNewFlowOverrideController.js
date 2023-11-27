// AccountNewFlowOverrideController.js
({
    doInit: function(component, event, helper) {
        var flow = component.find("flowData");
        var flowName = 'TestFlow'; // Replace with your Flow API Name
        var inputVariables = [
            {
                name: 'recordTypeId',
                type: 'String',
                value: component.get("v.recordTypeId")
            }
        ];

        flow.startFlow(flowName, inputVariables);
    },

    handleStatusChange: function (component, event) {
        if (event.getParam("status") === "FINISHED") {
            var outputVariables = event.getParam("outputVariables");
            if (outputVariables && outputVariables.length > 0) {
                var recordId = outputVariables[0].value; // Assuming the Flow returns the new record ID
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": recordId,
                    "slideDevName": "detail"
                });
                navEvt.fire();
            }
        }
    }
})