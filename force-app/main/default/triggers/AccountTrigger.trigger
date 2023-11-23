trigger AccountTrigger on Account (before Insert) {
    accountTriggerHandler.accountUpdate(Trigger.new); 
}