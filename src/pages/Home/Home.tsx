import { useEffect } from "react";
import LoginForm from "../../forms/Login/LoginForm";
import { useApp } from "../../hooks/useApp";
import "./Home.css";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { isLoggedIn, setHasRun, hasRun } = useApp();

  useEffect(() => {
    // This keeps page to top on login click...
    window.scrollTo(0, 0);
    let loadingTimeout: NodeJS.Timeout;
    if (!hasRun) {
      loadingTimeout = setTimeout(() => {
        setHasRun(true);
      }, 2000);
    }
    return () => clearTimeout(loadingTimeout);
  }, [isLoggedIn, hasRun, setHasRun]);

  return !isLoggedIn ? (
    <LoginForm />
  ) : !hasRun ? (
    <Loading />
  ) : (
    <div className="card">
      <div className="home-text-content">
        <h3>
          Well, maybe 'magic' was a bit dramatic for some sliding text... 😅
        </h3>
        <span>(But there is a cool Logout button that works!)</span>

        <p>
          Whether you need a simple website, a React app, or a
          full stack app built - I can help.
        </p>
        <p>
          I have experience working with modern tools and frameworks such as:
          ReactJS, Node.Js (express, ApolloServer), React Native, Typescript, UI
          component libraries, JavaScript, HTML, CSS, JSON, Web tokens (JWT),
          graphQL, noSql (mongoDB), SQL, and Docker…
        </p>

        <p>
          And before software development, I had a successful career in highly
          technical systems engineer and systems administrator roles; where I
          single-handedly designed, built, and managed physical and virtual
          desktop and server infrastructures for 3 different companies - so I
          have a wide range of skills and experience to help you with!{" "}
        </p>

        <p>
          My hours are super flexible 7 days a week to match time zones, or meet
          deadlines etc.
        </p>
        <p>
          (Once you've finished playing with the login and logout functionality,
          head over to the portfolio page to see some examples of my work. And
          then you can contact me via the{" "}
          <Link style={{ textDecoration: "none" }} to={"/Contact"}>
            contact
          </Link>{" "}
          page.)
        </p>
      </div>
    </div>
  );
};
export default Home;
