import './Search.css'




export function Search(props: any) {

    return (
        <>
        <h2>Search City</h2>
        <div id="search" className="card">
            <form>
                <input type="text" onChange={props.onSearch} placeholder='start writing "Province, City" es.(RM, Castel)' size={40} />
            </form>
        </div>

        
        </>
    )
}