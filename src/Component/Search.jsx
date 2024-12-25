import { useState } from "react"

function Search() {
    const [search, setSearch] = useState();
    const [data, setData] = useState();
    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    const myfun = async () => {
            const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
            const jsonData = await get.json();
            setData(jsonData[0]);
    }

    return (
        <>
            <div className="app">
                <h1>DICTIONARY APP</h1>
                <div className="container">
                    <div className="searchBar">
                        <input type='text' placeholder="Type Word..." onChange={handleInput} />
                        <button onClick={myfun}>Search<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </button>
                    </div>
                    <div>
                        {
                            data ?
                                <div className="datas">
                                    <h2>Word : {data.word}</h2>
                                    <p>Part Of Speech : {data.meanings[0].partOfSpeech}</p>
                                    <p>Definition : {data.meanings[0].definitions[0].definition}</p>
                                    <p>Synonyms : {data.meanings[0].synonyms[0]}</p>
                                    <p>Example : {data.meanings[0].definitions[0].example}</p>
                                    <button onClick={() => window.open(data.sourceUrls[0], "_blank")}>Read More</button>
                                </div> : <p className="p">Search word to find information</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
