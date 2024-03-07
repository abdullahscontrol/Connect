import { UserAuth } from "../context/AuthContext";


const Account = () => {
    const { logOut, user } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="account">
            <h1>Connect Account</h1>
            <div className="">
                <p>Welcome, {user?.displayName}</p>
            </div>
            <button onClick={handleSignOut}>Loggut</button>
        </div>
    )
}
export default Account;
