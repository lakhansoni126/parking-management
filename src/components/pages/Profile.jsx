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
    const [formData, setFormData] = useState({
        buildingName: '',
        contactInfo: '',
        altContactInfo: '',
        address: '',
        city: '',
        state: '',
        uid: uid,
        email: user?.email,
        role: '',
        name: '',
        employeeId: '',
        floor: '',
        officeNum: '',
        vehicleNum: '',
        vehicleType: "",
    });


    const handleSelectRole = (selectedRole) => {
        setRole(selectedRole);
        setFormData((prevData) => ({
            ...prevData,
            role: selectedRole,
        }));
        setIsModalOpen(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const validFormData = Object.keys(formData).reduce((acc, key) => {
                const value = formData[key];
                if (
                    value !== undefined &&
                    value !== null &&
                    value !== '' &&
                    !key.includes('.') &&
                    !key.includes('#') &&
                    !key.includes('$') &&
                    !key.includes('/') &&
                    !key.includes('[') &&
                    !key.includes(']')
                ) {
                    acc[key] = value;
                }
                return acc;
            }, {});

            await set(ref(db, `${role}/` + uid), validFormData);
            localStorage.setItem('user', JSON.stringify(validFormData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error saving data to Firebase Realtime Database', error);
        }
    };

    const renderForm = () => {
        switch (role) {
            case 'users':
                return (
                    <UserProfile
                        user={user}
                        values={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}

                    />)
            case 'guards':
                return (
                    <GuardProfile
                        user={user}
                        values={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}

                    />);
            case 'buildings':
                return (
                    <BuildingProfile
                        user={user}
                        values={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}

                    />)
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
