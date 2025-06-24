// 🎯 PROPS EXAMPLE - Data received from parent component

interface UserCardProps {
  name: string;
  age: number;
  city: string;
}

function UserCard(props: UserCardProps) {
  return (
    <div style={{ border: '2px solid #3b82f6', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>👤 User Info (Props)</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>City:</strong> {props.city}</p>
      <small>📥 This data comes from the parent component (props)</small>
    </div>
  )
}

export default UserCard
