import { createSignal, createEffect } from "solid-js"

const [count, setCount] = createSignal(0)

export default function Counter() {

    function add() {
        setCount(count() + 1)
    }

    function subtract() {
        setCount(count() - 1)
    }

    createEffect(() => {
        console.log(`Hello ${count()}`)
    })

    return (
        <div>
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <p>Current count is: {count()}</p>
        </div>
    )
}
