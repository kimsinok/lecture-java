package interface1;

interface Pay {

    //추상 메소드
    //public abstract void payment();
    void payment();

} // end of Pay interface


class Card implements Pay {
    
    private String cardNumber;
    private int amount;

    // 생성자 메소드
    public Card() {
    
    }
    
    // 생성자 메소드
    public Card(String cardNumber, int amount) {
        this.cardNumber = cardNumber;
        this.amount = amount;
    }

    @Override
    public void payment() {
        System.out.printf("cardNumber : %s, amount : %d%n", this.cardNumber, this.amount );
    }


} //end of Card class


class Cash implements Pay {

    private int amount;

    public Cash() {

    }

    public Cash(int amount) {
        this.amount = amount;
    }

    @Override
    public void payment() {
       System.out.printf("Cash amount : %,d%n", amount);        
    }

} //end of Cash class



public class InterfaceExam {

    public static void main(String[] args) {

        // 객체 생성
        // Card card = new Card("1111",  10000);        
        // card.payment();

        // Cash cash = new Cash(5000);
        // cash.payment();

        // Pay pay = new Pay();  // Error
        
       

        Pay card = new Card("1111",  10000); 
        card.payment();


        Pay cash = new Cash(10000); 
        cash.payment();





    }

}
