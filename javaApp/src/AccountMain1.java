
public class AccountMain1 {

    public static void main(String[] args) {

          // 계좌 객체 생성
          Account account1 = new Account("1111", "일길동", "aaaa", 10000);

          System.out.println(account1);          
          System.out.println(account1.toString());


        // 계좌 객체 생성
        Account account2 = new Account("1111", "일길동", "aaaa", 10000);
        
        // 계좌 객체 생성
        Account account3 = new Account("2222", "일길동", "aaaa", 10000);

        if (account2 == account3) {   // 주소 비교
            System.out.println("레퍼런스가 같다.");
        } else {
            System.out.println("레퍼런스가 다르다.");
        }


        if (account2.equals(account3)) {   // 객체의 내용 비교
            System.out.println("동일한 계좌입니다.");
        } else {
            System.out.println("다른 계좌입니다.");
        }

    }


}


