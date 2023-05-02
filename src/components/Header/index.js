import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
  const navigations = [
    {
      to: "/LogoMaker",
      title: "Logo Maker",
    },
    {
      to: "/BrandKit",
      title: "Brand Kit",
    },
    {
      to: "/HowItWorks",
      title: "How It Works",
    },
    {
      to: "/Reviews",
      title: "Reviews",
    },
    {
      to: "/LogoIdeas",
      title: "Logo Ideas",
    },
    {
      to: "/Blog",
      title: "Blog",
    },
  ];

  return (
    <header className={cx("header")}>
      <div className={cx("logo-wrapper")}>
        <img
          className={cx("logo-img")}
          src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
          alt="logo"
        />
      </div>
      <div className={cx("center-header")}>
        {navigations.map((navigation, index) => (
          <Button
            key={index}
            to={navigation.to}
            className={cx("navigation-item")}
          >
            {navigation.title}
          </Button>
        ))}
      </div>
      <div className={cx("header-end")}>
        <Button>Log in</Button>
        <Button primary small>
          Sign up
        </Button>
      </div>
    </header>
  );
}

export default Header;
