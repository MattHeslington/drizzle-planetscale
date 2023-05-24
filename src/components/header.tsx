import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Header = component$(() => {
    return (
        <nav class='container-fluid'>
            <ul>
                <li>
                    <Link href='/'>
                        <strong>Brand</strong>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href='/create/about'>create</Link>
                </li>
                <li>
                    <Link href='/read'>read</Link>
                </li>
            </ul>
        </nav>
    )
})

export default Header
