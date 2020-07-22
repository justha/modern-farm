import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";


export const plantSeeds = (planObj) => {
    for (const plan of plans){
        for (i=0; i<4; i++) {
            for (j=0; j<4; j++) {
                if (plan[i][j] === "Asparagus") {
                    return createAsparagus()
                } else if (plan[i][j]  === "Corn") {
                    return createCornn()
                } else if (plan[i][j]  === "Potato") {
                    return createPotato()
                } else if (plan[i][j]  === "Soybean") {
                    return createSoybean()
                } else if (plan[i][j]  === "Sunflower") {
                    return createSunflower()
                } else if (plan[i][j]  === "Wheat") {
                    return createWheat()
                } else {console.log("na")}
            }
        }
    }
}

