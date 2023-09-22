// first step is to define the first spec suite

describe('First Test', ()=> {
    let testVariable:any;

    beforeEach(()=> {
        testVariable  = {};
    }) // This is a lifecycle method that runs before every time test cases runs

    // writing tests cases
    it('should return true if a is true', ()=> {
        // arrange the data to test
        testVariable.a = false;


        // act --> This means that perform some action
        testVariable.a = true;

        //assert

        expect(testVariable.a).toBe(true);
    })
})