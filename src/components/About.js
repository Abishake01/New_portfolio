import AboutImg from '../assets/whatsapp.png'

export default function About(){
    return <section className='flex flex-col md:flex-row bg_sec px-10'>
        <div className=' py-5 md:w-1/2'>
        <iframe src="https://lottie.host/embed/dbed5b8d-ece0-4c73-ad04-e16647c6e6ba/MJIjHXj5sG.lottie"></iframe>
        </div>
        <div className='flex justify-center md:w-1/2'>
        <div className='flex flex-col justify-center text-2xl '>
        <h1 className=' text-4xl font-bold border-sky-400 border-b-4  w-[170px]'>About Me</h1><br/>
        <p className='pb-5'>I'm purchasing 3rd year B.E/CSE in JEC</p>
        <p className='pb-5'>Working on freelance project </p>
        <p className='pb-5'>Connect with me in the linkedin,facebook,twitter</p>
        </div>
        </div>
        
    </section>
}