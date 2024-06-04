// npm help us to manage three things
// 1- reuse our code in another project
// 2- use code written by other developers
// 3- lastly share our own solutions with developers as well
// the npm project is host at npmjs.com
// here  you can  find everything started with useful utility functions to full blown frameworks and libraries
// npm calls the reuseable code a package
// package -> essentially is  a folder that contains a javascript code
// modules and dependencies , packages are used interchangeable (they all mean tha same thing)

// npm- golbal command , come with code
// npm --version

// local dependency  - use it only in this particular project 
// npm i <package name>

// global dependency - use it in any project 
// npm install -g <package name>
// sudo npm install -g <package name>

// package.json - manifest file (stores important info about project/ package)
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y(everything default)

// why we need package json file 
// we provide to provide information about our project.
// if i would install the package the local package .
// some packages going to use more dependencies they automatically installed as well.such as  Bootstrap package e.g
// this package is stored as a dependency in node modules and also in package json file in dependencies object.



const _ = require('lodash');
// loadash is a utility library 
const items =[1,[2,[3,4]]];
// In loadash , flattendeep  method that effectively split this  as  a flat array 
const  newItems = _.flattenDeep(items);
console.log(newItems);


// next video we disscess why thw package json is soo beneficial while sharing with other developers

