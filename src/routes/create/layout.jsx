import { component$, Slot } from '@builder.io/qwik'
import CreateNav from '~/components/create-nav'

export default component$(() => {
    return (
        <>
            <CreateNav />
            <Slot />
        </>
    )
})
