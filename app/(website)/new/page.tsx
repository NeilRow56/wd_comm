import NewPlayerForm from '@/components/forms/NewPlayerForm'
import Heading from '@/components/Heading'
import React from 'react'

export default function NewPlayerPage() {
  return (
    <>
      <section className="container  flex flex-col xl:px-48">
        <div className=" jusify-center flex w-full flex-col">
          <Heading title="Add Player" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {' '}
            Fill out the form below to add a player
          </p>
        </div>
        <div className="">
          <NewPlayerForm />
        </div>
      </section>
    </>
  )
}
