import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaStar, FaHeart } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import Countdown from "react-countdown";
import birthdaySong from "./assets/birthday-song.mp3";
import ninhvo from "./assets/BucTranhVinhHang.mp3";
import Title from "./Title";

export default function App() {
  const [width, height] = useWindowSize();
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isPlayingFirst, setIsPlayingFirst] = useState(false); // Trạng thái bài nhạc đầu tiên
  const [isPlayingSecond, setIsPlayingSecond] = useState(false); // Trạng thái bài nhạc thứ hai
  const audioRefFirst = useRef(null); // Đối tượng audio cho bài nhạc đầu tiên
  const audioRefSecond = useRef(null); // Đối tượng audio cho bài nhạc thứ hai
  const targetDate = new Date("2025-05-03T00:00:00");
  const [password, setPassword] = useState(""); // Lưu trữ mật khẩu người dùng nhập
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // Kiểm tra mật khẩu đúng hay sai
  const [showHint, setShowHint] = useState(false); // Hiển thị gợi ý mật khẩu
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Chào buổi sáng!";
    if (hour < 18) return "Chào buổi chiều!";
    return "Chào buổi tối!";
  };

  useEffect(() => {
    // Khởi tạo đối tượng audio cho bài nhạc đầu tiên
    audioRefFirst.current = new Audio(birthdaySong);
    audioRefFirst.current.loop = true;

    // Khởi tạo đối tượng audio cho bài nhạc thứ hai
    audioRefSecond.current = new Audio(ninhvo);
    audioRefSecond.current.loop = true;

    return () => {
      // Dọn dẹp khi component bị unmount
      if (audioRefFirst.current) {
        audioRefFirst.current.pause();
        audioRefFirst.current = null;
      }
      if (audioRefSecond.current) {
        audioRefSecond.current.pause();
        audioRefSecond.current = null;
      }
    };
  }, []);

  const toggleFirstMusic = () => {
    if (audioRefFirst.current) {
      if (isPlayingFirst) {
        audioRefFirst.current.pause(); // Tạm dừng nhạc đầu tiên
      } else {
        audioRefFirst.current
          .play()
          .catch((error) => console.error("Playback failed:", error)); // Phát nhạc đầu tiên
      }
      setIsPlayingFirst(!isPlayingFirst); // Đổi trạng thái
    }
  };

  const toggleSecondMusic = () => {
    if (audioRefSecond.current) {
      if (isPlayingSecond) {
        audioRefSecond.current.pause(); // Tạm dừng nhạc thứ hai
      } else {
        audioRefSecond.current
          .play()
          .catch((error) => console.error("Playback failed:", error)); // Phát nhạc thứ hai
      }
      setIsPlayingSecond(!isPlayingSecond); // Đổi trạng thái
    }
  };
  const handlePasswordSubmit = () => {
    const correctPassword = "19052024"; // Mật khẩu đúng
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
      toggleSecondMusic(); // Bật nhạc nếu mật khẩu đúng
    } else {
      alert("Mật khẩu không đúng!"); // Thông báo nếu mật khẩu sai
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Confetti width={width} height={height} />
      <div className="absolute top-4 right-4 text-green-500 text-xl font-bold">
        ♉ Happy Birthday Tên ♉
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md"
      >
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-pink-500">{getGreeting()}</h1>
          <p className="text-lg text-gray-700 mt-2">
            Hôm nay là một ngày đặc biệt, hãy tận hưởng từng khoảnh khắc!
          </p>
        </div>
        <FaBirthdayCake className="text-rose-400 text-5xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-pink-500 mb-2">
          Chúc mừng sinh nhật!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Gửi đến cô gái <span className="font-bold text-green-600">Tên</span>{" "}
          xinh đẹp nhất, <span className="font-bold"> tuổi</span> đầy sức sống,
          sự kiên định và ngọt ngào.
        </p>
        <p className="text-sm text-gray-600 mb-4">Lời chúc</p>
        <div className="flex justify-center space-x-4 text-pink-400 text-2xl">
          <FaStar className="animate-pulse" />
          <FaHeart className="animate-ping" />
          <FaStar className="animate-pulse" />
        </div>
        <button
          onClick={toggleFirstMusic} // Gọi hàm toggleMusic khi click
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600"
        >
          {isPlayingFirst ? "Tắt nhạc" : "Bật nhạc"} {/* Hiển thị trạng thái */}
        </button>
      </motion.div>
      {/* Đồng hồ đếm ngược */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-pink-500">
          Đếm ngược đến sinh nhật!
        </h2>
        <Countdown
          date={targetDate}
          onComplete={() => setCountdownComplete(true)}
          className="text-4xl font-extrabold text-pink-600"
        />
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="fixed inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{
                duration: 1,
                yoyo: Infinity, // Lặp lại hiệu ứng
              }}
              className="text-6xl font-extrabold text-white drop-shadow-lg"
            >
              Chúc mừng sinh nhật!
            </motion.h1>
          </motion.div>
        )}
      </div>
      <ImageCarousel /> {/* Thêm carousel vào dưới thiệp chúc mừng */}
      <Title />
      <div>
        <h2 className="text-xl font-bold text-pink-500 mt-8">
          Nếu như lúc này không có anh bên cạnh thì đừng bật nhé!
        </h2>
      </div>
      <div className="mt-4 px-4 py-2">
        {!isPasswordCorrect ? (
          <div>
            <input
              type="password"
              placeholder="Nhập mật khẩu để bật nhạc"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-2 py-1 rounded"
            />
            <button
              onClick={handlePasswordSubmit}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
            >
              Xác nhận
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600"
            >
              Gợi ý
            </button>
            {showHint && (
              <p className="mt-2 text-gray-700">
                Gợi ý: Mật khẩu là ngày đầu tiên anh hôn em. vd:01012024
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={toggleSecondMusic}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
            >
              {isPlayingSecond ? "Tắt nhạc" : "Bật nhạc"}
            </button>
            <div className="mt-4 text-center">
              <p>Lời nhắn của anh dành cho em:</p>
              <p>Lời nhắn của anh dành cho em:</p>
              <p>Lời nhắn của anh dành cho em:</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
