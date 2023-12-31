import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const newProduct = { name, brand, type, price, image, details, rating };
    console.log(newProduct);
    // send data to the server
    fetch(
      "https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/addProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-5 md:py-16">
      <div
        className={`px-10 py-10 md:px-20 md:py-10 filter backdrop-blur-xl border-2 rounded`}
      >
        <h2
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          className="text-3xl text-center font-bold mb-5 uppercase"
        >
          Add a Product
        </h2>
        <p className="text-center  mx-auto mb-5">
          Rev up your listing! Sell your car with ease by adding its details in
          our user-friendly form.
        </p>

        <form onSubmit={handleAddProduct}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-lg font-semibold ">Name</label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">
                Brand Name
              </label>
              <input
                type="text"
                name="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter  brand name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold ">Type</label>
              <input
                type="text"
                name="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product type"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold ">Price</label>
              <input
                type="text"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product price"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold ">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product rating"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold ">
                Short description
              </label>
              <input
                type="text"
                name="details"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product details"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold ">Image</label>
            <input
              type="url"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter product image url"
              required
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Add"
              className="text-white bg-red-500 hover:bg-red-700  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center text-xl w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
