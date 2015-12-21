describe("Testing Function: compute", function(){
   it("21. compute([1,2,3,4]) == [2,3]", function(){
       expect(compute([1,2,3,4])).toEqual([2,3]);
   });
   it("22. compute([11,29,32,45,55,67,555])  == [29,67]", function(){
       expect(compute([11,29,32,45,55,67,555])).toEqual([29,67]);
   });
   it("23. compute([1,1,2,3,3,3,4]) == [2,3]", function(){
       expect(compute([1,1,2,3,3,3,4])).toEqual([2,3]);
   });
   it("24. compute([]) == undefined", function(){
       expect(compute([])).toBe(undefined);
   });
   it("25. compute([5]) == [5,5]", function(){
       expect(compute([5])).toEqual([5,5]);
   });
   it("26. compute([2,9]) == [9,2]", function(){
       expect(compute([2,9])).toEqual([9,2]);
   })
   it("27. compute([4,5,8]) == [5,5]", function(){
       expect(compute([4,5,8])).toEqual([5,5]);
   });
   it("28. compute([-4,-7,-5,-3,-7,-4,-9,-7,-18,-2]) == [-17,-3] ", function(){
       expect(compute([-4,-7,-5,-3,-17,-4,-9,-7,-18,-2])).toEqual([-17,-3]);
   });
   it("29. compute([1,2,3,3,3,4,4,5,6,6,6,7]) == [2,6] ", function(){
       expect(compute([1,2,3,3,3,4,4,5,6,6,6,7])).toEqual([2,6]);
   });
   it("30. compute([-4,-7,5,3,7,4,9,7,18,-2] = [-4,9] ", function(){
       expect(compute([-4,-7,5,3,7,4,9,7,18,-2])).toEqual([-4,9]);
   });
   it("31. compute([-6,-3,-7,7,3,-6,5,4,9,-12,-16]) == [-12,7] ", function(){
       expect(compute([-6,-3,-7,7,3,-6,5,4,9,-12,-16])).toEqual([-12,7]);
   });
   it("33. compute([9,6,7,3,4,1,3,0,5]) == [1,7] ", function(){
       expect(compute([9,6,7,3,4,1,3,0,5])).toEqual([1,7]);
   });
   it("34. compute([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11]) == [1,9] ", function(){
       expect(compute([9,6,7,7,7,6,3,4,1,3,0,0,0,5,5,11])).toEqual([1,9]);
   });
});

