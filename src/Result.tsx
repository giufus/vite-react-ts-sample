import './Result.css'

export function Result(props: any) {


    return <>
    <div id='results' className="results">
        {
            props.results.map((result: any, id: number) => (
                <div id={'result' + id} className='result' key={id}>
                    <pre><code>{JSON.stringify(result, null, 2)}</code></pre>
                </div>))
        }
    </div></>
}