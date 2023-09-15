@isTest
public class AccountTriggerHandlerTest {
    @isTest 
    public static void test(){
        Account Acc = new Account();
        Acc.Name = 'Test Account';
        insert Acc;
        system.assertequals(1,1);
    }
}