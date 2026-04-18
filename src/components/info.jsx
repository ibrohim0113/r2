import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Info = () => {
  const api = "http://localhost:3000/products";

  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product ?? null);

  const getProduct = async () => {
    if (!id) return;
    try {
      const res = await axios.get(`${api}/${id}`);
      setProduct(res.data);
    } catch (error) {
      alert("Error fetching product details: " + error.message);
    }
  };

  useEffect(() => {
    if (!product || product.id !== id) {
      getProduct();
    }
  }, [id, product]);

  if (!product) return <p className="p-6">Loading product...</p>;
  const getColorName = (hex) => {
    const colors = {
      "#4A69E2": "Blue",
      "#232321": "Black",
      "#234D41": "Green",
      "#F08155": "Orange",
      "#C9CCC6": "Gray",
      "#677282": "Steel",
      "#925513": "Brown",
      "#353336": "Dark Gray",
      "#BB8056": "Beige",
    };

    return colors[hex] || "Unknown";
  };

  return (
    <div className="max-w-5xl mx-auto p-6  pt-[190px]">
      <h1 className="text-3xl font-bold mb-4">{product.nameProduct}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.img}
          alt={product.nameProduct}
          className="w-full md:w-1/2 rounded-3xl object-cover"
        />
        <div className="space-y-4">
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <p className="text-gray-600">{product.about}</p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Category:</strong> {product.size2}</p>
          <p><strong>Gender:</strong> {product.gender}</p>
          <p className="flex items-center gap-3">
            <strong>Color:</strong>

            <span className="flex items-center gap-2">
              <span
                className="w-[20px] h-[20px] rounded-full border"
                style={{ backgroundColor: product.color }}
              ></span>
              {getColorName(product.color)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
