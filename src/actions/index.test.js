const rewire = require("rewire")
const index = rewire("./index")
const setTechnology = index.__get__("setTechnology")
// @ponicode
describe("setTechnology", () => {
    test("0", () => {
        let callFunction = () => {
            setTechnology("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            setTechnology("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            setTechnology("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            setTechnology("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            setTechnology(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
