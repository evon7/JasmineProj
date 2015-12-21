function TestRange(){
    describe("Checking invalid input", function(){
            //Equalo arguments are required, skipping them returns undefined
            it("1. No input argument. Expect undefined", function(){
                expect(range()).toBe(undefined);
                });
            it("2.One input argument. Expect undefined", function(){
                expect(range(1)).toBe(undefined);
                });
            }); 
    describe("Checking invalid input", function(){
            //Invalid ranges
            it("3. Positive step. start must be smaller than end", function(){
                expect(range(range(3,2,1))).toBe(undefined);
                });
            it("4. Negative step. start must be smaller than end", function(){
                expect(range(range(2,4,-1))).toBe(undefined);
                });
            //Invalid step
            it("5. 0 Step is invalid", function(){
                expect(range(range(2,5,0))).toBe(undefined);
                });
            });
    describe("Checking for skip step", function(){

            //Skip Step
            it("6. Start = end. Return single element array", function(){
                expect(range(3,3)).toEqual([3]);
                });
            it("7. Start = end. Return single element array", function(){
                expect(range(0,0)).toEqual([0]);
                });
            it("8. Step skipped. start < end -> increasing array", function(){
                expect(range(2,6)).toEqual([2,3,4,5,6]);
                });
            it("9. Step skipped. start > end -> decreasing array", function(){
                expect(range(6,2)).toEqual([6,5,4,3,2]);
                });
            it("10. Skip step. start == -2, end == 2. Expect: [-2,-1,0,1,2]", function(){
                expect(range(-2,2)).toEqual([-2,-1,0,1,2]);
                });
            it("11. Skip step. start == 2, end == -2. Expect: [2,1,0,-1,-2]", function(){
                expect(range(2,-2)).toEqual([2,1,0,-1,-2]);
                });
    });
    describe("Provide step == 1. valid range", function(){

            it("12. range(1,5,1) == [1,2,3,4,5]", function(){
                expect(range(1,5,1)).toEqual([1,2,3,4,5]);
                });
            it("13. range(5,1,1) == undefined (results in infinite sequence) ", function(){
                expect(range(5,1,1)).toBe(undefined);
                });
            });

    describe("provide step == -1. Valid and invalid range", function(){

            it("14. range(5,1,-1) == [5,4,3,2,1]", function(){
                expect(range(5,1,-1)).toEqual([5,4,3,2,1]);
                });
            it("15. range(5,1,1) == undefined (results in infinite sequence)", function(){
                expect(range(5,1,1)).toBe(undefined);
                });
            });

    describe("+ve step", function(){
            it("16. range(1,10,2) == [1,3,5,7,9]", function(){
                expect(range(1,10,2)).toEqual([1,3,5,7,9]);
                });
            it("17. range(1,3,5) == [1]", function(){
                expect(range(1,3,5)).toEqual([1]);
                });
            it("18. range(1,20,5) == [1,6,11,16]", function(){
                expect(range(1,20,5)).toEqual([1,6,11,16]);
                });
            });

    describe("-ve step", function(){
            it("19. range(10,2,-4) == [10,6,2]", function(){
                expect(range(10,2,-4)).toEqual([10,6,2]);
                });
            it("20. range(5,3,-4) == [5]", function(){
                expect(range(5,3,-4)).toEqual([5]);
                });
            });
}
