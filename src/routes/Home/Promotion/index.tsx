import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion() {

    return (
        <>
         <div className="container">
                    <div className="mt30 mb30">
                        <Card title="Página de promoção" />
                    </div>
                    <Link to={"/scription"}>
                             <Button text="Fazer Inscrição" />
                    </Link>   
                </div>
        </>
    );
        
      
}
