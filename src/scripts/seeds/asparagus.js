const createAsparagus [
    {
        type: "asparagus", 
        height: 24, 
        output: 4
    }
]

export const asparagusSeed = () => {
    return createAsparagus.slice()
}
