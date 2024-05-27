import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import { db } from "../../firebase.js";
import BuildingProfile from '../BuildingProfile';
import UserProfile from '../UserProfile';
import GuardProfile from '../GuardProfile';
import ChooseRole from '../ChooseRole';

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;
    const uid = location.state?.uid;

    const [role, setRole] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleSelectRole = (selectedRole) => {
        setRole(selectedRole);
        setIsModalOpen(false);
    };

    const handleSubmit = async (formData) => {
        try {
            await set(ref(db, `${role}/` + uid), formData);
            navigate('/');
        } catch (error) {
            console.error('Error saving data to Firebase Realtime Database', error);
        }
    };

    const renderForm = () => {
        switch (role) {
            case 'users':
                return (<UserProfile onSubmit={handleSubmit} />)
            case 'guards':
                return <GuardProfile onSubmit={handleSubmit} />;
            case 'buildings':
                return (<BuildingProfile onSubmit={handleSubmit} />)
            default:
                return <h1>yo</h1>;
        }
    };

    return (
        <div>
            <ChooseRole open={isModalOpen} onSelectRole={handleSelectRole} />
            {renderForm()}
        </div>
    );
}

export default Profile;
