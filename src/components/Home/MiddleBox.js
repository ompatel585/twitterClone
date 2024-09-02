import React from 'react';
import Post from './Post';
import post1 from '../../assets/post1.jpg';
import post2 from '../../assets/post2.jpg';
import postImage3 from '../../assets/postImage3.jpg';
import post3 from '../../assets/post3.jpg';
import postImage4 from '../../assets/postImage4.jpg';
import post4 from '../../assets/post4.jpg';  
import postImage5 from '../../assets/postImage5.jpg';
import post5 from '../../assets/post5.jpg';
import postImage6 from '../../assets/postImage6.jpg';
import post6 from '../../assets/post6.jpg';  
import postImage7 from '../../assets/postImage7.jpg';
import post7 from '../../assets/post7.jpg'; 

import { RxAvatar } from "react-icons/rx";
import { MdInsertPhoto, MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";




function MiddleBox() {
    return (
        <div>
            <div className='text-white w-[600px] h-auto border-green-500 border-2 '>
                <div className='upper-middle flex justify-around   border-b-green-500 border-b-2 h-[65px] pt-4 cursor-pointer'>
                    <p>For You</p>
                    <p>Following</p>
                </div>
                <div className='flex mt-4 pl-4 gap-x-2  '>
                    <RxAvatar size={40} />
                    <input type="text" placeholder='What is happening?!' className=' bg-transparent border-transparent focus:outline-none focus:border-transparent' />
                </div>
                {/* <hr  className='w-4/5 mx-[10%]'/> */}
                <div className='flex mt-8 items-center  border-green-500 border-b-2 pb-4'>
                    <div className='flex gap-x-4 ml-16 w-[472px]'>
                        <MdInsertPhoto size={24} className='cursor-pointer'/>
                        <MdOutlineGifBox size={24} className='cursor-pointer'/>
                        <BiPoll size={24} className='cursor-pointer'/>
                        <CiFaceSmile size={24} className='cursor-pointer'/>
                        <RiCalendarScheduleLine size={24} className='cursor-pointer'/>
                        <CiLocationOn size={24} className='cursor-pointer'/>
                    </div>
                    <div>
                        <button className='bg-blue-500 rounded-3xl w-20 h-12 mr-6 font-bold text-[18px] '>Post</button>
                    </div>

                </div>


                <div className='flex items-center justify-center  border-b-green-500 border-b-2 '>
                    <p className='my-4'>Show 35 Posts</p>
                </div>


                <div className=' border-green-500 border-b-2'>
                    <Post
                        avatar={post1}
                        name="DR Pratik Patel, BA, CFA, ACCA Es"
                        username="@PratikPatelCFA"
                        time="2h"
                        comment={15}
                        repost={219}
                        like={595}
                        view={1848}
                        content={`The CEO of Google is Indian
                            The CEO of Microsoft is Indian
                            The CEO of Adobe is Indian
                            The CEO of IBM is Indian
                            The CEO of Chanel is Indian
                            The CEO of FedEx is Indian
                            The CEO of Palo Alto Networks is Indian
                            
                            But according to X, all we are known for is that we smell bad`}
                    />
                    
                </div>

                <div className=' border-green-500 border-b-2'>
                    <Post
                        avatar={post2}
                        name="Elon Musk"
                        username="@elonmusk"
                        time="2h"
                        comment={957}
                        repost={1200}
                        like={"87k"}
                        view={"2.3M"}
                        content={`The expression of support from the US embassy is appreciated. 
                                Indeed, without free speech, the public cannot express their 
                                thoughts or know the truth of the situation, making it impossible 
                                to vote with accurate knowledge.`}
                        />
                </div>

                <div className=' border-green-500 border-b-2'>
                <Post
                        avatar={post3}
                        name="Times Algebra"
                        username="@timesalgebraIND"
                        time="2h"
                        comment={326}
                        repost={"4.1k"}
                        like={"20k"}
                        view={"696k"}
                        postImage={postImage3}
                        content={`BIG BREAKING NEWS 🚨 Chirag Paswan demands immediate 
                            President Rule in West Bengal.
                            He said "CM Mamata is saying If Bengal will bu*rn, entire 
                            Bharat will bu*rn. What kind of statement is this?"
                            "Nothing can be more shameful than this statement from a 
                            CM. She is not able to handle her state property. 
                            Impose President Rule in West Bengal" - CHIRAG`}
                        />
                </div>
                <div className=' border-green-500 border-b-2'>
                <Post
                        avatar={post4}
                        name="Jitendra Sharma"
                        username="@jitendraEci"
                        time="5d"
                        comment={90}
                        repost={"1.6k"}
                        like={"9k"}
                        view={"858k"}
                        postImage={postImage4}
                        content={`महाभारत में कितने प्रकार की रचनाएँ थीं?
                                #Thread 
                                महाभारत में आपने सिर्फ़ चक्रव्यूह का नाम ही सुना होगा। लेकिन 
                                महाभारत के युद्ध में कई प्रकार की रचनाओं का उल्लेख मिलता है।

                                युद्ध लड़ने के लिए पक्ष या विपक्ष अपने हिसाब से रचनाएँ बनाते थे।

                                10 मुख्य रचनाओं के लिए कृपया पूरा लेख`}
                        />
                </div>
                <div className=' border-green-500 border-b-2'>
                    <Post
                        avatar={post5}
                        name="Jitendra Sharma"
                        username="@jitendraEci"
                        time="5d"
                        comment={90}
                        repost={"1.6k"}
                        like={"9k"}
                        view={"858k"}
                        postImage={postImage5}
                        content="Watch our most comedeuos video on youtube !"
                    />
                </div>

                <div className=' border-green-500 border-b-2'>
                    <Post
                        avatar={post6}
                        name="Ashwini Vaishnaw"
                        username="@ashwinivaishnaw"
                        time="17h"
                        comment={59}
                        repost={"1.2k"}
                        like={"3.4k"}
                        view={"219k"}
                        postImage={postImage6}
                        content={`Know the 12 Mumbai Rail Projects underway!

                        🧵A thread👇`}
                    />
                </div>

                <div className=' border-green-500 border-b-2'>
                    <Post
                        avatar={post7}
                        name="Jitendra Sharma"
                        username="@jitendraEci"
                        time="5d"
                        comment={90}
                        repost={"1.6k"}
                        like={"9k"}
                        view={"858k"}
                        postImage={postImage7}
                        content={`How to whitewash Islamist terrorism?!

                                Hijackers of IC 814:
                                Ibrahim Akhtar
                                Shahid Akhtar Sayeed
                                Sunny Ahmed Qazi
                                Zahoor Mistry
                                Shakir `}
                    />
                </div>

            </div>

        </div>
    )
}

export default MiddleBox;