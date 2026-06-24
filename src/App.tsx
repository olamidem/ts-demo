import Counter from "./components/Reducer/Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
  // const user: Info = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "johndoe@gmail.com",
  // };

  // const admin: AdminInfoList = {
  //   id: 1,
  //   name: "Janet Base",
  //   email: "janetbase@gmail.com",
  //   role: "admin",
  //   lastLogin: new Date(),
  // };

  // return (
  //   <div>
  //     <h1>User Info 👇🏼</h1>
  //     <UserInfo
  //       username="Alex"
  //       email="alex@gmail.com"
  //       age={20}
  //       location={["Earth", "USA"]}
  //     />
  //     <h1>Admin Info 👇🏼</h1>
  //     <AdminInfo
  //       username="Alex"
  //       email="alex@gmail.com"
  //       age={20}
  //       location={["Mars", "USA"]}
  //       admin="yes"
  //     />
  //   </div>
  // );
};

export default App;
