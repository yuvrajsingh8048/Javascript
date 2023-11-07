// Immediately Invoked Function
// Global scope me kabhi pollution hota hai toh usse bachane k liye IIFE use hota hai

// Original IIFE
(() => {
    console.log("This IIFE is called Original IIFE")
})();  //Must use semi-colon if not then might me you faced an error

// Named IIFE
(function hello () {
    console.log("This IIFE is called Named IIFE")
})();

// IIFE with arguments and parameters
((userName) => {
    console.log(`Hello ${userName}, Welcome to VS code......`)
})("yuvraj")
