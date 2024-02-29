let marks_class_12=[91,82,63,84,"Not Present",null,false]
console.log(marks_class_12)

//Accessing Array Elements
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[12]) //undefined b/c index 12 doesnot exist


marks_class_12[7]="Hello World"  //adding new element
marks_class_12[0]=96 //changing value of an array
console.log(marks_class_12)


console.log("Length of marks_class_12 is ",marks_class_12.length)

//typeof
console.log(typeof marks_class_12)

//forloop
for(let i=0;i<marks_class_12.length;i++){
    console.log(marks_class_12[i])
}



//ArrayMethods
let num=[1,2,3,34,4]
console.log(num)


//tostring()
let b=num.toString() //b is now a string
console.log(b)  

//join() --->join methods join all the elements of an array using a separator
let c=num.join("_")
console.log(c)


//pop()---->remove last element
let x =num.pop()
console.log(num)
console.log(x)


//push()---->add element at the end of an array
let r=num.push(99)  //it returns the new array length
console.log(num,r)


//shift()--->removes the first element and return it
r=num.shift()
console.log(r)
console.log(num)


//unshift()---->add element to the beginning and return the new array length
r=num.unshift(555)
console.log(num,r)


//delete operator---->To delete an element from an array
delete num[3]
console.log(num)

//concat()--->To combine two or more arrays
let num1=[11,22,33,44,55]
let num2=[99,89,67,45]
let new_array=num.concat(num1,num2)
console.log(new_array)


//sort()--->Alphabatically sorting (using compare function to sort in ascending order)
let compare=(a,b)=>{
    return a-b  //for decending (b-a)
}
let arr=[555,3,2,4,56,22,11,66,89]
arr.sort(compare)
console.log(arr)


//reverse()
arr=[1,2,3,4,5]
arr.reverse()
console.log(arr)


//splice and slice
arr=[1,2,3,4,5,6,7]
arr.splice(2,3,22,23,24)
console.log(arr)

arr=[1,2,3,4,5]
let newarr=arr.slice(2)
console.log(newarr)

newarr=arr.slice(1,3)
console.log(newarr)
