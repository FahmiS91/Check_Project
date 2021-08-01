import { Button, Container,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import './LandingPage.css'
function LandingPage() {
  

  return (
    <div
      className=" d-flex  flex-column align-items-center justify-content-center"
      style={{
        height: "100%",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrzsJwx9NEfem4zZwIEaGrXfePqpoyrveVA&usqp=CAU)",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
      }}
    >
      <h1> Welcome to My NotesApp </h1>
      <div className="mt-2">
        <Link to="/login">
          <Button size="lg" variant="success" className="mx-2">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button size="lg" variant="primary">
            signup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage
