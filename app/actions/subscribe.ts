"use server"

import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
})

export async function subscribe(formData: FormData) {
  const email = formData.get("email")
  const validatedFields = schema.safeParse({ email })

  if (!validatedFields.success) {
    return { error: "Invalid email address" }
  }

  // TODO: Add your email subscription logic here (e.g., add to database, call external API)
  console.log("Subscribing email:", email)

  return { success: "Thank you for subscribing!" }
}

