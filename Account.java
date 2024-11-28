
public class Account {
    //instance field
    private String acccountNumber;
    private String name;
    private String pwd;
    private int balance;


    // Default Constructor Method
    public Account() {

    }

    // Constructor Method
    public Account(String acccountNumber, String name, String pwd, int balance) {
        this.acccountNumber = acccountNumber;
        this.name = name;
        this.pwd = pwd;
        this.balance = balance;
    }

    // instance method
    public int getBalance() {
        return this.balance;
    }

    // 입금하다.
    public void deposit(int balance) {
        this.balance += balance;
        // this.balance = this.balance + balance;
    }

    // 출금하다.
    public void withdraw(int balance) {
        this.balance -= balance;
        // this.balance = this.balance - balance;
    }

    // 계좌이체하다.
    public void transferAccount(Account account, int balance) {
        this.withdraw(balance);
        account.deposit(balance);
    }

}
