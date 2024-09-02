import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';

function Post({ avatar, name, username, time, content, comment, repost, like, view, postImage }) {
  return (
    <div className=" text-white p-4 rounded-lg shadow-md max-w-lg">
      <div className="flex items-start gap-x-3">
        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-gray-400 text-sm">@{username} · {time}</p>
            </div>
          </div>
          <p className="mt-2 whitespace-pre-line">{content}</p>
          {postImage && (
            <img src={postImage} alt="Post" className="mt-4 w-full h-auto rounded-lg object-cover" />
          )}
          <div className="flex justify-between mt-4 text-gray-400">
            <div className="flex items-center gap-x-1">
              <FaRegComment />
              <span>{comment}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaRetweet />
              <span>{repost}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaRegHeart />
              <span>{like}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaRegEye />
              <span>{view}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaRegBookmark />
            </div>
            <div className="flex items-center gap-x-1">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
