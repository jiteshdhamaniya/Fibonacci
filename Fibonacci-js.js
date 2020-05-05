/*
* Reverse String
*/
  
  /*
  * Array Sum
  */
   add = function(arr) {
                return arr.reduce((a, b) => a + b, 0);
                };

function ReverseString(str) {

                // Step 1. Use the split() method to return a new array
                var splitString = str.split(""); // var splitString = "hello".split("");
                // ["h", "e", "l", "l", "o"]

                // Step 2. Use the reverse() method to reverse the new created array
                var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
                // ["o", "l", "l", "e", "h"]

                // Step 3. Use the join() method to join all elements of the array into a string
                var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
                // "olleh"

                //Step 4. Return the reversed string
                return joinArray; // "olleh"

                }

             
/**
 *  N Number Palindrome
 *  @param $number(int)
 *  @return $array(Array)
 */

   function palindrome(num){

                var array = [];

                        // Run loop to num
                        for (var i=0; i<num; i++) {

                            var str = i.toString();

                            // we only interested if its palindrome
                            if(str === ReverseString(str)){
                                // push to array
                                array.push(i);

                            }
                        }

                    return add(array);

                }

  // output
  document.write(palindrome(10000));
  
  
    /**
     *  N Number of Fibonacci
     *  @param $number(int)
     *  @return $array(Array)
     */
     
     

                function fibonacci(type,num){

                        var echo = 0;
                        var prevprev = 0;
                        var prev = 0;
                        var array = [];

                        // N Odd numbers of fibannachie numbers
                        for (var i=0; i < num; i++) {

                            // break if sum is equal or above
                            if(prevprev+prev >= num ){
                                break;
                        }

                        switch (i) {
                            case 0:
                            echo = 0;
                            break;

                            case 1:
                                prevprev = 0;
                                prev = 1;
                                echo = 1;
                            break;

                            case 2:
                                prevprev = 1;
                                prev = 1;
                                echo = 1;
                            break;

                            default:

                                echo = prevprev+prev;
                                previous = prevprev+prev;
                                preprevious = prev;

                                prevprev = preprevious;
                                prev = previous;

                            break;
                        }

                            if(type==='odd'){
                                // if its odd.
                                if(echo % 2 != 0){
                                    array.push(echo)
                                    //array_push($array,$echo);
                                }
                            }
                            else{
                                // if its even or 0. as 0 is even number due to parity.
                                if(echo % 2 == 0 || echo == 0){
                                    array.push(echo)
                                    //array_push($array,$echo);
                                }
                            }

                        } //

                        return add(array);

                }

          // fibonacci
          document.write(fibonacci('odd',10000));
          
          
    /**
     *  Find char in roman
     *  @param $number(int), $seq(boolean)
     *  @return $array(Array)
    */       
          
     function NumberToRoman(number){
            let roman = "";
            const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
            let a;
            if(number < 1 || number > 3999)
                return "Enter a number between 1 and 3999";
            else{
                for(let key in romanNumList){
                    a = Math.floor(number / romanNumList[key]);
                    if(a >= 0){
                        for(let i = 0; i < a; i++){
                        roman += key;
                        }
                    }
                    number = number % romanNumList[key];
                }
            }

                return roman;
            }


            function roman(num)
                {
                    var sum = [];
                    for (var i=0; i <= num ; i++) {

                        var number = NumberToRoman(i);

                        var pattern = new RegExp('X', 'ig');

                        if( ( number.toString().match(pattern) || [] ).length > 0 ){

                            sum.push(( number.toString().match(pattern) || [] ).length);

                        }
                    }
                    return add(sum);
                }

            document.write(roman(2660));      
     
     
     
     /**
     * ASC Value of Sentence
     * @param $string
     * @return $sum
     */
     
        function ascValue(){

            var string = "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.";


            var pattern = /[\s\.\:\']/ig;

            string = string.replace(pattern,'');

            // convert to array
            var array = string.split("");

            var ascvalue = 0;
            var sum = [];

                array.forEach(function(value, index){

                        // value to chr
                        ascvalue = value.charCodeAt();

                        // vowels having the inverse value of their ASCII codes
                        if(value.toUpperCase()=='A' || value.toUpperCase()=='E' || value.toUpperCase()=='I' || value.toUpperCase()=='O' || value.toUpperCase()=='U'){
                            // this is vowels
                            ascvalue = value.charCodeAt()
                            ascvalue = -ascvalue;
                        }

                        sum.push(parseInt(ascvalue));

                } );

            return add(sum);

            }

            document.write(ascValue());
     
  
