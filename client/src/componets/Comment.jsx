

import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Comment = ({ snippetId }) => {

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);
    const [fetch, setFetch] = useState(1);
    const [showCommentBox, setshowCommentBox] = useState(false)


    //   console.log(snippetId)

    const createComment = async (e) => {
        e.preventDefault();

        let data = await axios({
            method: "post",
            url: `http://localhost:8001/api/v1/snippet/${snippetId}/comment`,
            data: { text }

        })

        console.log(data)
        setText("")
        setFetch(fetch + 1)


    }


    useEffect(() => {

        const getSnipedComment = async () => {

            let data = await axios({
                method: "get",
                url: `http://localhost:8001/api/v1/snippet/${snippetId}/comment`
            })


            //   console.log("this is snippet comment == >" , data.data)
            setComments(data.data)


        }

        getSnipedComment();

    }, [fetch])



    return (
        <div>

            <div className='mt-2 bg-gray-800 text-white'>
                <span>Comments</span>
                {
                    comments && comments.length > 0 && comments.map((el, index) => {
                        return <p key={index} className='font-semibold p-1'> {index + 1} . {el.text} </p>
                    })
                }


            </div>

            {showCommentBox ?
                <form
                    onSubmit={createComment}
                    className='flex w-full mt-3 gap-2'>

                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='border p-2 rounded'
                        type="text" />

                    <button className='bg-emerald-500 px-2 rounded'>
                        post
                    </button>

                </form>
                : null
            }

            <button   
            className='bg-amber-800 m-3 px-2 rounded-sm'
            onClick={()=>setshowCommentBox(!showCommentBox)}>{showCommentBox ? "hide" : "show"}</button>
        </div>
    )
}

export default Comment
