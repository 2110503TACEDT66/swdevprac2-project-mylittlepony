export default async function getRestaurant(rid:string) {
    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${rid}`)
    if (!response.ok) {
        throw new Error("Failed to fetch restaurant")
    }
    return await response.json()
}