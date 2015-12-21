/*********************************************************************************
Function takes two arguments (start and end) and optionally takes a third
argument called step. The function should return an array containing all the
numbers from start up to end (including both start as well as end).

The step if provided indicates the "step" value used to build up the array.

If step is not provided, it should return an array which increments (or decrements)
the elements by 1.

Examples:
=========

range(2,5) --> [2,3,4,5]
range(5,3) --> [5,4,3]
range(3,10,3) --> [3,6,9]

In all the cases where the parameters are invalid,
the function should return undefined

********************************************************************************/

function range( start,  end,  step) {
    var rangeArr = new Array();
    var num=0;

    //test 1, 2
    if ((start==undefined ) || (end==undefined))
        return undefined;

    //test 3, 12, 14
    if (((end-start) < 0) && (step > 0))
        return undefined;

    //test 4 
    if (((end-start) > 0) && (step < 0))
        return undefined;

    //test 5
    if (((end-start) > 0) && (step == 0))
        return undefined;

    if (step== undefined){
        if (start == end)   
            return [start]; //test 6

        if (end > start)    //test 7, 9
            step = 1;

        if (end < start)    //test 8, 10
            step = -1;
    }

    console.log("start: " + start);
    console.log("end: " + end);
    console.log("step: " + step);
    console.log("num...before loop: " + num);

    if (step < 0)
        for (num = start; num >= end; num += step){
            console.log("num...in the loop: " + num);
            rangeArr.push(num);
        }
    else
        for (num = start; num <= end; num += step){
            console.log("num...in the loop: " + num);
            rangeArr.push(num);
        }

    //yvso debug
    /*
    var j=0, len;
    len = rangeArr.length;
    for (j=0; j<len; j++){
        console.log("rangeArr" + "[" + j +"] = " +  rangeArr[j]);
    }
    */

    return rangeArr;

}

/***********************************************************************************
 * The function takes an array of numbers and find the following
 * 1. The second lowest number
 * 2. The second largest nunber
 *
 * Returns an array of two elements where
 * First element: second smallest number
 * Second element: second largest number
 *
 * e.g. compute(1,2,3,4) --> [2,3]
 *      compute (5,2,7,1,9,10) --> [2, 9]
 *
 * If an passed in array is empty, return undefined
 * If there is no second largest element in the array [2,2,2] return the largest
 * If there is no second smallest element in the array [4,4] return the smallest
 * It may be possible that second largest and second smallest are the same [1,2,3]
 *
 * Be sure to think of all the different permutations and combinations and
 * provide test suite that covers many of them
 *
 ************************************************************************************/
function compute(numbers) {
    var sortedAndNoDupArr = new Array(); 
    var secGreatLow = new Array();

    if (numbers.length == 0){              //test 3
        return undefined;
    }

    //clean out duplicates for accurate answers
    sortedAndNoDupArr = removeDupAndSort(numbers); 
    //console.log("sortedAndNoDupArr: " + sortedAndNoDupArr);

    if (sortedAndNoDupArr.length == 1){               //test 4
        secGreatLow.push(sortedAndNoDupArr[0]);
        secGreatLow.push(sortedAndNoDupArr[0]);
        return secGreatLow;
    }

    secGreatLow.push(sortedAndNoDupArr[1]); //the 2nd smallest
    secGreatLow.push(sortedAndNoDupArr[(sortedAndNoDupArr.length)-2]); //the 2nd largest

    return secGreatLow;
}

/***********************************************************************************
* This function takes an array of numbers, sort them, and remove any duplicate that
* exists. It is to aid the compute function above. Once an array is sorted and 
* duplcates removed, the second largest and smallest becomes much more apparent.
 ************************************************************************************/
function removeDupAndSort(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();
    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    //console.log("sortedArr: " + sortedArr);

    noDupArr = sortedArr.slice(0); //make a copy

    var i=0;
    while (i < noDupArr.length ){
        //if two adjacent elements of a sorted array is the same, then kill one
        if(noDupArr[i] == noDupArr[i+1]){                  
            noDupArr.splice((i+1),1);
            //console.log("noDupArr: " + noDupArr);
            continue; //skip i++ to check this index again. Maybe more than one duplicate
        }
        i++;
    }
    return noDupArr;
}



