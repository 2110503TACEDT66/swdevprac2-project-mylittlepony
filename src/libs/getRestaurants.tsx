
export default async function getHospitals() {

    await new Promise( (resolve)=>setTimeout(resolve, 1000) )
    
    const response = await fetch("https://localhost:5000/api/v1/restaurants" , { next : {tags:['restaurants']}})
    if (!response.ok) {
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}