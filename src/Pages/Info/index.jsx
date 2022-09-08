import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./Info.module.scss";

const Info = () => {
    return (
        <>
            <Header />{" "}
            <div className={style.info}>
                <div className={style.container}>
                    <div>
                        <img
                            src="https://sun9-49.userapi.com/impg/JiuXeAZVs3sF2vpYOJO8T5cVQZJYKOZDZuHmrw/nrhIcYcw1tY.jpg?size=2560x1920&quality=96&sign=bf18eef692eb182fa4ba5c9fcfdf309e&type=album"
                            alt=""
                        />
                    </div>
                    <div>
                        Роскошь изысканных материалов, отточенное годами высокое
                        мастерство ручной работы и любовь к процессу от первого
                        до последнего стежка - всё это позволяет нам создавать
                        утончённые, элегантные и обладающие характером
                        аксессуары из кожи. Каждое изделие мастера Lerme
                        изготавливают вручную в лаборатории бренда, выводя
                        ремесло на уровень искусства. Каждый член команды Lerme
                        - уникальный человек, мечтатель с открытым сердцем,
                        бесстрашный изобретатель и искусный художник. Слово
                        lerme не имеет перевода ни в одном языке. В нашем
                        распоряжении были все алфавиты мира и представление о
                        том, как красота могла бы звучать. Мы предлагаем вам
                        услышать в Lerme что-то своё. Не имеет значения, на
                        каком языке вы говорите. Lerme рождён в России. И мы
                        хотим говорить со всем миром на языке красоты и
                        уважения.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Info;
