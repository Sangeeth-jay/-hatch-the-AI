import ChatSpace from "../components/dashboard/ChatSpace";
import SideBar from "../components/dashboard/SideBar";

const Dashboard = () => {
  return (
    <>
      <main className="flex bg-[#2E3035]">

          <SideBar />
          <ChatSpace/>

      </main>
    </>
  );
};

export default Dashboard;
