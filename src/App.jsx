import React from "react";

import img1 from "./assets/INNOMA.VC (1).png";
import img2 from "./assets/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1 (1).png";
import img3 from "./assets/rocket 1 (1).png";
import img4 from "./assets/01.png";
import img5 from "./assets/02.png";
import img6 from "./assets/03.png";
import img7 from "./assets/Ellipse 527.png";
import img8 from "./assets/5,5milliard.png";
import img9 from "./assets/_300.png";
import img10 from "./assets/73.png";
import img11 from "./assets/dowland.png";
import img12 from "./assets/3 (1).png";
import img13 from "./assets/Vector (4).png";
import img14 from "./assets/Vector (5).png";
import img15 from "./assets/Group 839 (1).png";
import img16 from "./assets/bgImg2.png";
import img17 from "./assets/04.png";
import img18 from "./assets/05.png";
import img19 from "./assets/06.png";
import img20 from "./assets/Vector (6).png";
import img21 from "./assets/Vector (7).png";
import img22 from "./assets/Vector (8).png";
import img23 from "./assets/Снимок экрана 2022-11-14 в 5.45 1.png";
import img24 from "./assets/Group 841.png";
import img25 from "./assets/Group 1049.png"
import img26 from "./assets/Ellipse 545.png";
import img27 from "./assets/Ellipse 546.png";
import img28 from "./assets/Ellipse 548.png";
import img29 from "./assets/Ellipse 544 (1).png"
import img30 from "./assets/Group 1010 (1).png"
import img31 from "./assets/иллюстрация-вектора-карты-в-регионе-mena-eps-167723480 1.png";
import img32 from "./assets/434ba4f5a20d0c361d4ae733771006a7 1.png"
import img33 from "./assets/Снимок экрана 2022-11-15 в 1.13 1.png"
import img34 from "./assets/Group 857.png"
import up from "./assets/up (2).png";
import down from "./assets/down (2).png";
import Section_1 from "./components/section_1/section_1.jsx";
import Section_2 from "./components/section_2/section_2.jsx";
import { TextField } from "@mui/material";

