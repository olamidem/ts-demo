export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ username, email, age, location }: Info) => {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Location: {JSON.stringify(location)}</p>
    </div>
  );
};

// type UserInfoProps = {
//   user: Info;
// };

// const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
//   return (
//     <div>
//       <h1>User Info</h1>
//       <p>{user.id}</p>
//       <p>{user.name}</p>
//       <p>{user.email}</p>
//     </div>
//   );
// };

export default UserInfo;
