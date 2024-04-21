import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Scription() {

    return (
        <>
       
         <div className="container">
             <h2 className="Section-title">Faça sua Incrição</h2>
                    <div className="mt30 mb30">
                        <Card title="Fazer inscrição" />
                    </div>
                    <Link to={"/promotion"}>
                            <Button text="Ver promoção" />
                    </Link>   
                </div>
        </>
    );
        
      
}