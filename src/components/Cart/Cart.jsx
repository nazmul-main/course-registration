/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


/* eslint-disable no-unused-vars */
const Cart = ({selectedCourse, totalPrice, totalCredit, remainingCredit}) => {
    console.log(selectedCourse);
    return (
        <div className=" space-y-3">
            <h3 className="text-[#2F80ED] text-center font-bold">Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h3 className="font-bold">Course Nmae</h3>
            {
                selectedCourse.map((course, idx) => (
                        <h4 key={course.id} className=" text-gray-500 mb-2">{idx+1}. {course.title}</h4>
                ))
            }
            <hr />
            <h3 className="text-gray-500 font-semibold">Total Credit Hour: {totalCredit}</h3>
            <hr />
            <h3 className="text-gray-500 font-bold">Total Price: {totalPrice}</h3>

        </div>
    );
};

export default Cart;