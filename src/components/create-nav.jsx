import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Header = component$(() => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/create/about'>about</Link>
                </li>
                <li>
                    <Link href='/create/rooms'>rooms</Link>
                </li>
                <li>
                    <Link href='/create/descriptions'>descriptions</Link>
                </li>
            </ul>
        </nav>
    )
})

export default Header
