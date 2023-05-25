import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { AccountButton } from '~/components/account-button'

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
                <li>
                    <AccountButton />
                </li>
            </ul>
        </nav>
    )
})

export default Header
