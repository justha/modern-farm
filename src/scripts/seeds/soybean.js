const createSoybean = [
    {
        type: "soybean", 
        height: 20, 
        output: 4
    }
]

export const soybeanSeed = () => {
    return createSoybean.slice()
}