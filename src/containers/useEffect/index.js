import { useEffect, useState } from "react";
import axios from "..//..//axios";

const UseEffect = () => {
    // const [counter, setCounter] = useState(0)
    // const [facts, setFacts] = useState([])

    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});
    const [list, setList] = useState(null);


    // const getFacts = () => {
    //     let url = '/?lang=rus';
    //     if(counter > 0) {
    //         url += `&count=${counter}`;
    //     }
    //     axios.get(url).then (res => {
    //         console.log(res.data.data)
    //         setFacts(res.data.data)
    // })
    // }

    // const getFactsById = () => {
    //     let url = '/?lang=rus';
    //     if(counter > 0) {
    //         url += `&id=${counter}`;
    //     }
    //     axios.get(url).then (res => {
    //         console.log(res.data.data)
    //         setFacts(res.data.data)
    // })
    // }



    // useEffect(()=>{
    //     document.title=`clicked ${counter} times`
    // }, [counter]);

    // const renderFactList = (fact) => {
    //     return (
    //          facts.map((fact, index) => {
    //             return(
    //                 <li key={index}>{fact}</li>
    //             )
    //         })
    //     )
    // }

    const onChange  = (e) => {
        setSearchText(e.target.value);
    }

    const search = () => {
        let url = '/search.json?q='
        let text = searchText
        if(searchText.length > 0) {
            text.split(' ').join('+');
            url += text;
        }


        axios.get(url).then(res=>{
                setResult(res.data);
        })
    }

    useEffect(()=>{
        if(result && result.docs) { 
        let list = result.docs.map(item => {
        return (
            <li key={item.key}>
                <div>
                    <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt='img' />
                </div>
                <div>
                    <span>Author: {item.author_name[0]}</span>
                    <br/>
                    <span>Book title: {item.title}</span>
                </div>
            </li>
        )
        })

        setList(list)}
    }, [result])
 

    return(
        <div>
        {/* <h1>
            UseEffect hook
        </h1>
        <h2>
            Counter: {counter}
        </h2>
        <button onClick={()=>setCounter(counter+1)}>increment counter
        </button>      
        <button onClick={getFacts}>get cats fact</button>
        <button onClick={getFactsById}>get by id</button>
        <ul>
        {
            facts.length > 0 ? renderFactList(facts) : null
        } 
         </ul> */}

         <label>
            search book
            <input onChange={onChange} />
            <button onClick={search}>search</button>
            <ul>
                {list}
            </ul>
         </label>
        </div>
        
    )
}

export default UseEffect;