/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


/* eslint-disable no-unused-vars */
const Cart = ({ selectedActor }) => {
    console.log(selectedActor);
    return (
        <div className="p-3 bg-[#FFF] rounded-md'">
            <h3 className="text-center">Credit Hour Remaining 7 hr</h3>
            {
                selectedActor.map(actor => (

                        
                        <li key={actor.id} className="mb-2">{actor.title}</li>
                ))
            }

        </div>
    );
};

export default Cart;