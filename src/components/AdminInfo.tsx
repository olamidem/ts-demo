import type { Info } from "./UserInfo";

type AdminInfoProps = Info & {
  admin: string;
};

const AdminInfo = ({
  username,
  email,
  age,
  location,
  admin,
}: AdminInfoProps) => {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Admin: {admin}</p>
      {/* <p>Last Login: {admin.lastLogin.toLocaleString()}</p> */}
    </div>
  );
};

// type AdminInfoProps = {
//   admin: AdminInfoList;
// };

// const AdminInfo = ({ admin }: AdminInfoProps) => {
//   return (
//     <div>
//       <h1>Admin Info</h1>
//       <p>ID: {admin.id}</p>
//       <p>Name: {admin.name}</p>
//       <p>Email: {admin.email}</p>
//       <p>Role: {admin.role}</p>
//       {/* <p>Last Login: {admin.lastLogin.toLocaleString()}</p> */}
//     </div>
//   );
// };

export default AdminInfo;
