export default  defineEventHandler(async (event) => {

    //handle event
    const { name}  = getQuery(event);

    //handle post requests

    const { age } = await readBody(event);
    return {
        message: `Hello, ${name}! your are ${age} yrs old`
    }
})