const companies = [
//object literals
    {name: "Company One", category: "Finance" , start: 1981, end:2003},
    {name: "Company Two", category: "Retail" , start: 1992, end:2008},
    {name: "Company Three", category: "Auto" , start: 1999, end:2007},
    {name: "Company Four", category: "Retail" , start: 1989, end:2010},
    {name: "Company Five", category: "Techonology" , start: 2009, end:2014},
    {name: "Company Six", category: "Finance" , start: 1987, end:2010},
    {name: "Company Seven", category: "Auto" , start: 1981, end:2003},
    {name: "Company Eight", category: "Technology" , start: 2011, end:2016},
    {name: "Company Nine", category: "Retail" , start: 1981, end:1989}
];

// this array is its own constant
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for Loop
// for(var i = 0; i <companies.length; i++){
// console.log(companies[i]);
//}

// for each
// companies.forEach(function(company) {
//     console.log(company.name);
// });




//drinking age
  // let canDrink = [];
  // for ( i = 0; i < ages.length; i++){
  //   if(ages[i] >= 21){
  //     canDrink.push(ages[i]);
  //   }
  // }
  // console.log(canDrink);



// filter

// const retailCompanies = companies.filter(function(company){
//   if(company.category === "Retail"){
//     return true;
//   }
// })



// ES6
// const retailCompanies = companies.filter(company => (company.category === "Retail"))
//  console.log(retailCompanies);



// 90's companies
// const nineties = companies.filter(company =>(company start >= 1990 && company.end >= 1999))
// console.log(nineties)

 //2000's companies
 // const twoThousands = companies.filter(company =>(company.start >= 2000))
 // console.log(twoThousands)


// filter retail
// get 80s companies
 // const eightysCompanies=companies.filter(company =>(company.start >= 1980 &&))
// get companies that lasted 10 years



// map

// const cNames = companies.map(function(company){
//   return company.category
// });
//  console.log(cNames);


// sort

//.sort()
// const sortedCompanies = companies.sort ( function(c1, c2){
//   if(c1.start > c2.start){
//     return 1;
//   }else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);


// reduce
 // const totalAges = (accumulator, currentValue) => accumulator + currentValue;
 // console.log(ages.reduce(totalAges));
