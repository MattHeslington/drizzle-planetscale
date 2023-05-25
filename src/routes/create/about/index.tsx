import { component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { routeAction$, Form } from '@builder.io/qwik-city'
import { db } from '~/lib/db'
import { listings } from '~/lib/schemas'
import { eq } from 'drizzle-orm'

export const useAddData = routeAction$(async (data) => {
    await db
        .update(listings)
        .set({ placeType: data.placeType as string })
        .where(eq(listings.id, data.id as number))

    return {
        success: true,
    }
})

export default component$(() => {
    const action = useAddData()
    const hasChanged = useSignal(false)
    return (
        <Form action={action} onClick$={() => (hasChanged.value = true)}>
            <input name='id' type='hidden' value='5' />
            <fieldset>
                <legend>place type</legend>
                <label for='villa'>
                    <input type='radio' id='villa' name='placeType' value='Villa' checked />
                    Villa
                </label>
                <label for='house'>
                    <input type='radio' id='house' name='placeType' value='House' />
                    House
                </label>
                <label for='apartment'>
                    <input type='radio' id='apartment' name='placeType' value='Apartment' />
                    Apartment
                </label>
                <label for='guest-house'>
                    <input type='radio' id='guest-house' name='placeType' value='Guest House' />
                    Guest House
                </label>
            </fieldset>
            <button type='submit'>{action.value?.success === true ? 'saved' : 'save data'}</button>
        </Form>
    )
})

export const head: DocumentHead = {
    title: 'QWIK TEST',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
