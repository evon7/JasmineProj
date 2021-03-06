describe("Checking invalid input", function(){
    //two arguments are required, skipping them returns undefined
    it("No input argument. Expect undefined", function(){
      expect(range()).toBe(undefined);
    });
    it("One input argument. Expect undefined", function(){
      expect(range(1)).toBe(undefined);
    });
 } 
describe("Checking invalid input", function(){
    //Invalid ranges
    it("Positive step. start must be smaller than end", function(){
      expect(range(range(3,2,1))).toBe(undefined);
    });
    it("Negative step. start must be smaller than end", function(){
      expect(range(range(2,4,-1))).toBe(undefined);
    });
    //Invalid step
    it("0 Step is invalid", function(){
      expect(range(range(2,5,0))).toBe(undefined);
    });
}
/*
describe("Checking for skip step", function(){

    //Skip Step
    it("Start = end. Return single element array", function(){
      expect(range(range(3,3))).toBe([3]);
    });
    it("Start = end. Return single element array", function(){
      expect(range(range(0,0))).toBe([0]);
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });
    it("", function(){
      expect(range()).toBe();
    });














    it("Step argument is missing. Assume increment by 1 (start < finished)", function(){
      expect(range(2,6)).toEqual([2,3,4,5,6]);
    });
  });
*/


