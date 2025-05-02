import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Title() {
  const [guestbook] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [candlesLit, setCandlesLit] = useState(true);
  const [defaultWishIndex, setDefaultWishIndex] = useState(0);
  const [countdownComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const defaultWishes = [
    "Chúc em yêu sinh nhật vui vẻ, mãi xinh đẹp và hạnh phúc bên anh nhé!",

    "Sinh nhật này, anh không hứa mang cả thế giới đến, nhưng hứa mãi ở bên em.",

    "Chúc tình yêu của anh tuổi mới luôn cười thật tươi và yêu đời như bây giờ.",

    "Cảm ơn em đã đến và làm cuộc đời anh rực rỡ hơn. Chúc mừng sinh nhật em!",

    "Anh yêu em nhiều hơn từng khoảnh khắc, chúc em tuổi mới ngập tràn yêu thương.",

    "Chúc mừng sinh nhật cô gái tuyệt vời nhất thế gian – tình yêu của anh!",

    "Mong mọi điều tốt đẹp nhất sẽ đến với em trong tuổi mới. Happy birthday baby!",

    "Sinh nhật vui vẻ nhé em yêu, chúc em luôn được yêu thương và che chở.",

    "Cảm ơn em đã là một phần của đời anh. Chúc em sinh nhật ngọt ngào và hạnh phúc!",

    "Anh thật may mắn khi có em. Chúc em tuổi mới luôn rạng rỡ và yêu đời.",

    "Chúc cô gái của anh một sinh nhật thật ấm áp, ngọt ngào và đáng nhớ!",

    "Anh yêu em! Chúc em sinh nhật vui vẻ, tràn đầy nụ cười và yêu thương.",

    "Mỗi năm trôi qua anh càng yêu em nhiều hơn. Happy birthday, my love!",

    "Chúc em sinh nhật tràn đầy niềm vui, hạnh phúc và thật nhiều may mắn nhé!",
    "Sinh nhật này, mong em nhận được tất cả tình yêu, sự quan tâm và những điều em mong ước.",

    "Chúc em tuổi mới thêm xinh đẹp, tự tin và hạnh phúc bên anh mãi nhé!",

    "Cảm ơn em đã làm cuộc đời anh thêm ý nghĩa. Chúc em sinh nhật rực rỡ, đáng nhớ!",

    "Chúc mừng sinh nhật cô gái khiến tim anh loạn nhịp mỗi ngày!",

    "Sinh nhật vui vẻ nhé tình yêu, anh chúc em luôn đạt được ước mơ của mình.",

    "Chúc em một sinh nhật thật ấm áp, ngọt ngào và tràn đầy tiếng cười, yêu em nhiều!",
  ];
  const taurusFacts = [
    "Kim Ngưu là cung hoàng đạo của sự kiên định, ổn định và đáng tin cậy.",

    "Kim Ngưu yêu thích cái đẹp, sự thoải mái và những thú vui đơn giản.",

    "Màu sắc may mắn của Kim Ngưu là xanh lá cây và hồng.",

    "Kim Ngưu nữ dịu dàng, tinh tế nhưng mạnh mẽ, kiên nhẫn.",

    "Kim Ngưu coi trọng tình cảm, chung thủy và tận tâm với gia đình.",

    "Kim Ngưu thực tế, ghét sự giả tạo và phô trương.",

    "Kim Ngưu yêu thích sự ổn định và ghét thay đổi đột ngột.",

    "Kim Ngưu có gu thẩm mỹ tốt, yêu nghệ thuật và cái đẹp.",

    "Kim Ngưu quản lý tài chính giỏi, biết tiết kiệm và đầu tư an toàn.",

    "Kim Ngưu thích tận hưởng ẩm thực ngon và không gian ấm cúng.",

    "Kim Ngưu có trái tim ấm áp, luôn quan tâm và chăm sóc người thân.",

    "Kim Ngưu kiên nhẫn, bền bỉ và không bỏ cuộc dễ dàng.",

    "Kim Ngưu thích xây dựng mối quan hệ lâu dài và bền vững.",

    "Kim Ngưu trung thực, ghét sự dối trá và phản bội.",

    "Kim Ngưu là người bạn đáng tin cậy, luôn giữ lời hứa.",

    "Kim Ngưu sống chậm, tận hưởng từng khoảnh khắc bình yên.",

    "Kim Ngưu có khả năng làm việc chăm chỉ và tập trung cao độ.",

    "Kim Ngưu thích sự rõ ràng, ghét sự mập mờ và không chắc chắn.",

    "Kim Ngưu yêu thiên nhiên, thích không gian xanh và yên tĩnh.",

    "Kim Ngưu có sức hấp dẫn tự nhiên nhờ sự điềm tĩnh và ấm áp.",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % taurusFacts.length);
    }, 5000); // Change fact every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (guestbook.length === 0) {
      const interval = setInterval(() => {
        setDefaultWishIndex(
          (prevIndex) => (prevIndex + 1) % defaultWishes.length
        );
      }, 4000); // Change wish every 4 seconds
      return () => clearInterval(interval);
    }
  }, [guestbook]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCandlesLit(false);
    }, 5000); // Blow out candles after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (countdownComplete) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000); // Show for 5 seconds
    }
  }, [countdownComplete]);

  return (
    <div className="text-center mt-4">
      {/* Greeting */}

      {/* Guestbook Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-pink-500">Guestbook</h2>
        <p className="text-sm text-gray-600 mb-4">
          Những lời chúc mừng sinh nhật của anh dành cho em!
        </p>
        {guestbook.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700 text-lg font-semibold"
          >
            {guestbook.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-gray-700 text-lg font-semibold"
              >
                {message}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-700 text-lg font-semibold"
          >
            {defaultWishes[defaultWishIndex]}
          </motion.div>
        )}
      </div>

      {/* Taurus Insights */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-pink-500">Taurus Insights</h2>
        <motion.div
          key={currentFactIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-lg font-semibold mt-4"
        >
          {taurusFacts[currentFactIndex]}
        </motion.div>
      </div>
      {/* Countdown Celebration */}
      {showCelebration && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <h1 className="text-5xl font-bold text-white">
            Chúc mừng sinh nhật!
          </h1>
        </motion.div>
      )}
    </div>
  );
}
