import Header from "../../components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="content h-[2000px]">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
