# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Những mục cần đổi:
folder assets đổi ảnh và nhạc theo nhu cầu
Thay đường dẫn ảnh ở file ImgeCar
//Thay đổi đường dẫn đến ảnh của bạn ở đây
import bn1 from "./assets/OIP.jpg";
import bn2 from "./assets/OIP (1).jpg";
import bn3 from "./assets/OIP (2).jpg";
import bn4 from "./assets/OIP (3).jpg";
import bn5 from "./assets/OIP (4).jpg";
import bn6 from "./assets/OIP (5).jpg";
import bn7 from "./assets/OIP (6).jpg";
đổi tên và ảnh ở file index.html
ở file App đổi:
const targetDate = new Date("2025-05-03T00:00:00");: đổi ngày sinh nhật
const correctPassword = "19052024"; // Mật khẩu đúng: đổi mật khẩu
đổi những chỗ có chữ "Tên" thành tên người đó

<p className="mt-2 text-gray-700">
Gợi ý: Mật khẩu là ngày đầu tiên anh hôn em. vd:01012024
</p>
đổi gợi ý theo nhu cầu
<p>Lời nhắn của anh dành cho em:</p>: lời của bạn,
ở file Title đổi lời chúc dành cho đổi phương nếu muốn
