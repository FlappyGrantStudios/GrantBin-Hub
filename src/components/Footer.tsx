import Links from "./Links"

export default function Footer() {
    return (
        <footer className="py-[25px] px-[50px] bg-1 border-t-[.15em] w-full min-h-[5rem] z-50">
            <div className="flex items-center justify-between">
                <a href="#" className="non-link flex items-center gap-[10px] h-[40px]">
                    <img src="/logo/large.png" alt="GrantBin Hub" className="h-full" />
                </a>

                <p className="flex items-center font-bold">
                    &copy; {new Date().getFullYear()} GrantBin Hub, FlappyGrant Studios
                </p>
            </div>

            <div className="mt-[25px]">
                <Links />
            </div>
        </footer>
    )
}
