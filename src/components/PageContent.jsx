
export const PageContent = ({ users }) => {
    return (
        <>
            <div className="flex-grow container mx-auto p-4">
                <div className="text-2xl font-bold mb-4">Usuários</div>
                <ul className="bg-white shadow-md rounded-lg p-4">
                {users.map(user => (
                    // passa por cada item da lista passado no app e coloca como um li na tela
                     <li key={user.id} className="border-b last:border-none p-2">{user.name}</li>
                ))}
                </ul>
            </div>
        </>
    )
}