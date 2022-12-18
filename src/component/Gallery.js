import React from 'react'
import Postings from './Postings'
import craigPost from '../postings'

export default function Gallery(){
    let postList = craigPost.map((data, i) => {
        return <Postings data={data} key={i}/>
    })
    return(
        <>
            <h1>Gallery</h1>
            {/* {postList} */}
            <Postings data={craigPost[0]}/> 
        </>
    )
}

