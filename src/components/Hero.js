import HeroImg from '../assets/abishake.png'
import { AiOutlineTwitter ,  AiOutlineLinkedin , AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai";

export default function Hero(){
    return <section className='flex flex-col md:flex-row justify-center bg_sec'>
         
        <div className='flex flex-col md:w-1/2'>
            <h1 className='mt-32 ml-16 text-6xl font-hero-font'>Hero da <br/> I am Abishake <br/> 
            <p className='text-3xl'>I am a Full stack web Developer</p>
        </h1>
        <div className='flex p-10 gap-7 ml-5 '>
            <a className='hover:text-white' href='#'><AiOutlineTwitter size={40}/></a>
            <a className='hover:text-white' href='#'><AiOutlineLinkedin size={40}/></a>
            <a className='hover:text-white' href='#'><AiOutlineGithub size={40}/></a>
            <a className='hover:text-white' href='#'><AiOutlineInstagram size={40}/></a>
        </div>
        
        </div>
        <img className='md:w-1/5 hidden md:block m-20' src={HeroImg}  />
    </section>
}