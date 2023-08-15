import { useState } from 'react';
import './App.css';
import { Search } from './Search';
import { Result } from './Result';

function App() {

  const [results, setResults] = useState(new Array<string>());


  async function searchTerm(province: string, city: string): Promise<Response> {
    let res = fetch(`http://localhost:3000/?SIGLAPROVINCIA=${province}&DENOMINAZIONE_IT=${city}`, {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      //"referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    });

    return res;
  }

  async function search(e: any) {
    const term = e.target.value.split(',');
    const response: Response = await searchTerm(term[0], term[1]);
    const hits = (await response.json()).hits as Array<any>;
    const documents = hits.map(hit => hit.document)
    //console.log(documents);
    setResults(documents)
  }

  return (
    <>
      <div>
        <Search onSearch={async (e: any) => await search(e)} />
        <Result results={results} />
      </div>
    </>
  )
}

export default App
