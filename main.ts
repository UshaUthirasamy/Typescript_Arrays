import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayFindMultiples(myArray: number[]) : Array<Number> {
      var result = myArray.filter((element) => {
          return ((element % 5 == 0) || (element % 10 == 0));
      });
      return result;
    }

    public arraySeparate(myArray: any) : Array<string>{
      var i=0;
      var array;
       for (i=0;i< myArray.length; i++) {
          if (typeof myArray[i] === "string")
          {
            array.push(myArray[i]);
          } 
       }
       return array;
    }

    public arraySplit(str:any) : Array<number>{
      var i=0;
      var array;
      for (i=0;i< str.length; i++) {
        if (typeof str[i] === "number")
        {
          array.push(str[i]);
        } 
     }
     str = 0;
      for (i=0;i<array.length;i++) {
        if (array[i] == 1) {
          str.push(array[i]);
        }
        for(i=2;i<array[i];i++) {
          if(array[i]/i == 0) {
            str.push(array[i]);
          }
        }
      }
      return str;
    }

    public arraySort(myArray:any):Array<string>{
      var i=0;
      var array;
       for (i=0;i< myArray.length; i++) {
          if (typeof myArray[i] === "string")
          {
            array.push(myArray[i]);
          } 
       }
       array.sort((a,b) => {
         a.localeCompare(b);
       });
       return array;
    }

    public arrayReplace(myArray:any):Array<number>{
      var i=0;
      var array;
       for (i=0;i< myArray.length; i++) {
          if (typeof myArray[i] === "number")
          {
            array.push(myArray[i]);
          } 
       }
       for (i=0;i<array.length;i++) {
         if (array[i]%3 == 0) {
           array[i] = 5;
         }
       }
       return array;
    }
       
}

let myArray: any[] = [34, 45, 60, 23, 'webpage' , 13, 25, 70, 'phone' , 'animal' , 'singer'];
let array : ArrayComponent= new ArrayComponent();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



