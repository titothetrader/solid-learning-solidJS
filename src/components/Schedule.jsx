import { createResource, createSignal, For, Show, Suspense } from "solid-js"


export default function Schedule() {
    const [id, setId] = createSignal(false)

    const [list] = createResource(async () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => 
                res.json()
            )
    })

    const [posts] = createResource(id, async (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => 
                res.json()
            )
    })

    function handleSelect(event) {
        setId(event.target.value)
    }

  return (
    <div>
        <select onInput={handleSelect} >
            <For each={list()}>
                {(item) => 
                <option value={item.id}>
                    {item.title}
                </option>
                }
            </For>
        </select>
        <Suspense fallback={<p>Loading...</p>}>
            <Show when={posts()}>
                <section>
                    <h1>{posts().title}</h1>
                </section>
            </Show>
        </Suspense>
    </div>
  )
}
