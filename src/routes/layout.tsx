import { component$, Slot } from '@builder.io/qwik'
import { Header } from '../components/header'

export default component$(() => {
    return (
        <main class=''>
            <Header />
            <div class='px-6'>
                <Slot />
            </div>
        </main>
    )
})
