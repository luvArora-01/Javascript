// Javascript Execution Context

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2);
let result2 = addNum(4,3);

// 1. Global Execution Context
        // * this

    // (a) Memory Creation Phase:-
        /*
            val1->undefined
            val2->undefined
            addNum->definition
            result1->undefined
            result2->undefined
        */

    // (b) Execution Phase:-
        /*
            val1<-10
            val2<-5
            addNum->(
                        * creation of new variable environment + Execution thread
                        
                        # memory phase:-
                        val1->undefined
                        val2->undefined
                        total->undefined
                        
                        # execution phase:-
                        num1->10
                        num2->5
                        total->15
                        
                        * deletion of new variable environment + Execution thread
                    )
            result1<-15
            result2<-(
                        * creation of new variable environment + Execution thread
                        
                        # memory phase:-
                        val1->undefined
                        val2->undefined
                        total->undefined
                        
                        # execution phase:-
                        num1->4
                        num2->3
                        total->7
                        
                        * deletion of new variable environment + Execution thread
                    )
        */

// 2. Function Execution Context

// 3. Eval Execution Context
