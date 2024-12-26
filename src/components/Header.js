import { useState } from "react"

export default function Header() {
    const [toggleMenu,setToggleMenu] =useState(false)
    return <header class="flex justify-between px-10 p-3 bg_prime">
        <a class="font-bold text-2xl "> Portfolio</a>
        <nav class="hidden md:block">
        <ul class="flex text-xl">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Certificates</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav class="block md:hidden">
        <ul class="flex text-xl">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Certificates</a></li>
        </ul>
        </nav>}
        <button onclick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"></button>

    </header>
}