const App = () => {
  const items = [
    {
      name: "Аналитические исследования",
      description:
        "Одним из наших ключевых направлений является анализ технологических трендов на международных рынках. Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации",
      img: img2,
    },
    {
      name: "Онлайн акселератор для IT бизнеса",
      description:
      "Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров",
      img: img3,
    },
  ];
  return (
    <div>
      <div className="header_bgImg">
        <div className="max-w-[1100px] m-auto pt-[25px] elative ">
          <div className="pt-[25px] z-10 relative flex items-center justify-between">
            <img src={img1} alt="" />
            <div className="text-white flex w-[40%] justify-between">
              <h1>Кто мы?</h1>
              <h1>Услуги</h1>
              <h1>Акселератор</h1>
              <h1>Новости</h1>
            </div>
            <button className="p-[10px_20px] bg-[#07AF91] text-white rounded-md">
              Войти
            </button>
          </div>
          <div className="relative z-10 text-white mt-[20px]">
            <h1 className="text-[2.6rem] font-bold pt-[40px]">
              Запустите <br />
              <span className="bg-[#07AF91] p-[0px_10px] pb-[5px] font-bold rounded-md text-white">
                технологический IT-бизнес
              </span>{" "}
              <br />
              на международных рынках
            </h1>
            <p className="text-[white] font-normal text-[2rem]">
              Открыт набор заявок на акселератор
            </p>
            <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-[30px] p-[20px_40px]">
              Подать заявку
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px]  m-auto">
        <h1 className="text-[2rem] mt-[6rem] mb-[40px] font-bold text-[#1178B2]">
          Наши услуги
        </h1>
        <div className="mt-[100px]">
          {items?.map((item, index) => (
            <Section_1
              key={index}
              name={item.name}
              img={item.img}
              description={item.description}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div>
          <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
            Для кого мы?
          </h1>
          <div className="flex flex-wrap justify-between">
            <Section_2
              img={img4}
              name="IT проекты на стадии идеи"
              description="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
            />
            <Section_2
              img={img5}
              name="Инновационный бизнес"
              description="Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
            />
            <Section_2
              img={img6}
              name="Корпорации"
              description="Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
            />
          </div>
        </div>
      </div>
      <div className="section_bgImg">
        <div className="max-w-[1100px] m-auto z-10 relative">
          <div className="mt-[40px] pt-[40px]">
            <h1 className="bg-[#07AF91] text-white text-[2.5rem]  h-[130px] mt-[40px]  text-center font-bold">
              Научитесь исследовать иностранные рынки <br />и откройте новые
              возможности для своего бизнеса
            </h1>
          </div>
          <h1 className="text-[1.4rem] text-white mt-[30px] font-normal text-center">
            Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
            Латинской Америки и Африки
          </h1>
          <div className="m-auto w-[20%]">
            <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-[30px] p-[20px_40px] flex">
              Подать заявку
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
          С какими рынками мы работаем?
        </h1>
        <div className="flex ">
          <div className="p-[30px_60px] bg-[#88BBD8] text-white w-[300px] rounded-md">
            Ближний восток
          </div>
          <div className="p-[30px_60px] bg-[#EEF1F4] w-[300px] border-r-[1px] border-r-gray-300">
            Азия
          </div>
          <div className="p-[30px_60px] bg-[#EEF1F4] w-[300px] border-r-[1px] border-r-gray-300">
            Латинская Америка
          </div>
          <div className="p-[30px_60px] bg-[#EEF1F4] w-[300px] rounded-r-md ">
            Африка
          </div>
        </div>
        <div className="section_3_bgImg">
          <div>
            <h1 className="text-[2rem] font-bold">
              Чем интересен <br />
              <span className="text-green-600">Рынок MENA:</span>
            </h1>
            <p className="text-[1.3rem] mt-[20px]">
              ОАЭ, Саудовская Аравия, <br />
              Израиль, Оман, Бахрейн, Катар, <br />
              Тунис, Йемен, Египет, Алжир
            </p>
            <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-[30px] p-[20px_40px] flex">
              Выйти на рынок
            </button>
            <div className="flex mt-[30px]">
              <img src={img7} alt="" />
              <div className="ml-[20px]">
                <h1 className="font-normal">Фатима </h1>
                <p className="text-gray-600 font-mono">Менеджер по MENA</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[700px] flex-wrap">
            <div className="shadow-md w-[320px] flex bg-[white] rounded-md justify-center pt-[50px] text-center h-[200px]">
              <div>
                <img
                  src={img8}
                  alt=""
                  className="w-[60%] mb-[20px] ml-[25px]"
                />
                <h1>Инвестиции pre-seed, seed</h1>
              </div>
            </div>
            <div className="shadow-md w-[320px] flex bg-[white] rounded-md justify-center pt-[50px] text-center h-[200px]">
              <div>
                <img
                  src={img9}
                  alt=""
                  className="w-[60%] mb-[20px] ml-[25px]"
                />
                <h1>Акселераторов, инкубаторов</h1>
              </div>
            </div>
            <div className="shadow-md w-[320px] flex bg-[white] rounded-md justify-center pt-[50px] text-center h-[200px]">
              <div>
                <img
                  src={img10}
                  alt=""
                  className="w-[60%] mb-[20px] ml-[25px]"
                />
                <h1>Венчурных фонда</h1>
              </div>
            </div>
            <div className="shadow-md w-[320px] flex bg-[#1178B2] text-white rounded-md justify-center pt-[50px] text-center h-[200px]">
              <div>
                <img
                  src={img11}
                  alt=""
                  className="w-[60%] mb-[20px] ml-[25px]"
                />
                <h1>
                  Скачать отчет <br />
                  по рынку MENA
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] m-auto">
          <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
            Об акселераторе IT бизнеса
          </h1>
          <p className="text-[1.2rem] font-normal">
            Программа акселератора расчитана на 8 недель интенсивного онлайн
            курса с вебинарами приглашенных <br />
            экспертов по международным рынкам, разборами ваших идей и проектов{" "}
          </p>
          <div className="flex flex-wrap justify-between mt-[50px]">
            <div className="w-[300px] p-[60px_0px] text-center shadow-md  ">
              <img className="ml-[35%] mb-[20px]" src={img12} alt="" />
              <h1>Месяца обучения</h1>
            </div>
            <div className="w-[300px] p-[60px_0px] text-center shadow-md  ">
              <img className="ml-[35%] mb-[20px]" src={img13} alt="" />
              <h1>Приглашенные эксперты</h1>
            </div>
            <div className="w-[300px] p-[60px_0px] text-center shadow-md  ">
              <img className="ml-[35%] mb-[20px]" src={img14} alt="" />
              <h1>Персональный менеджер</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-center rounded-md mt-[60px] mb-[50px] h-[100vh] bg-black">
        <div className="text-white text-center flex flex-col items-center">
          <h1 className="text-[1.5rem] font-bold">
            Об акселерационной программе
          </h1>
          <img src={img15} alt="" className="mt-[30px]" />
        </div>
      </div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
          Программа акселератора
        </h1>
        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 1 :{" "}
              <span className="text-black">
                Тенденции и тренды современного мира
              </span>
            </div>
            <span className="text-gray-500">
              <img src={up} alt="" />
            </span>
          </div>
          <div className="p-4 bg-gray-100 text-gray-700">
            <p className="border-b-[1px] border-b-[black] h-[40px] mt-[20px]">
              Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов
              консалтинговых компаний
            </p>
            <p className="border-b-[1px] border-b-[black] h-[40px] mt-[20px]">
              Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки
            </p>
            <p className="border-b-[1px] border-b-[black] h-[40px] mt-[20px]">
              Что такое внутренние и внешние инновации? Как искать инновационные
              идеи?
            </p>
            <p className="text-blue-500 border-b-[1px] border-b-[black] h-[40px] mt-[20px]">
              9 видео роликов, вебинар с приглашенным экспертом
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 2{" "}
              <span className="text-black">
                {" "}
                Стартап подход к созданию международного IT продукта
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 3 :
              <span className="text-black">
                {" "}
                Бизнес моделирование и поиск Product Market Fit
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 4 :
              <span className="text-black">
                {" "}
                Определение рынка, поиск и исследование Целевой аудитории
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 5 :
              <span className="text-black">
                {" "}
                Что такое MVP и почему это важно{" "}
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 6 :
              <span className="text-black">
                {" "}
                Unit экономика и финансовое моделирование
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 7 :
              <span className="text-black">
                {" "}
                Что такое дорожная карта продукта?
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mb-2">
          <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
            <div>
              Модуль 8 :
              <span className="text-black">
                {" "}
                Документы дя международных инвесторов{" "}
              </span>
            </div>
            <span className="text-gray-500">
              <img src={down} alt="" />
            </span>
          </div>

          <div className="bg-white shadow-md rounded-lg mb-2">
            <div className="w-full flex justify-between items-center p-4 text-lg font-semibold text-blue-600">
              <div>
                Модуль 8 :
                <span className="text-black">
                  {" "}
                  Открытие юридического лица. Возможности для стартапов{" "}
                </span>
              </div>
              <span className="text-gray-500">
                <img src={down} alt="" />
              </span>
            </div>
          </div>
        </div>
        <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-[30px] p-[20px_40px]">
          Получить полную программу
        </button>
      </div>

      <div className="bgImg1234">
        <div className="max-w-[1100px] m-auto flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-[2.5rem]">
              Попадите на радары <br /> инвесторов и партнеров
            </h1>
            <p className="text-[white] font-normal">
              В результате прохождения обучения мы создадим <br />
              профили вашей компании на всех международных <br />
              скаутинговых площадках
            </p>
            <button className="bg-[#07AF91] p-[20px_40px] rounded-md text-white mt-[40px]">
              Записаться в акселератор
            </button>
          </div>
          <img src={img16} alt="" className="w-[50%]" />
        </div>
      </div>

      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
          Что вы получите в результате?
        </h1>

        <div className="flex flex-wrap justify-between">
          <Section_2
            img={img4}
            name="IT проекты на стадии идеи"
            description="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
          />
          <Section_2
            img={img5}
            name="Инновационный бизнес"
            description="Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
          />
          <Section_2
            img={img6}
            name="Корпорации"
            description="Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
          />
          <Section_2
            img={img17}
            name="Подписка на отчеты"
            description="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
          />
          <Section_2
            img={img18}
            name="Подписка на отчеты"
            description="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
          />
          <Section_2
            img={img19}
            name="Подписка на отчеты"
            description="Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
          />
        </div>
      </div>
      <div className="max-w-[1100px] m-auto flex flex-wrap justify-between">
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="flex flex-col justify-center p-[20px_0px] border-b-[1px] border-b-[gray] items-center ">
            <img src={img20} alt="PDF Icon" className="w-12 h-12" />
            <h2 className="text-center text-lg font-semibold mt-2">
              Анализ международных <br /> рынков
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Что входит в отчет?</h3>
            <ul className="text-gray-600 text-sm list-decimal list-inside mt-2 space-y-1">
              <li>Анализ конкурентов</li>
              <li>Анализ инвесторов</li>
              <li>Размеры рынка (TAM, SAM, SOM)</li>
              <li>Анализ СМИ</li>
              <li>Анализ запросов в сети интернет</li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold ">Готовность:</span> 7 раб. дней
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold">Язык:</span> рус. / англ.
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              {" "}
              <span className="font-semibold">Стоимость:</span>{" "}
              <span className="text-blue-600">$1 000</span>
            </p>
          </div>
          <button className="w-full bg-blue-500 text-white text-center py-2 rounded-lg mt-4 hover:bg-blue-600">
            Оставить заявку
          </button>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="flex flex-col justify-center p-[20px_0px] border-b-[1px] border-b-[gray] items-center ">
            <img src={img21} alt="PDF Icon" className="w-12 h-12" />
            <h2 className="text-center text-lg font-semibold mt-2">
              Упаковка стартапа под локальные рынки
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Что входит в отчет?</h3>
            <ul className="text-gray-600 text-sm list-decimal list-inside mt-2 space-y-1">
              <li>Анализ конкурентов</li>
              <li>Анализ инвесторов</li>
              <li>Размеры рынка (TAM, SAM, SOM)</li>
              <li>Анализ СМИ</li>
              <li>Анализ запросов в сети интернет</li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold ">Готовность:</span> 7 раб. дней
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold">Язык:</span> рус. / англ.
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              {" "}
              <span className="font-semibold">Стоимость:</span>{" "}
              <span className="text-blue-600">$1 000</span>
            </p>
          </div>
          <button className="w-full bg-blue-500 text-white text-center py-2 rounded-lg mt-4 hover:bg-blue-600">
            Оставить заявку
          </button>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="flex flex-col justify-center p-[20px_0px] border-b-[1px] border-b-[gray] items-center ">
            <img src={img22} alt="PDF Icon" className="w-12 h-12" />
            <h2 className="text-center text-lg font-semibold mt-2">
              Акселератор <br />
              вашего бизнеса
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Что входит в отчет?</h3>
            <ul className="text-gray-600 text-sm list-decimal list-inside mt-2 space-y-1">
              <li>Анализ конкурентов</li>
              <li>Анализ инвесторов</li>
              <li>Размеры рынка (TAM, SAM, SOM)</li>
              <li>Анализ СМИ</li>
              <li>Анализ запросов в сети интернет</li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold ">Готовность:</span> 7 раб. дней
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              <span className="font-semibold">Язык:</span> рус. / англ.
            </p>
            <p className="border-b-[1px] border-b-[gray] p-[10px_0px]">
              {" "}
              <span className="font-semibold">Стоимость:</span>{" "}
              <span className="text-blue-600">$1 000</span>
            </p>
          </div>
          <button className="w-full bg-blue-500 text-white text-center py-2 rounded-lg mt-4 hover:bg-blue-600">
            Оставить заявку
          </button>
        </div>
      </div>
      <div className="max-w-[1100px] m-auto mt-[60px]">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">
          Кто мы?
        </h1>
        <div className="flex justify-between items-center">
          <img src={img23} alt="" />
          <div>
            <p>
              <span className="text-blue-500">INNOMA.VC</span> - Международное
              аналитическое <br />
              агентство по запуску IT бизнеса на локальных рынках <br />
              регионов Азии, Ближнего Востока, Латинской <br />
              Америки, Африки. <br /> <br />
              Наша команда состоит из профессионалов своего <br />
              дела и основной нашей целью является помощь IT <br />
              компаниям получить необходимые знания и пакеты документов, <br />
              чтобы успешно запустить свой продукт <br />
              на международных рынках.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center shadow-xl rounded-md mt-[50px] p-[0px_30px]">
          <img src={img24} alt="" />
          <div className="text-[#585757]">
            <p>
              Всем привет!  Меня зовут Роман. Последние 6 лет я являюсь частью <br />
              инновационной экосистемы СНГ, прошел путь от проектного менеджера <br />
              до руководителя продукта по автоматизированному скаутингу и <br />
              скорингу стартапов. За 6 лет работы я увидел множество ошибок и <br />
              отсутствие ориентации акселерационных программ под запросы <br />
              стартапов. Все акселераторы выполнялись ради акселераторв и <br />
              выполнения КПЭ.
            </p>
            <p className="mt-[40px]"><span className="text-black">Роман Гайн</span> <br />
            Основатель INNOMA.VC</p>
          </div>
        </div>
        <img src={img25} className="mt-[50px] mb-[60px]" alt="" />
      </div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">Эксперты и трекеры программы</h1>
        <div className="flex justify-between">
          <div className="text-center text-[14px]">
            <img src={img26} alt="" />
            <h1 className="text-[1rem] font-bold">Юрий Ким</h1>
            <p>Проведение исследования целевой <br />
            аудитории позволит сформировать <br />
            Product market fit</p>
          </div>
          <div className="text-center text-[14px]">
            <img src={img27} alt="" />
            <h1 className="text-[1rem] font-bold">Эшли Абрамс</h1>
            <p>Проведение исследования целевой <br />
            аудитории позволит сформировать <br />
            Product market fit</p>
          </div>
          <div className="text-center text-[14px]">
            <img src={img28} alt="" />
            <h1 className=" text-[1rem] font-bold">Фатими Юсуф</h1>
            <p>Проведение исследования целевой <br />
            аудитории позволит сформировать <br />
          Product   market fit</p>
          </div>
          <div className="text-center text-[14px]">
            <img src={img29} alt="" />
            <h1 className="text-[1rem] font-bold">Майкл Донован</h1>
            <p>Проведение исследования целевой  <br />
            аудитории позволит сформировать <br />
          Product  market fit</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">Наши партнеры</h1>
        <img src={img30} alt="" />
      </div>
      <div className="section_bgImg">
        <div className="max-w-[1100px] m-auto z-10 relative">
          <div className="mt-[40px] pt-[40px]">
            <h1 className="text-white text-[2.5rem]  h-[130px] mt-[40px]  text-center font-bold">
            Мы создаем международное сообщество <br />
            экспертов и партнеров
            </h1>
          </div>
          <h1 className="text-[1.4rem] text-white mt-[30px] font-normal text-center">
          Если вы или ваш бизнес может быть полезен IT  командам при выходе <br />
          на международные рынки,  приглашем вас стать нашим партнером
          </h1>
          <div className="m-auto w-[20%]">
            <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-[30px] p-[20px_40px] flex">
            Стать партнером
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="font-bold text-[2rem] mb-[40px] text-[#1178B2]">Мероприятия и события</h1>
        <div className="flex flex-wrap justify-between ">
          <div className="shadow-md rounded-md w-[30%]">
            <img src={img31} alt="" />
            <h1 className="ml-[10px] mt-[10px] mb-[10px]">Новый отчет по MENA</h1>
            <p className="ml-[10px] mt-[10px] mb-[10px]">Аналитический отчет по рынкам  <br />
            Ближнего Востока (инвесторы, <br />
            объем раундов, ТОП сферы)</p>
            <p className="ml-[10px] mt-[10px] mb-[10px]">22.11.2022</p>
          </div>
          <div className="shadow-md rounded-md w-[30%]">
            <img src={img32} alt="" />
            <h1 className="ml-[10px] mt-[10px] mb-[10px]">Вебинар по особенностям  <br />
            рынков Ближнего Востока</h1>
            <p className="ml-[10px] mt-[10px] mb-[10px]">Поговорим с экспертами рынков  <br />
            в формате дискуссии</p>
            <p className="ml-[10px] mt-[10px] mb-[10px]">22.11.2022</p>
          </div>
          <div className="shadow-md rounded-md w-[30%]">
            <img src={img33} alt="" />
            <h1 className="ml-[10px] mt-[10px] mb-[10px]">Вебинар по особенностям <br />
            рынков Ближнего Востока</h1>
            <p className="ml-[10px] mt-[10px] mb-[10px]">Поговорим с экспертами рынков <br /> 
            в формате дискуссии</p>
            <p className="ml-[10px] mt-[10px] mb-[10px]">22.11.2022</p>
          </div>
        </div>
      </div>
      <div className="bgImg1234">
        <div className="max-w-[1100px] m-auto flex w-[100%] flex-wrap justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-[2.5rem]">
            Остались вопросы?
            </h1>
            <p className="text-[white] font-normal">
            Оставьте заявку и наша команда свяжется с вами
            </p>
            <div className="mt-[70px]">
              <p className="text-[white] font-normal">Или напишите нам:</p>
              <img src={img34} alt="" />
            </div>
          </div>
          <div className="w-[450px] h-[350px] rounded-md p-[10px_20px] bg-[white]">
      <TextField id="filled-basic" label="Имя" variant="filled" />
      <TextField id="filled-basic" label="Почта" variant="filled" sx={{marginTop:"20px",marginBottom:"20px"}} />
      <TextField id="filled-basic" label="+(971)" variant="filled"/>
      <button className="bg-[#07AF91] p-[20px_40px] rounded-md  text-white mt-[40px]">
              Записаться в акселератор
      </button>
          </div>
        </div>
      </div>
      <div>
      <div className="header_bgImg1">
        <div className="max-w-[1100px] m-auto pt-[25px] elative ">
          <div className="pt-[25px] z-10 relative flex items-center justify-between">
            <img src={img1} alt="" />
            <div className="text-white flex w-[40%] justify-between">
              <h1>Кто мы?</h1>
              <h1>Услуги</h1>
              <h1>Акселератор</h1>
              <h1>Новости</h1>
            </div>
            <p className="text-white"> Dubai, Single Business Tower 1503, Business Bay          <br />
            <span>Sales@innoma.vc</span></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
