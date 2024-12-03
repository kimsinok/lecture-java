package exception;

// 잔고가 부족한 경우 예외 
// UnChecked Exception
public class InsufficiantBalanceException extends RuntimeException {

    public InsufficiantBalanceException() {
        super("잔고가 부족합니다.");
    }

}
