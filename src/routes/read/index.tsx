import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { db } from '~/lib/db'
import { listings } from '~/lib/schemas'

export const useListings = routeLoader$(async () => {
    // This will only run on the server when the user submits the form (or when the action is called programatically)
    const result = await db.select().from(listings)
    return result
})

export default component$(() => {
    const signal = useListings()
    return (
        <>
            <h3>read data</h3>
            {signal.value.map((listing) => (
                <article>{listing.name}</article>
            ))}
        </>
    )
})

export const head: DocumentHead = {
    title: 'READ',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
