import Header from "../../components/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className={cx("content h-[2000px]")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
