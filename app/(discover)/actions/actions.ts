"use server"

import { formSchema } from "@/app/(root)/link/page"
import { db } from "@/app/drizzle/src"
import { usersTable } from "@/app/drizzle/src/schema"
import { NextResponse } from "next/server"
import { z } from "zod"

export default async function insertSales (formData: z.infer<typeof formSchema>) {
    try{    
        const addDocuments = await db.insert(usersTable).values(formData).returning()

 if(!addDocuments){
        return new NextResponse("Something went wrong")
    }
    return addDocuments;
    }catch(error){
        console.error("something went wrong", {error: 404})
    }

   
}   