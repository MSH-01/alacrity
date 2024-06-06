import Card from "./card";

function ProfileCard({ user }) {
    return (
        <div>
            <Card user title={user.name} extra={user.age} value={user.role}  />
        </div>
    );
}

export default ProfileCard;