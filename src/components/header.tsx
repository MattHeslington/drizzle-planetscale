import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Header = component$(() => {
    return (
        <div class='flex w-full justify-between px-6 h-12 items-center'>
            <Link href='/'>Qwik CRUD</Link>
            <ul class='flex space-x-6'>
                <li>
                    <Link href='/create'>Create</Link>
                </li>
                <li>
                    <Link href='/read'>Read</Link>
                </li>
            </ul>
        </div>
    )
})

export default Header
