import React, { useState } from 'react';

function Figury() {
  const [figure, setFigure] = useState('');
  const [data, setData] = useState({
    radius: '',
    side: '',
    base: '',
    height: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const calculateArea = () => {
    let area = 0;

    switch (figure) {
      case 'circle':
        const radius = parseFloat(data.radius);
        if (isNaN(radius)) return;
        area = Math.PI * radius * radius;
        break;
      case 'square':
        const side = parseFloat(data.side);
        if (isNaN(side)) return;
        area = side * side;
        break;
      case 'rectangle':
        const { base, height } = data;
        const b = parseFloat(base);
        const h = parseFloat(height);
        if (isNaN(b) || isNaN(h)) return;
        area = b * h;
        break;
      case 'triangle':
        const { base: triangleBase, height: triangleHeight } = data;
        const tb = parseFloat(triangleBase);
        const th = parseFloat(triangleHeight);
        if (isNaN(tb) || isNaN(th)) return;
        area = (tb * th) / 2;
        break;
      default:
        return;
    }

    setResult(area);
  };

  return (
    <>
      <h1 className="text-center mt-5">Oblicz pole wybranej figury</h1>
      <div className="container w-50">
        <select
          className="form-select mt-5 p-2 mx-auto"
          onChange={(e) => setFigure(e.target.value)}
          value={figure}
        >
          <option value="">Wybierz figurę</option>
          <option value="circle">Koło</option>
          <option value="square">Kwadrat</option>
          <option value="rectangle">Prostokąt</option>
          <option value="triangle">Trójkąt</option>
        </select>

        {figure === 'circle' && (
          <div>
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="radius"
              placeholder="Promień"
              value={data.radius}
              onChange={handleChange}
            />
          </div>
        )}
        {figure === 'square' && (
          <div>
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="side"
              placeholder="Długość boku"
              value={data.side}
              onChange={handleChange}
            />
          </div>
        )}
        {figure === 'rectangle' && (
          <div>
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="base"
              placeholder="Podstawa"
              value={data.base}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="height"
              placeholder="Wysokość"
              value={data.height}
              onChange={handleChange}
            />
          </div>
        )}
        {figure === 'triangle' && (
          <div>
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="base"
              placeholder="Podstawa"
              value={data.base}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2 p-2 mx-auto"
              type="number"
              name="height"
              placeholder="Wysokość"
              value={data.height}
              onChange={handleChange}
            />
          </div>
        )}

        <button
          className="btn btn-outline-secondary text-center mt-2 p-2 mx-auto w-100"
          onClick={calculateArea}
        >
          Oblicz pole
        </button>

        <p className="fs-2 mx-auto text-center mt-5 w-100">
          {result !== null && <div>Pole to: {result.toFixed(2)}cm²</div>}
        </p>
      </div>
    </>
  );
}

export default Figury;
