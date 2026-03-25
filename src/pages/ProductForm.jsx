import axios from "axios";
import React, { useState } from "react";

const ProductForm = () => {
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const autoId = Date.now(); 
      const payload = [
        {
          id: autoId,
          title: product.title,
          price: parseFloat(product.price),
          description: product.description,
          category: product.category,
          image: product.image ? product.image.name : "",
        },
      ];

      const { data } = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

    //   setDatas(data);
     const responseWithPayload = { ...payload[0], ...data };

    setDatas(responseWithPayload);
      alert(" Product added successfully!");

      setProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });

    //   e.target.reset();
    } catch (error) {
      console.error("Error posting product:", error);
      alert("❌ Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="">Add Product</h2>

      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div>

   
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          
        />
             </div>
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={product.price}
          onChange={handleChange}
          
        />
        <input
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          
        />
        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          
        />

      
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          
        />

        <button
          type="submit"
          disabled={isLoading}
          className=""
        >
          {isLoading ? "Posting..." : "Add Product"}
        </button>
      </form>

      {datas && (
        <div className="">
          <h3 className="">Response:</h3>
          <pre className="">{JSON.stringify(datas, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
