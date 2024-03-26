export default async function removeReservation(token:string, reviewId: string) {
    const response = await fetch(`http://localhost:5000/api/v1/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
            "authorization" : `Bearer ${token}`
        },
    })
    if(!response.ok) {
        throw new Error("Failed to log-in")
    }

    return await response.json()

}

