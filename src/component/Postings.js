import React from "react";

export default function Postings(props){
    return(
        <>
        <h1> Postings </h1>
        <h2> {props.data.title} </h2>
        <p> {props.data.description} </p>
        <img src={props.data.imageURL} alt={props.data.title} />
        </>
    )
}

