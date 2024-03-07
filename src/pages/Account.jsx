import { UserAuth } from "../context/AuthContext";
export default function Account() {
    // const { user, logOut } = UserAuth();
    const Account = () => {
        const { logOut, user } = UserAuth();
        const handleSignOut = async () => {
            try {
                await logOut();
            } catch (error) {
                console.log(error)
            }
        }
        return (
            <div className="acount">
                <h1>Account</h1>
                <p>Welcome, {user?.displayName}</p>
                <button onClick={handleSignOut}>LogOut</button>
            </div>
        )
    }
}