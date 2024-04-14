import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className={css.box}>
      <img
        className={css.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMET2K-xegKA3XE385InRvtxrDdeC_SDLeOQ&s"
        alt="Not Found Page"
      />
      <p>You will be redicted to Home page in {5 - timer} seconds</p>
      <Link className={css.link} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
