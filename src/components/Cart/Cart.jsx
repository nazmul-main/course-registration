/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


/* eslint-disable no-unused-vars */
const Cart = ({selectedCourse, totalPrice, totalCredit, remainingCredit}) => {
    console.log(selectedCourse);
    return (
        <div className="p-3 bg-[#FFF] rounded-md space-y-3">
            <h3 className="text-[#2F80ED] text-center font-semibold">Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h3 className="  font-bold">Course Nmae</h3>
            {
                selectedCourse.map(course => (
                        <li key={course.id} className="mb-2">{course.title}</li>
                ))
            }
            <hr />
            <h3 className="text-center font-semibold">Total Credit Hour: {totalCredit}</h3>
            <hr />
            <h3 className="text-center font-bold">Total Pice: {totalPrice}</h3>

        </div>
    );
};

export default Cart;