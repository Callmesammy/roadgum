
"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import insertSales from "@/app/(discover)/actions/actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
 
export const formSchema = z.object({
    label: z.string().min(2).max(15,{
        message: "Enter your title "
    }),
    image: z.string().min(1, {
      message: " Choose image"
    }),
  description: z.string().min(2).max(105,{
    message: "Enter your title "
}),
item1: z.string().min(2).max(15,{
    message: "Enter your title "
}), 
        item2:z.string().min(2).max(15,{
            message: "Enter your title "
        }),
        items:z.string().min(2).max(15,{
            message: "Enter your title "
        }),
})

const Linking = () => {  
  const router = useRouter()
  const [loading, setLoading] = useState(false)
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
try{
   const docu =  await insertSales(values)
   if(!docu){
    toast.error("Something went wrong")
   }else{
    toast.success("Successfully done")
    router.push("/price")
   }

}catch(error){
  console.log(error)
} finally{
    setLoading(false)
  }
   console.log(values)
  }
 
    return ( 
        <div className="flex w-full flex-col pt-2 items-center justify-center space-y-5">
            <h1 className="text-3xl font-bold capitalize ">Sell your product</h1>
            <div className="p-2  flex-col z-15 border-2 border-black max-w-lg px-5 rounded-md flex w-full pt-5 h-[600px] bg-secondary">
            <p className="font-bold text-xl pt-2">Input details on what you are selling </p>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-3 space-y-8 w-full ">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input disabled={loading} type="file" accept="Image" {...field}/>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input  disabled={loading} placeholder="Enter title" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea disabled={loading}
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Item" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="item1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item1</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Item" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="item2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item3</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Item3" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />


        </div>
        <Button disabled={loading} type="submit" className=" cursor-pointer w-full">Submit {loading && <Loader2 className="animate-spin size-5"/>} </Button>
      </form>
    </Form>
            </div>
            <div className="p-2 translate-x-2 translate-y-2 z-10 max-w-lg border px-5 rounded-md flex w-full pt-5 h-[602px] bg-black absolute"/>

        </div>
     );
}
 
export default Linking;