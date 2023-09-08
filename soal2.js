
    const checkTypeNumber = (givenNumber) => {
            if (givenNumber == undefined) {
                return "ERROR: Bro where is the parameter?"
            } else if (typeof (givenNumber) !== "number") {
                return ("Error: Invalid data type")
            } else if (givenNumber % 2 == 0) {
                return ("GENAP")
            } else {
                return ("GANJIL")
            }
        }
                

        console.log(checkTypeNumber (10)) //genap
        console.log(checkTypeNumber (3)) //ganjil
        console.log(checkTypeNumber ("3"))
        console.log(checkTypeNumber ({}))
        console.log(checkTypeNumber ()) 


