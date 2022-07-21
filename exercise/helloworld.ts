
function namespace(item: string):object {
    let items:Array<string> = item.split('.')
    let result: object = {}
    let count: number = 0
    let store: string = ''
    let temp: object = {}
    items.reduceRight(function(element:string, currentValue:string, currentIndex: number, array: string[]):string {

        if (count == 0){
            store = element
            result = {}
            result[store] = temp;
            temp = result
            count++
        }
        store = currentValue
        result = {}
        result[store] = temp;
        temp = result
        //store = currentValue
        return element
    });
    //console.log(JSON.stringify(result))
    return result
}

namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

export default namespace