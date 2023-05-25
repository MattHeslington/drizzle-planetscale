import { component$, useSignal } from '@builder.io/qwik'

export const AccountButton = component$(() => {
    const showPanel = useSignal(false)
    return (
        <div class='relative'>
            <div onClick$={() => (showPanel.value = !showPanel.value)}>Account</div>
            {showPanel.value && (
                <div class='absolute z-10 top-0 right-0'>
                    <div>Sign In</div>
                    <div>Sign Up</div>
                </div>
            )}
        </div>
    )
})

export default AccountButton
