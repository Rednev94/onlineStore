import React from "react";
import style from "./Info.module.scss";

const Info = () => {
    return (
        <div className={style.info}>
            <div className={style.container}>
                <img
                    className={style.image}
                    src="img/LeatherMaster.jpg"
                    alt="Leather Master"
                />
                <div className={style.infoText}>
                    <p>
                        Little King Goods - небольшая мастерская, основанная в
                        2016 году и стремящаяся производить изделия из кожи
                        ручной работы самого высокого качества, насколько это
                        возможно. Все наши товары изготавливаются одним
                        мастером.
                    </p>
                    <p>
                        Я всегда был очарован дизайном и работой руками.
                        Маленьким мальчиком я часто "помогал" своему отцу с
                        некоторыми проектами по ремонту. Несмотря на то, что я
                        часто мешал его работе, он подпитывал мою любовь к
                        работе и строительству своими руками. Способность
                        создать концепцию и довести ее до конечного продукта -
                        это чувство, не похожее ни на одно другое. Это
                        заставляет меня оживать. В коже есть что-то особенное,
                        что просто очаровывает меня. Её грубость и
                        приземленность, запах, ощущение, звук, который она
                        издает, когда вы её раскатываете, или звук, который она
                        издает, когда лезвие проходит сквозь нее. Это заводит
                        меня каждый раз.
                    </p>
                    <p>
                        Я люблю простые вещи в жизни, и я думаю, что это
                        проявляется в моей работе. Мои проекты очень простые,
                        чистые и прочные, но аккуратные. Я черпаю много
                        вдохновения в природе и это воплощается в моей работе.
                        Мне нравятся несколько незавершенные и нерафинированные
                        вещи, которые прекрасны сами по себе.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Info;
