'use server'

import db from '../db'
import * as z from 'zod'
import { CreatePlayerSchema } from '../schemas/new-player'

export async function createPlayer(values: z.infer<typeof CreatePlayerSchema>) {
  const validatedFields = CreatePlayerSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Post.',
    }
  }

  const { name, jersey, plays, sport } = validatedFields.data
  try {
    await db.player.create({
      data: {
        name,
        jersey,
        plays,
        sport,
      },
    })

    return { success: 'Successfully created player' }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Post.',
    }
  }
}
