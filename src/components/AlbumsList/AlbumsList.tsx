import React from 'react';
import { useQuery } from "react-query";

interface Albums {
  id: number;
  userId: number;
  title: string;
}

export const AlbumsList = () => {

  const { isLoading, isError, data: albums } = useQuery('albums', () => {
    return fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        if (!res.ok) {
          return Error()
        }

        return res.json()
      }, err => {
        return Error(err);
      });
  });
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching Albums !!! Please try again.</h1>;
  }

  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.map((album: Albums) => {
          return (
            <li key={album.id}>{album.id}. {album.title}</li>
          )
        })}
      </ul>
    </>
  )
}
