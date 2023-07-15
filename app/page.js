//import { useState } from 'react';
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  // Sample product data

  // const handleInputChange = (event) => {
  //   setNewProduct({
  //     ...newProduct,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const { id, name, quantity, price, image } = newProduct;

  //   // Validate the inputs (e.g., check if they are not empty)

  //   // Create a new product object
  //   const product = {
  //     id: parseInt(id),
  //     name,
  //     quantity: parseInt(quantity),
  //     price: parseFloat(price),
  //     image,
  //   };

  //   // Add the new product to the existing products array
  //   setProducts([...products, product]);

  //   // Reset the form inputs
  //   setNewProduct({
  //     id: '',
  //     name: '',
  //     quantity: '',
  //     price: '',
  //     image: '',
  //   });
  // };

  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold">Search Products</h1>
        <form>
          <label className="block mb-2">
            Search:
            <input
              type="text"
              name="searchQuery"
              // value={searchQuery}
              // onChange={(event) => setSearchQuery(event.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Search
          </button>
        </form>
      {/* Display current stock */}
      <div className="container bg-red-50 mx-auto p-4">
        <h1 className="text-2xl font-bold">Add a Product</h1>

        {/* Add Product Form */}
        <form className="my-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Quantity:
            <input
              type="text"
              name="quantity"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Price:
            <input
              type="text"
              name="price"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="container bg-red-50 mx-auto p-4 my-6">
        <h1 className="text-2xl font-bold">Display Current Products</h1>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 px-4 py-2">Name</th>
              <th className="border-b-2 border-gray-300 px-4 py-2">Quantity</th>
              <th className="border-b-2 border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 px-4 py-2">name</td>
              <td className="border-b border-gray-300 px-4 py-2">quantity</td>
              <td className="border-b border-gray-300 px-4 py-2">price</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
