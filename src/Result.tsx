import s from './Result.module.css'

export function Result(props: any) {


    return <>
    <div id='results' className={s.results}>
        {
            props.results.map((result: any, id: number) => (
                <div id={'result' + id} className={s.result} key={id}>
                    <pre><code>{JSON.stringify(result, null, 2)}</code></pre>
                </div>))
        }
    </div></>
}