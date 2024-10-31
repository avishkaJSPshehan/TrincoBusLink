import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn"
      onClick={() => {
        sessionStorage.clear();
        navigate(0);
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
