import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { getPostsList, Posts } from '../../slices/PostsSlice';
import { useAppDispatch } from '../../store';

export const PostsList = () => {

  const dispatch = useAppDispatch();

  const isLoading = useSelector((state: RootState) => {
    return state.posts.isLoading;
  });

  const isError = useSelector((state: RootState) => {
    return state.posts.isError;
  });

  const posts = useSelector((state: RootState) => {
    return state.posts.list;
  });

  useEffect(() => {
    dispatch(getPostsList());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching Posts !!! Please try again.</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Posts) => {
          return (
            <li key={post.id} className="post-wrapper">
              <h4>{post.title}</h4>
              <p className='desc'>{post.body}</p>
              </li>
          )
        })}
      </ul>
    </>
  )
}

