import React, { useEffect } from "react";

const themes = {
  light: "light",
  dark: "dark",
  orange: "orange",
  purple: "purple",
  green: "green",
};
const names = {
  first: "Nguyen Minh Nhat",
  last: "Duong",
};
const occupation = "Front-end devoloper";
const contents = {
  first_content:
    "Bắt đầu tiếp xúc với ngôn ngữ lập trình đầu tiên từ năm 17 tuổi, không ngừng cố gắng và học hỏi để hoàn thiện bản thân.",
  second_content:
    "Started exposure to the first programming language at the age of 17, constantly trying and learning to improve myself.",
};
const information = {
  phone: {
    link: "tel:0986921104",
    title: "0986921104",
    icon: "bi-telephone",
  },
  zalo: {
    link: "https://zalo.me/0986921104",
    title: "Nguyễn Dương",
    icon: "bi-telephone",
  },
  email: {
    link: "mailto:duongcoilc2004@gmail.com",
    title: "duongcoilc2004@gmail.com",
    icon: "bi-envelope",
  },
  facebook: {
    link: "https://facebook.com/duongnguyen321",
    title: "Nguyễn Dương",
    icon: "bi-facebook",
  },
  github: {
    link: "https://github.com/duongnguyen321",
    title: "duongnguyen321",
    icon: "bi-github",
  },
};
const education = {
  2016: {
    year: "2016",
    title: "FPT Junior high school",
    body: "Trường Trung học Cơ sở FPT",
  },
  2017_2019: {
    year: "2017-2019",
    title: "Other Junior high school",
    body: "Các trường Trung học Cơ sở khác",
  },
  2019_2021: {
    year: "2019-2021",
    title: "Hoang Mai high school",
    body: "Trường Trung học Phổ thông Hoàng Mai",
  },
  2021: {
    year: "2021",
    title: "TechMaster Vietnam Ltd",
    body: "Hoàn thành khóa học Front-end và ReactJs tại Công ty TNHH TechMaster Vietnam",
  },
  2022: {
    year: "2022",
    title: "Hanoi College of Industry and Trade",
    body: "Theo học khoa Công nghệ thông tin tại Trường Cao đẳng Công thương Hà Nội",
    tech2_title: "Tech2 Education",
    tech2_body:
      "Hoàn thành khóa học ReactJs tại Công ty cổ phần công nghệ và giáo dục Tech2",
  },
};
const skills = {
  web_devoloper:
    "REST API, React JS, NodeJS Redux, Context, CSS3, HTML5, UI/UX, Figma, Photoshop...",
  other_skills:
    "Relatively good research and search skills. Working thinking, good teamwork skills compared to age.",
};
const projects = {
  stravel: {
    name: "Stravel-react",
    link: "https://stravel.vercel.app/",
    time: "Project làm trong 3 tháng",
    api: "https://github.com/duongnguyen321/apistravel",
    code: "https://github.com/duongnguyen321/stravel",
    more: "Website sử dụng React, React-router-dom, EmailJS, ChatBot, Auth0, Restful API... - Project đầu tiên",
  },
  api_hua: {
    name: "API Huawei Shop",
    link: "https://api-hua.herokuapp.com/",
    time: "Project làm trong 5 ngày",
    code: "https://github.com/duongnguyen321/api-hua",
    more: "Website sử dụng Javascript, Node JS để tạo một server api cho dự án Huawei Shop",
  },
  telebot: {
    name: "Telegram Bot",
    link: "https://t.me/messimgbot",
    time: "Project làm trong 1 tuần",
    code: "https://github.com/duongnguyen321/allai-telegram",
    more: "Bot Telegram sử dụng Nodejs, API của Openai và Api của AllAi. Để tạo ra một Chatbot, ImageBot trong Telegram",
  },
  hua_shop: {
    name: "Client Huawei Shop",
    link: "https://huashop.vercel.app/",
    time: "Project đang phát triển.",
    code: "https://github.com/duongnguyen321/hua-shop",
    more: "Đây là một dự án web bán hàng đơn giản, được phát triển bằng ReactJS. Mục đích của dự án này là giúp bạn có thể tạo ra một website bán hàng online của riêng mình, với các tính năng cơ bản như: Quản lý sản phẩm, Đặt hàng, thanh toán, Quản lý đơn hàng, Quản lý tài khoản người dùng, v.v.",
  },
  other_projects: "https://github.com/duongnguyen321",
};
const hobby = {
  music: "Nghe nhạc thư giãn, nhạc Đen Vâu,...",
  learn:
    "Đọc, tìm hiểu thêm về các ngôn ngữ lập trình mới. Gần đây, tôi đang tự tìm hiểu về Python",
  read: "Đọc và tìm hiểu thị trường công nghệ, tin tức công nghệ nổi tiếng như Iphone, Huawei, GoogleAI,...",
};
export const GlobalContext = React.createContext();

function GlobalState(props) {
  const body = document.body;
  const localStorage_theme = localStorage.getItem("themes");
  useEffect(() => {
    if (
      localStorage_theme !== undefined ||
      localStorage_theme !== null ||
      localStorage_theme !== ""
    ) {
      body.className = localStorage_theme;
    }
  }, [body, localStorage_theme]);

  function bodyLight() {
    body.className = themes.light;
    localStorage.setItem("themes", body.className);
  }
  function bodyDark() {
    body.className = themes.dark;
    localStorage.setItem("themes", body.className);
  }
  function bodyOrange() {
    body.className = themes.orange;
    localStorage.setItem("themes", body.className);
  }
  function bodyPurple() {
    body.className = themes.purple;
    localStorage.setItem("themes", body.className);
  }
  function bodyGreen() {
    body.className = themes.green;
    localStorage.setItem("themes", body.className);
  }
  function changeThemes() {
    if (body.className === "dark") {
      bodyLight();
    } else if (body.className === "light") {
      bodyOrange();
    } else if (body.className === "orange") {
      bodyGreen();
    } else if (body.className === "green") {
      bodyPurple();
    } else if (body.className === "purple") {
      bodyDark();
    } else {
      bodyDark();
    }
  }
  const { children } = props;
  return (
    <GlobalContext.Provider
      value={{
        body: body.className,
        changeThemes: changeThemes,
        names: names,
        occupation: occupation,
        contents: contents,
        information: information,
        education: education,
        skills: skills,
        projects: projects,
        hobby: hobby,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
