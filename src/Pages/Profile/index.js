import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams(); // 🟢 nickname sẽ là "hoantiny" hoặc "hoangphuc01975"

    return (
        <>
            <h1>Trang cá nhân của</h1>
            <h1 style={{ color: 'red' }}>{nickname}</h1>
        </>
    );
}

export default Profile;
