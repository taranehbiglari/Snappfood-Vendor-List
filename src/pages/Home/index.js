import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-center h-100vh align-center">
      <button className="button-primary border-none rounded p-3 shadow">
        <Link
          className="text-white fw-600 text-decoration-none"
          to={"/vendor-list"}
        >
          لیست رستوران ها
        </Link>
      </button>
    </div>
  );
};

export default Home;
