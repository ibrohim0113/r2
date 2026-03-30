import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

const Info = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const api = "http://37.27.29.18:8001/api/to-dos";
    const apiImg = "http://37.27.29.18:8001/images";

    const getPr = async () => {
        try {
            const { data } = await axios.get(`${api}/${productId}`);
            setProduct(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPr()
    }, []);

    if (!product) return <h1>Loading...</h1>;

    async function deletes(id) {
        try {
            await axios.delete(`${api}/images/${id}`)
            getPr()
        } catch (error) {
            console.error(error);
        }
    }

    async function adddds(e) {
        let file = e.target.files
        let formData = new FormData()
        formData.append("Images", file)
        try {
            await axios.post(`${api}/${productId}/images`, formData)
            getPr()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <h1>{product.name}</h1>
                <h1>{product.description}</h1>
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                >
                    {product.images.map((img) => (
                        <SwiperSlide key={img.id} className="">
                            <img
                                src={`${apiImg}/${img.imageName}`}
                                className="w-full h-90 border"
                            />
                            <button onClick={() => deletes(img.id)}>delete</button>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <input onChange={adddds} type="file" />
            </div>
        </>
    );
};

export default Info;