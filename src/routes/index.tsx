import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
    return <div class='font-bold'>hello</div>
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
