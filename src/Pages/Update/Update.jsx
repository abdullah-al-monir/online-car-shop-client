import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();
  const { _id, name, brand, image, type, rating, price, details } = product;
  console.log(product);
  const navigate = useNavigate();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const updateProduct = { name, brand, type, price, image, details, rating };
    // send data to the server
    fetch(`https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          navigate(-1);
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-5 md:py-16">
      <div className="px-10 py-10 md:px-20 md:py-10 border-2 rounded">
        <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }} className="text-3xl text-center font-bold mb-5 uppercase">Update Product</h2>
        <p className="text-center  mx-auto mb-5">
          You can update or customize the product here by filling the form
        </p>
        <form onSubmit={handleUpdateProduct}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
                Brand Name
              </label>
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter  brand name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
                Type
              </label>
              <input
                type="text"
                name="type"
                defaultValue={type}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter product type"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter product price"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter product rating"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold  ">
              Short description
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
                placeholder="Enter product details"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold ">
              Image
            </label>
            <input
              type="url"
              name="image"
              defaultValue={image}
              className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900"
              placeholder="Enter product image url"
              required
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Update"
              className="text-white bg-red-500 hover:bg-red-700  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center text-xl w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
