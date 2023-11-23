public class AccountTriggerHandler {
    public static void accountUpdate(List<Account> accountUpdate){
        for(Account Acc: accountUpdate){
            Acc.Test_Update_Field__c = 'Test'; 
        }
        //I am changing metadata
    }
}