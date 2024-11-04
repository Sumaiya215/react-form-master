import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({asset}) => {
    const [money, setMoney] =useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Honey'} asset={asset}></Cousin>
                <Cousin name={'Bunny'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money+1000)}>Add 1000 taka</button>
        </div>
    );
};

export default Aunty;