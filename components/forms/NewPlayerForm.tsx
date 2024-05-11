'use client'

import toast, { Toaster } from 'react-hot-toast'
import { Button } from '../ui/button'
import { Loader2, Save } from 'lucide-react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import { CreatePlayerSchema } from '@/lib/schemas/new-player'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export default function NewPlayerForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof CreatePlayerSchema>>({
    resolver: zodResolver(CreatePlayerSchema),
    defaultValues: {
      name: '',
      jersey: 0,
      plays: 0,
      sport: '',
    },
  })

  const onSubmit = (values: z.infer<typeof CreatePlayerSchema>) => {
    console.log(values)
  }

  return (
    <div className=" flex w-full flex-col  border border-primary/50 p-2">
      <Form {...form}>
        <form
          className="gap-3 space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className=" grid gap-3  sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name" className="flex w-full">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jersey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="jersey" className="flex w-full">
                    Jersey
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="jersey"
                      name="jersey"
                      placeholder="14"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="plays"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="plays" className="flex w-full">
                    Plays
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      disabled={isPending}
                      id="plays"
                      name="plays"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="sport" className="flex w-full">
                    Sport
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Football"
                      disabled={isPending}
                      id="sport"
                      name="sport"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="max-w-[150px]">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4" /> Processing
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" /> Save
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
