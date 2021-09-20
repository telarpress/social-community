import fetch from "isomorphic-unfetch";
import React  from 'react'
export const createUserSearchRequest = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return data;
}