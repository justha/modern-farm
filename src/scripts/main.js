console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
const yearlyPlan = createPlan()
console.log(yearlyPlan)


// TEST CODE: CREATING SEEDS--The following code should display an object with three properties - 
// shape, weight, height - the developer console.

import { asparagusSeed } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


//TEST CODE: TILLING FIELD--
// 1) Create seed object 
const seedObj = asparagusSeed

// 2) Invoke addPlant() and specify the seed object as the parameter 
addPlant(seedObj)

// 3) Invoke usePlants() and store its return value in a variable 
import { usePlants } from "./field.js";

const aspargusPlant = () => {
    usePlants()
}

// 4) Use console.log() to make sure your seed object got added to the array of plans in the field 
console.log(aspargusPlant)


//TEST CODE: SOWING FIELD--


//TEST CODE: HARVEST--


//TEST CODE: SOWING SELLING--