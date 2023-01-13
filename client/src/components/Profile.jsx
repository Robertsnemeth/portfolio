import React from 'react';
import me from '.././assets/New_me.jpg';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

const Profile = () => {

    const [text, count] = useTypewriter({
        words: ["Hi, my name is Bobby Nemeth",
        "I love using React { useReact }", 
        "I hope you enjoy my portfolio!"],
        loop:"true"
    })

  return (
    <section id="profile">
        <img src={me} alt="profile pic"
        className="h-48 rounded-full shadow-3xl"/>
        <div className="text-center">
            <h1 className="uppercase tracking-[15px]">Full Stack Developer</h1>
            <h1 className="text-white text-5xl">{text}<Cursor cursorStyle='_'/></h1>
            <div >
                <a className='m-2 hover:text-slate-500' href="">About</a>
                <a className='m-2 hover:text-slate-500' href="">Skills</a>
                <a className='m-2 hover:text-slate-500' href="">Projects</a>
                <a className='m-2 hover:text-slate-500' href="">Contact Me</a>
            </div>
        </div>
    </section>
  )
}

export default Profile