package collection;

import java.util.ArrayList;

public class ArrayListExam2 {

    public static void printAccountList2(ArrayList<Account> accounts) {   
        
        if (accounts.isEmpty()) {
            System.out.println("내용이 없습니다.");
            return;
        }
    
        for (int i = 0; i < accounts.size(); i++) {
            Account temp = accounts.get(i);
            System.out.println(temp);
            // System.out.printf("잔고 : %d%n", temp.getBalance());
        }

    }


    public static void printAccountList1(ArrayList<Account> accounts) {        
        for (Account temp : accounts) {
            System.out.printf("잔고 : %d%n", temp.getBalance());
            //System.out.print(temp);
            //System.out.print(temp.toString());
        }
    }

    public static void main(String[] args) {

        ArrayList<Account> accounts = new ArrayList<>();

        accounts.add(new Account("1111", "일길동", "1234", 1000));
        accounts.add(new Account("2222", "이길동", "2345", 2000));
        accounts.add(new Account("3333", "삼길동", "3456", 3000));

        // printAccountList1(accounts);

        printAccountList2(accounts);
        
    }

}