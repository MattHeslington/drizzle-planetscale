import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeAction$, Form } from '@builder.io/qwik-city'
import { db } from '~/lib/db'
import { listings } from '~/lib/schemas'

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
            <h3>add data</h3>
            <Form action={action}>
                <input name='_id' type='hidden' value='QX4nt1IoGKii_yNTpiveS' />
                <input name='name' />
                <input name='title' />
                <button type='submit'>Post data</button>
            </Form>
            {action.value?.success && (
                // When the action is done successfully, the `action.value` property will contain the return value of the action
                <p>Data added successfully</p>
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
