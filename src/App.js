import { useEffect, useState } from 'react';
import sky from './sky.jpg'
import './App.css';

function App() {


  const [mousePos, setMousePos] = useState(null)
  const [polygonHover, setPolygonHover] = useState(false)
  const [data, setData] = useState(null)

  useEffect(()=>{
  document.addEventListener("mousemove", onMouseUpdate);

  },[])
   const onMouseUpdate = (e) => {
     setMousePos({ x: e.pageX, y: e.pageY });
   };


  useEffect(()=>{
      const textBlock = document.querySelector(".text");
    if(polygonHover){
      textBlock.classList.add("show");
      textBlock.style.top = `${mousePos.y / 1.2 - 120}px`;
      textBlock.style.left = `${mousePos.x / 1.2 - 200 + 100}px`;
      
    }
    else{
      textBlock.classList.remove('show')
    }
  },[polygonHover, mousePos])

 
  return (
    <div className="App">
      <div className="text">{data}</div>

      <img src={sky} className="img" />

      <svg
        style={{ transform: "scale(1.2)" }}
        width="752px"
        height="655px"
        viewBox="0 0 752 655"
        version="1.1"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          fill-opacity="0.349999994"
        >
          <g
            transform="translate(41.000000, 94.000000)"
            fill="#3D96E3"
            stroke="#4496DC"
            stroke-width="2"
          >
            <polygon
              onMouseMove={(e) => {
                setPolygonHover(true);
                setData(e.target.getAttribute("data-name"));
              }}
              onMouseLeave={() => setPolygonHover(false)}
              className="polygon"
              data-sold="true"
              data-href="/sky/apartments/aleksandr-belyaev/section-first/"
              data-number="5"
              data-name="Александр Беляев"
              points="96 376.30602 0 30.3060198 57 9.30601981 57 6.30601981 75 0.306019805 88 6.30601981 95 4.30601981 164 40.3060198 169 38.3060198 263 76.3060198 290 419.30602 222 464.30602"
            ></polygon>
            <polygon
              onMouseMove={(e) => {
                setPolygonHover(true);
                setData(e.target.getAttribute("data-name"));
              }}
              onMouseLeave={() => setPolygonHover(false)}
              className="polygon"
              data-sold="true"
              data-href="/sky/apartments/kir-bulychev/section-first/"
              data-number="1"
              data-name="Кир Булычев"
              points="408.907424 474.192549 408 229.918161 459.994891 197.30602 586.081837 252.651378 557.566345 494.349152 514.968904 534"
            ></polygon>
            <polygon
              onMouseMove={(e) => {
                setPolygonHover(true);
                setData(e.target.getAttribute("data-name"));
              }}
              onMouseLeave={() => setPolygonHover(false)}
              className="polygon"
              data-sold="true"
              data-href="/sky/apartments/zhyul-vern/section-first/"
              data-number="2"
              data-name="Жюль Верн"
              points="444 206.392275 445.734251 123.762523 489.53549 99.3060198 600.566277 139.72238 586.369987 252.406737 459.457602 196.633887"
            ></polygon>
            <polygon
              onMouseMove={(e) => {
                setPolygonHover(true);
                setData(e.target.getAttribute("data-name"));
              }}
              onMouseLeave={() => setPolygonHover(false)}
              className="polygon"
              data-sold="true"
              data-href="/sky/apartments/rey-bredberi/section-first/"
              data-number="3"
              data-name="Рэй Брэдбери"
              points="467 110.810546 468.762935 46.7207678 507.782362 27.3060198 605.314066 58.9946346 596.137497 137.368656 489.054386 98.3221267"
            ></polygon>
            <polygon
              onMouseMove={(e) => {
                setPolygonHover(true);
                setData(e.target.getAttribute("data-name"));
              }}
              onMouseLeave={() => setPolygonHover(false)}
              className="polygon"
              data-sold="true"
              data-href="/sky/apartments/ayzek-azimov/section-first/"
              data-number="4"
              data-name="Айзек Азимов"
              points="255 72.7569281 348.977732 31.1606648 348.977732 28.4220772 360.68393 23.063971 364.723911 24.3837088 385.741045 15.3060198 408.58121 23.063971 411.55551 21.1773702 420.289664 24.3837088 422.680442 23.063971 432.065872 26.0315215 431.567338 48.4887379 430.335105 48.9412048 430.335105 68.2754956 429.215919 68.7634832 429.215919 87.5821591 427.842732 88.3526215 427.842732 106.306113 426.960069 106.887413 426.960069 126.040999 426.150703 126.585933 426.150703 143.192454 424.703373 143.922603 424.703373 160.523769 423.630984 161.136361 423.630984 177.714973 422.680442 178.325874 422.680442 194.872349 421.830983 195.43166 421.830983 205.27514 421.830983 216.543254 281.467694 302.611708 263.288411 76.349845"
            ></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default App;
