export default async function getReviews(token: string) {

    await new Promise( (resolve)=>setTimeout(resolve, 1000) )
    
    const response = await fetch("http://localhost:5000/api/v1/reviews", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch reservations")
    }
    return await response.json()
}