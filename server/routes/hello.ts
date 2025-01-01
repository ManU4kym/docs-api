export default defineEventHandler( async (event) => {
    
    const { name } = getQuery(event)
    return {
       
        message: `hello kim`
    }
})