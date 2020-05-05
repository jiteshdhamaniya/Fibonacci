<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NumLogicController extends Controller
{

    /**
     * Convert Nomral Numbers to Roman Numbers
     * @param $number
     * @return $number
     */


    public function numberToRomanRepresentation($number)
    {

        $map = array(
            'M' => 1000,
            'CM' => 900,
            'D' => 500,
            'CD' => 400,
            'C' => 100,
            'XC' => 90,
            'L' => 50,
            'XL' => 40,
            'X' => 10,
            'IX' => 9,
            'V' => 5,
            'IV' => 4,
            'I' => 1
        );

        $returnValue = '';

        while ($number > 0) {
            foreach ($map as $roman => $int) {
                if ($number >= $int) {
                    $number -= $int;
                    $returnValue .= $roman;
                    break;
                }
            }
        }
        return $returnValue;
    }

    /**
     *  Find char in roman
     *  @param $number(int), $seq(boolean)
     *  @return $array(Array)
    */

    public function roman($num,$seq=false)
    {
        $series = [];
        $sum = 0;
        for ($i=0; $i < $num ; $i++) {

            $number = $this->numberToRomanRepresentation($i);

            if(strpos((string)$number,"X")!== FALSE){
                array_push($series,$number);
            }

            $sum = $sum + substr_count((string)$number,"X");

        }

        // Array
        $array = ['repetitions'=>$sum];

        if($seq){
            // we need to return numbers as well sum
            $array = [
                'series' => $series,
                'repetitions' => $sum,
            ];
        }

        return $array;

    }

    /**
     *  N Number Palindrome
     *  @param $number(int)
     *  @return $array(Array)
     */


    public function palindrome($num,$sum=false){

        $array = [];

        // if sum is needed
        $sum = isset($sum) && $sum!='' ? true : false;

            // Run loop to $num
            for ($i=0; $i < $num ; $i++) {

                $str = (string)$i;

                // we only interested if its palindrome
                if($str == strrev($str)){
                    // push to array
                    array_push($array,$i);
                }
            }

        // if need sum too.
        if($sum){
            // we need to return numbers as well sum
            $array = [
                'series' => $array,
                'sum' => array_sum($array),
            ];
        }

      return ( $array );

    }

    /**
     *  N Number of Fibonacci
     *  @param $number(int)
     *  @return $array(Array)
     */

    public function Fnumber($num,$sum=false){

        // if sum is needed
        $sum = isset($sum) && $sum!='' ? true : false;
        $array = [];

            // N number of fibannachie numbers
            for ($i=0; $i < $num; $i++) {

                switch ($i) {
                    case 0:
                        array_push($array,0);
                    break;

                    case 1:
                        array_push($array,1);
                        $prevprev = 0;
                        $prev = 1;
                    break;

                    case 2:
                        array_push($array,1);
                        $prevprev = 1;
                        $prev = 1;
                    break;

                    default:

                    array_push($array,$prevprev+$prev);

                    $previous = $prevprev+$prev;
                    $preprevious = $prev;

                    $prevprev = $preprevious;
                    $prev = $previous;

                    break;
                }

            }

            if($sum){
                // we need to return numbers as well sum
                $array = [
                    'series' => $array,
                    'sum' => array_sum($array),
                ];
            }

            return $array;

    }

    /**
     *  N Number Fibonacci under a specific number
     *  @param $type=string|odd|even, $num=(int), $sum=sum|boolean
     */

    public function FnumberType($type,$num,$sum=false){

        $echo = 0;
        $prevprev = 0;
        $prev = 0;
        $array = [];

        $sum = isset($sum) && $sum!='' ? true : false;

        // N Odd numbers of fibannachie numbers
        for ($i=0; $i <= $num; $i++) {

            // break if sum is equal or above
            if($prevprev+$prev >= $num ){
                break;
           }

           switch ($i) {
            case 0:
              $echo = 0;
            break;

            case 1:
                $prevprev = 0;
                $prev = 1;
                $echo = 1;
            break;

            case 2:
                $prevprev = 1;
                $prev = 1;
                $echo = 1;
            break;

            default:

                $echo = $prevprev+$prev;
                $previous = $prevprev+$prev;
                $preprevious = $prev;

                $prevprev = $preprevious;
                $prev = $previous;

            break;
           }

            if($type=='odd'){
                // if its odd.
                if($echo % 2 != 0){
                    array_push($array,$echo);
                }
            }
            else{
                // if its even or 0. as 0 is even number due to parity.
                if($echo % 2 == 0 || $echo == 0){
                    array_push($array,$echo);
                }
            }

        } //

        if($sum){
            // we need to return numbers as well sum
            $array = [
                'series' => $array,
                'sum' => array_sum($array),
            ];
        }

        return $array;

    }

} // Class
