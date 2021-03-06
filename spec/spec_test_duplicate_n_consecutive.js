describe("Testing Function: removeDuplicates", function(){
   it("35. removeDuplicates([1,1,2,3,3,3,4]) == [1,2,3,4] ", function(){
       expect(removeDuplicates([1,1,2,3,3,3,4])).toEqual([1,2,3,4]);
   });
   it("36. removeDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]) == [0,1,3,4,5,6,7,9,11]", function(){
       expect(removeDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11])).toEqual([0,1,3,4,5,6,7,9,11]);
   });
   it("37. removeDuplicates([3,3,3,3)] == [3]", function(){
       expect(removeDuplicates([3,3,3,3])).toEqual([3]);
   });
   it("38. removeDuplicates([9,6,3,3,3,1,3,6,5)] == [1,3,5,6,9]", function(){
       expect(removeDuplicates([9,6,3,3,3,1,3,6,5])).toEqual([1,3,5,6,9]);
   });
   it("39. removeDuplicates([2,9)] == [2,9]", function(){
       expect(removeDuplicates([2,9])).toEqual([2,9]);
   });
   it("40. removeDuplicates([4,5,8)] == [4,5,8]", function(){
       expect(removeDuplicates([4,5,8])).toEqual([4,5,8]);
   });
   it("41. removeDuplicates([]) == undefined", function(){
       expect(removeDuplicates([])).toEqual(undefined );
   });
   it("43. removeDuplicates([5]) == [5]", function(){
       expect(removeDuplicates([5])).toEqual([5]);
   });
   it("44. removeDuplicates([-5,-18,-18,5,-18,-3,-17,3,5,-4,-9,-17,-7]) == [-18,-17,-9,-7,-5,-4,-3,3,5]", function(){
       expect(removeDuplicates([-5,-18,-18,5,-18,-3,-17,3,5,-4,-9,-17,-7])).toEqual([-18,-17,-9,-7,-5,-4,-3,3,5]);
   });
   it("45. removeDuplicates([-6,-3,-7,7,3,-6,5,4,9,-12,-16)] == [-16,-12,-7,-6,-3,3,4,5,7,9]", function(){
       expect(removeDuplicates([-6,-3,-7,7,3,-6,5,4,9,-12,-16])).toEqual([-16,-12,-7,-6,-3,3,4,5,7,9]);
   });
});
describe("Testing Function: hasDuplicates", function(){
   it("46. no element results in undefined", function(){
       expect(hasDuplicates([])).toEqual(undefined );
   });
   it("47. hasDuplicates([5]) == false", function(){
       expect(hasDuplicates([5])).toEqual(false);
   });
   it("48. hasDuplicates([3,5,10,2,8]) == false", function(){
       expect(hasDuplicates([3,5,10,2,8])).toEqual(false);
   });
   it("49. hasDuplicates([3,5,10,2,8,-3,-1]) == false", function(){
       expect(hasDuplicates([3,5,10,2,8,-3,-1])).toEqual(false);
   });
   it("50. hasDuplicates([1,1,2,3,3,3,4]) == true", function(){
       expect(hasDuplicates([1,1,2,3,3,3,4])).toEqual(true);
   });
   it("51. hasDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]) == true", function(){
       expect(hasDuplicates([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11])).toEqual(true);
   });
   it("52. hasDuplicates([3,3,3,3]) == true", function(){
       expect(hasDuplicates([3,3,3,3])).toEqual(true);
   });
   it("53. hasDuplicates([-6,-3,7,7,3,-6,5,4,9,-12,-16]) == true", function(){
       expect(hasDuplicates([-6,-3,7,7,3,-6,5,4,9,-12,-16])).toEqual(true);
   });
});

describe("Testing Function: areConsecutive", function(){
   it("54. areConsecutive([2,3,4,5]) == true", function(){
       expect(areConsecutive([2,3,4,5])).toBe(true);
   });
   it("55. areConsecutive([1,2,3,4,5,6,7,8,9]) == true", function(){
       expect(areConsecutive([1,2,3,4,5,6,7,8,9])).toBe(true);
   });
   it("56. areConsecutive([1,2,3,5]) == false", function(){
       expect(areConsecutive([1,2,3,5])).toBe(false);
   });
   it("57. Allow Duplicates: areConsecutive([1,2,2,3,3,4]), true) == true", function(){
       expect(areConsecutive([1,2,2,3,3,4], true)).toBe(true);
   });
   it("58. Allow Duplicates, but Don't specify it as input argement: areConsecutive([1,2,2,3,3,4]) == true", function(){
       expect(areConsecutive([1,2,2,3,3,4])).toBe(true);
   });
   it("59. NOT allow Duplicates: areConsecutive([1,2,2,3,3,4], false) == false", function(){
       expect(areConsecutive([1,2,2,3,3,4], false)).toBe(false);
   });
   it("60. areConsecutive([]) == undefined ", function(){
       expect(areConsecutive([])).toBe(undefined );
   });
   it("61. areConsecutive([5]) == false", function(){
       expect(areConsecutive([5])).toBe(false);
   });
   it("62. areConsecutive([3,5,10,2,8]) == false", function(){
       expect(areConsecutive([3,5,10,2,8])).toBe(false);
   });
   it("63. Duplicates allowed: areConsecutive([5,1,3,5,4,1,0,2,2,2]) == true", function(){
       expect(areConsecutive([5,1,3,5,4,1,0,2,2,2])).toBe(true);
   });
   it("64. NOT allow Duplicates: areConsecutive([5,1,3,5,4,1,0,2,2,2], false) == false", function(){
       expect(areConsecutive([5,1,3,5,4,1,0,2,2,2], false)).toBe(false);
   });
});
