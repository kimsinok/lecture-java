public class AccountMain {

    public static void main(String[] args) {

        // 계좌 객체 생성
        Account account1 = new Account("1111", "일길동", "aaaa", 10000);
        
        // 계좌 객체 생성
        Account account2 = new Account("2222", "이길동", "bbbb", 20000);

        // "1111" 고객 계좌의 잔고를 조회하다.
        int balance = account1.getBalance();
        System.out.println(balance);

        // "2222" 고객 계좌의 잔고를 조회하다.
        balance = account2.getBalance();
        System.out.println(balance);

        // "1111" 고객 계좌로 10000원을 입금하다.
        account1.deposit(10000);

        System.out.println(account1.getBalance());

        // "2222" 고객 계좌에서 5000원을 출금하다.
        account2.withdraw(5000);

        System.out.println(account2.getBalance());

        // "1111" 고객 계좌에서 "2222" 고객 계좌로 10000원을 이체하다.
        account1.transferAccount(account2, 10000);
        
        System.out.println(account1.getBalance());
        
        System.out.println(account2.getBalance());
    }

}
