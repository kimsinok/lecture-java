package exception;

public class Account  {
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
    public void withdraw(int balance) throws InsufficiantBalanceException {
        
        if (balance > this.balance) {
            throw new InsufficiantBalanceException();
        }
        this.balance -= balance;
        // this.balance = this.balance - balance;
    }

    // 계좌이체하다.
    public void transferAccount(Account account, int balance) throws InsufficiantBalanceException {
        this.withdraw(balance);
        account.deposit(balance);
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public void printAccount() {
        System.out.printf("계좌번호 : %s, 이름 : %s, 비밀번호 : %s, 잔고 : %d%n", 
            this.acccountNumber, this.name, this.pwd, this.balance);
    }

    @Override
    public String toString() {
        return String.format("계좌번호 : %s, 이름 : %s, 비밀번호 : %s, 잔고 : %d%n", 
            this.acccountNumber, this.name, this.pwd, this.balance);
    }

    @Override
    public boolean equals(Object obj) {
        Account account = (Account)obj;
        if(this.acccountNumber.equals(account.acccountNumber))  {
            return true;
        }
        return false;
    }

    
}
