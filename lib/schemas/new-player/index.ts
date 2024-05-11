import { z } from 'zod'

export const PlayerSchema = z.object({
  id: z.string(),
  name: z.string(),
  jersey: z.coerce.number().positive(),
  plays: z.coerce.number().positive(),
  sport: z.string(),
})

export const CreatePlayerSchema = PlayerSchema.omit({ id: true })
export const UpdatePlayerSchema = PlayerSchema
export const DeletePlayerSchema = PlayerSchema.pick({ id: true })

export type CreatePlayerValues = z.infer<typeof CreatePlayerSchema>
export type UpdatePlayerValues = z.infer<typeof UpdatePlayerSchema>
export type DeletePlayerValues = z.infer<typeof DeletePlayerSchema>
