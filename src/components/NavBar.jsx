export const NavBar = () => {
    return (
        <>
            <div className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between">
                    <div className="text-xl font-bold">Lista de Usuários</div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Sobre</a></li>
                        <li><a href="#" className="hover:underline">Contato</a></li>
                     </ul>
                </div>
            </div>
        </>
    )
}