import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion";
import birthdaySong from "./assets/birthday-song.mp3";

//Thay đổi đường dẫn đến ảnh của bạn ở đây
import bn1 from "./assets/OIP.jpg";
import bn2 from "./assets/OIP (1).jpg";
import bn3 from "./assets/OIP (2).jpg";
import bn4 from "./assets/OIP (3).jpg";
import bn5 from "./assets/OIP (4).jpg";
import bn6 from "./assets/OIP (5).jpg";
import bn7 from "./assets/OIP (6).jpg";

const images = [bn1, bn2, bn3, bn4, bn5, bn6, bn7];

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);


  // Auto-scroll for the memory container
  useEffect(() => {
    const interval = setInterval(() => {
      const memoryContainer = document.querySelector(".memory-container");
      if (memoryContainer) {
        memoryContainer.scrollBy({ top: 0, left: 200, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = new Audio(birthdaySong);
    audio.play();
    audio.loop = true;

    const candleAudio = new Audio("./assets/candle-flicker.mp3");
    candleAudio.play();
    candleAudio.loop = true;

    return () => {
      audio.pause();
      candleAudio.pause();
    };
  }, []);



  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto mt-8 memory-container">
      <h2 className="text-xl font-bold text-pink-500">Memory Lane</h2>
      <p className="text-sm text-gray-600 mb-4">
        Những khoảnh khắc đáng nhớ từ các sinh nhật trước!
      </p>
      <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl mt-8 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => setSelectedImage(src)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal hiển thị ảnh lớn */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Phóng to"
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow:
                    "0 0 40px rgba(255, 0, 128, 0.8), 0 0 80px rgba(255, 192, 203, 0.6)",
                }}
                style={{
                  boxShadow:
                    "0 0 20px rgba(255, 192, 203, 0.5), 0 0 40px rgba(255, 105, 180, 0.4)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

  
    </div>
  );
}
