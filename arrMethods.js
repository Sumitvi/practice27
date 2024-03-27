// For Each Method of array

let arr=[1,3,4,6,7];
let print = function(arr){
    console.log(arr);
}

arr.forEach(print);


// Pass direct Values

arr.forEach(function(arr){
    console.log(arr);
});


                // Map Function 

let arr1=[1,3,4,6,7];

let double=arr1.map((el)=>{

    consolelog(el*2);

})




let myArr=[
    {
         name:"Sumit",
         marks:95
    },
    {
        name:"sohan",
        marks:95.5
    },
    { 
        name:"Rahul",
        marks:93.2
    }];



let cgpa=myArr.map((el)=>{
        return (el.marks/10);
}) 



                    // Filter Function
let arr2=[1,2,4,5,7];

let even=arr2.filter((num)=>(num%2==0));


                    // Reduce function

let nums1=[1,2,3,4];

let value=nums1.reduce((res,el)=>res+el);

console.log(value);

                // Max in an array using reduce function
let nums=[2,3,4,5,6,8,12,34,23,6,7];

let maxNum=nums.reduce((res,el)=>{

    if(el>res){
        return el;
    }else{
        return res;
    }


})

console.log(maxNum);


                // Check the number in an array are multiple of 10 or not


let arr3=[2,5,10,30,20,4];

let res=arr3.every((el)=>{
    return(el%10==0);
})

console.log(res);

                // Create a function to find minimum number in an array

let minNum=arr.reduce((acc,el)=>{
    if(acc<el){
        return acc;
    }else{
        return el;
    }
})

console.log(minNum);

                    // Default parameter

function sum(a,b=4){
    return a+b;
}


                    // Spread in objects

let data={
    email:"Hello@gmail.com",
    password:1234
};

let dataCopy={...data,id:23}


let Ardata=[2,4,6,8,10];
let arcopy={...Ardata}

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}


            // Destructuring in objects

const student={
    name:"Sumit",
    class:"B-Tech",
    section:"CS",
    subject:["Phy","Chem","Maths"],
    password:100
}

let {password:secret , name,section,city="Jabalpur"}=student;