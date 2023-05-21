import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeAction$, Form } from '@builder.io/qwik-city'
import { db } from '~/lib/db'
import { listings } from '~/lib/schemas/listing'

export const useAddListing = routeAction$(async (data) => {
    const newData = {
        name: data.name as string,
        title: data.title as string,
    }
    await db.insert(listings).values(newData)

    return {
        success: true,
    }
})

export default component$(() => {
    const action = useAddListing()
    return (
        <>
            <h2>{import.meta.env.VITE_DATABASE_HOST}</h2>
            <Form action={action} class='flex flex-col'>
                <input name='_id' type='hidden' value='QX4nt1IoGKii_yNTpiveS' />
                <input name='name' class='h-12 w-64 border border-gray-300' />
                <input name='title' class='h-12 w-64 border border-gray-300' />
                <button type='submit' class='h-12 w-64 border border-gray-300'>
                    Add listing
                </button>
            </Form>
            {action.value?.success && (
                // When the action is done successfully, the `action.value` property will contain the return value of the action
                <p>Listing added successfully</p>
            )}
        </>
    )
})

export const head: DocumentHead = {
    title: 'CREATE',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
