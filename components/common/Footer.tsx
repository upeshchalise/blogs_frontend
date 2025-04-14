export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center gap-3 fixed bottom-0 px-2 pt-4 bg-white">    
            &copy; UC {new Date().getFullYear()}
        </footer>
    )
}