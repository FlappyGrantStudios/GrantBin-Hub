export default function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between px-[50px] bg-2 border-b-[.15em] w-full h-[5rem] z-50">
                <a href="#" className="non-link flex items-center gap-[10px] h-[40px]">
                    <img src="/logo/large.png" alt="GrantBin Hub" className="h-full" />
                </a>

                <ul className="flex items-center gap-[10px] font-bold">
                    <li><a href="/">Home</a></li>
                    <li><a href="/categories">Categories</a></li>
                </ul>
            </nav>
        </>
    )
}
