import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
            });

            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <section className="bg-[#191825] h-screen flex flex-row-reverse justify-around items-center">
                <div className="text-white py-20">
                    <h1 className="font-bold py-2 text-[24px]">Parking Management</h1>
                    <h1 className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, laboriosam?</h1>
                    <h1 className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                    {error && <p>Error: {error}</p>}
                    <button onClick={handleGoogleSignIn} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] my-5">Login</button>
                </div>
                <div>
                    <img className="w-96 border-2 rounded-lg" src="../../../images/logo.png" alt="Logo" />
                </div>
            </section>
        </>
    );
}

export default Login;