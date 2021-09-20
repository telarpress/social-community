import React  from 'react'
import fetch from 'isomorphic-unfetch'
export const createfetchPostRequest = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      return data;
    }



