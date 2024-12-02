// import React from 'react'

import { useEffect } from "react";

const Comment = ({ comment }) => {
  useEffect(() => {
    // console.log(comment)
    // const getUser = async () => {
    //   try {
    //     const res = await fetch(`/api/user/${comment.userId}`);
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    getUser();
  }, [comment]);
  return <div></div>;
};

export default Comment;
