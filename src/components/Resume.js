import ResumeImg from '../assets/jena.jpg'

export default function Resume(){
    return <section className='flex flex-col md:flex-row bg_sec px-10'>
        <div className=' py-5 md:w-1/2'>
            <img src={ResumeImg} /> 
        </div>
        <div className='flex justify-center md:w-1/2'>
            <div className='flex flex-col justify-center text-2xl '>
                <h1 className=' text-4xl font-bold border-sky-400 border-b-4  w-[140px]'>Resume</h1><br/>
                <p className='pb-5'>You Can Download My Resume</p>
            </div>
        </div>
    </section>
}