package exception;

public class AccountExam1 {

    public static void main(String[] args) {

        Account account1 = new Account("1111", "일길동", "aaaa", 10000);        
        Account account2 = new Account("2222", "일길동", "aaaa", 10000);

        System.out.printf("1111 잔고 : %d%n", account1.getBalance());
        System.out.printf("2222 잔고 : %d%n", account2.getBalance());


        // 1111 고객 계좌에서 2222 고객 계좌로 20000원을 계좌이체하다.
        try {
            account1.transferAccount(account2, 20000);
        } catch (InsufficiantBalanceException ex) { 
            System.out.println(ex.getMessage());
        }

        System.out.printf("1111 잔고 : %d%n", account1.getBalance());
        System.out.printf("2222 잔고 : %d%n", account2.getBalance());
        
    }

}