/***********************************************************************************
  Function # 1
  ============
  Write a function with the following signature:
  function removeDuplicates(numbers)

  The function takes an array of numbers (sorted or not) and removes duplicates
  from that array. It returns an array of numbers with duplicates removed (i.e.
  every element appears exactly once)

  e.g. removeDuplicates([1,1,2,2,3,3,3,3,4]) --> [1,2,3,4]
  removeDuplicates([1,2,3]) --> [1,2,3]
  removeDuplicates([1,3,2,4,3,2,1,1,2,4,3,2,5]) --> [1,2,3,4,5]

  It is not assumed that numbers passed to the function will be sorted
  Though, you may find that if you sort the numbers before working on them yield
  better implementation
 ***********************************************************************************/

function removeDuplicates(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();

    if (tempArr.length == 0)
        return undefined;

    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    console.log("sortedArr: " + sortedArr);

    noDupArr = sortedArr.slice(0); //make a copy

    var i=0;
    while (i < noDupArr.length ){
        //if two adjacent elements of a sorted array is the same, then kill one
        if(noDupArr[i] == noDupArr[i+1]){                  
            noDupArr.splice((i+1),1);
            console.log("noDupArr: " + noDupArr);
            continue; //skip i++ to check this element again. Maybe more than one duplicate
        }
        i++;
    }
    return noDupArr;
}


/***********************************************************************************
  Function # 2
  =============
  Write a function with the following signature:
  function hasDuplicates(numbers)

  The function takes an array of numbers and returns whether there were duplicates
  or not (returns true if there are duplicates, false otherwise)

  e.g. hasDuplicates([3,5,7,1,9]) --> false
  hasDuplicates([3,1,4,3]) --> true
  hasDuplicates([]) --> false

  This function will also be helpful in writing your tests. Can you think of a way
  to incorporate the hasDuplicates function while writing tests for removeDuplicates?
 ***********************************************************************************/

function hasDuplicates(tempArr) {
    var sortedArr = new Array();
    var noDupArr = new Array();

    if (tempArr.length == 0)
        return undefined;

    //sort it
    //console.log("tempArr: " + tempArr);
    sortedArr = tempArr.sort(function(tempArr, b){return tempArr - b});
    //console.log("sortedArr: " + sortedArr);


    var i=0;
    while (i < sortedArr.length ){
        //if two adjacent elements of a sorted array is the same, 
        //report true, and no need to continue
        if(sortedArr[i] == sortedArr[i+1]){                  
            //console.log("sortedArr: " + sortedArr);
            return true;
        }
        i++;
    }
    return false;
}


/***********************************************************************************
  Function # 3
  ============
  Write a function with the following signature:
  function areConsecutive(numbers, [allowDuplicates])

  The function takes an array of numbers and determines if the numbers are consecutive
  or not.

  Following numbers are considered consecutive:
  [2,3,4,5]
  [1,2,3,4,5,6,7,8,9]

  Following numbers are not considred consecutive:
  [1,2,3,5]

  The optional argument "allowDuplicates" tells the function whether to allow
  dupliacet numbers when determining "consecutiveness"

  This following numbers are consecutive if allowDuplicates is true
  [1,1,2,3,3,4]

  However, above numbers are not considered consecutive if allowDuplicates if false

  You will see that you will use "removeDuplicates" and "hasDuplicate" function
  inside this functions. And hence it is imperative that those two functions are
  well tested.

Note: The range function developed in first question can be used to generate
consecutive numbers as well (if the step == +1 / -1)

You can use that function while writing your tests
 ***********************************************************************************/
function areConsecutive(numArr, allowDuplicates){
    var i=0;
    var areConsec;
    var tempArr = new Array();

    if (allowDuplicates == undefined) { allowDuplicates = true; }

    if (numArr == undefined)
        return undefined;
        
    if (numArr.length == 0)
        return undefined;

    if (numArr.length == 1)
        return false;

    //if it has duplicate, and we allow duplicates, then sort it and clean it up.
    //sorting is done inside removeDuplicates
    if (hasDuplicates(numArr)){
        if (allowDuplicates){
            tempArr = removeDuplicates(numArr);
            numArr = new Array(); //clean up evertthing
            numArr = tempArr;
        }
    }


    for (i=0; i < (numArr.length-1); i++){
        if((numArr[i+1] - numArr[i]) == 1){
            console.log("i: " + i);
            console.log("numArr: " + numArr[i] +"  " + numArr[i+1]);
            areConsec = true;
            console.log("areConsec: " + areConsec);
        }else{
            areConsec = false;
            console.log("areConsec: " + areConsec);
            break;
        }
    }



    return areConsec;

}



