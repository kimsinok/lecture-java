public class Test1 {

    public static void print(Account temp) {
        temp.printAccount();
    }


    public static void main(String[] args) {
        
        // 계좌 객체 생성
        Account account1 = new Account("1111", "일길동", "aaaa", 10000);

        print(account1);
        
        // 계좌 객체 생성
        Account account2 = new Account("2222", "이길동", "bbbb", 20000);

      
        print(account2);

    }

}
