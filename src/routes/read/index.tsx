import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$, Link } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { db } from '~/lib/db'
import { listings } from '~/lib/schemas/listing'

export const useListings = routeLoader$(async () => {
    // This will only run on the server when the user submits the form (or when the action is called programatically)
    const result = await db.select().from(listings)
    return result
})

export default component$(() => {
    const signal = useListings()
    return (
        <div class='font-bold'>
            <h1 class='text-2xl'>Listings</h1>
            <ul>
                {signal.value.map((listing) => (
                    <li key={listing.id}>{listing.name}</li>
                ))}
            </ul>
        </div>
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
