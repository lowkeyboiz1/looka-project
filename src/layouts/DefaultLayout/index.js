import Header from "../../components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
