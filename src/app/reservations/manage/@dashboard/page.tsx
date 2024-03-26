import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import Restaurant from "@/db/models/Restaurant"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashboardPage() {

    const addRestaurant = async (addRestaurantForm:FormData) => {
        "use server"
        const name = addRestaurantForm.get("name")
        const address = addRestaurantForm.get("address")
        const picture = addRestaurantForm.get("picture")
        const tel = addRestaurantForm.get("tel")
        const opentime = addRestaurantForm.get("opentime")
        const closetime = addRestaurantForm.get("closetime")

        try {
            await dbConnect()
            const restaurant = await Restaurant.create({
                "name": name,
                "address": address,
                "picture": picture,
                "tel": tel,
                "opentime": opentime,
                "closetime": closetime
            })
        }
        catch(error){
            console.log(error)
        }
        revalidateTag("restaurants")
        redirect("/restaurant")
        
    }
    const session = await getServerSession(authOptions)
    if(!session|| !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    return (
        <main className="bg-slate-100">
            {
                (profile.data.role == "admin")?
                <form action={addRestaurant}>
                    <div className="text-xl text-blue-700"> Create Restaurant Model</div>
                    <div className="flex items-center w-1/2 my-2 ">
                        <input type="text" required id="model" name="model" placeholder="Restaurant Name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                    </div>

                    <div className="flex items-center w-1/2 my-2 ">
                        <input type="text" required id="desc" name="desc" placeholder="Address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                    </div>

                    <div className="flex items-center w-1/2 my-2 ">
                        <input type="text" required id="picture" name="picture" placeholder="Picture URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                    </div>

                    
                    <div className="flex items-center w-1/2 my-2 ">
                        <input type="text" required id="dayRate" name="dayRate" placeholder="Phone Number"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                    </div>

                    <div className="flex items-center w-1/2 my-2 ">
                       <input type="number" required id="seats" name="seats" placeholder="Open Time"
                        min={0} max={50}
                        className="bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                        
                       <input type="number" required id="doors" name="doors" placeholder="Close Time"
                        min={0} max={8}
                        className="bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400 "/>
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Restaurant</button>
                </form>
                :null
            }
        </main>
    )
}