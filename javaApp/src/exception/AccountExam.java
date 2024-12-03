package exception;

public class AccountExam {

    public static void main(String[] args) {

        Account account = new Account("1", "홍길동", "1111", 10000);

        // 계좌번호가 1인 고객 계좌의 잔고를 조회하다.
        System.out.println(account.getBalance());

        try {            
            // 계좌번호가 1인 고객 계좌에서 20000원을 출금하다.
            account.withdraw(20000);

        } catch (InsufficiantBalanceException e) {
            System.out.println(e.getMessage());
        }
                
        // 계좌번호가 1인 고객 계좌의 잔고를 조회하다.        
        System.out.println(account.getBalance());

    }

}
