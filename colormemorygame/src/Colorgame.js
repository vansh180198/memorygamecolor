import React, { useEffect, useState } from "react";

const Colorgame = ({ colors }) => {
  const [colorsdata, setcolorsdata] = useState([]);
  const [pickedcolor, setpickedcolor] = useState("");
  const [pickedid, setpickedid] = useState([]);
  const [cnt, setcnt] = useState(0);

  useEffect(() => {
    shuffleAndResetColors();
  }, []);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function shuffleAndResetColors() {
    const shuffledColors = shuffleArray([...colors]).map((color) => ({
      ...color,
      status: false,
    }));
    setcolorsdata(shuffledColors);
  }

  function handleclick(colorpickedid, colorpicked) {
    const alreadyPicked = pickedid.includes(colorpickedid);
    if (alreadyPicked) return;

    if (pickedcolor === "") {
      const updatedColors = colorsdata.map((color) => {
        if (color.id === colorpickedid) {
          color.status = true;
          setpickedcolor(color.color);
          setpickedid((prev) => [...prev, color.id]);
        }
        return color;
      });
      setcnt((prev) => prev + 1);
      setcolorsdata(updatedColors);
    } else {
      if (pickedcolor === colorpicked) {
        if (cnt === colors.length - 1) {
          alert("You Won!!!");
          shuffleAndResetColors();
          resetState();
        } else {
          const updatedColors = colorsdata.map((color) => {
            if (color.id === colorpickedid) {
              color.status = true;
              setpickedid((prev) => [...prev, color.id]);
            }
            return color;
          });
          setcolorsdata(updatedColors);
          setcnt((prev) => prev + 1);
          setpickedcolor("");
        }
      } else {
        const resetColors = colorsdata.map((color) => ({
          ...color,
          status: false,
        }));
        setcolorsdata(resetColors);
        resetState();
      }
    }
  }

  function resetState() {
    setpickedcolor("");
    setpickedid([]);
    setcnt(0);
  }

  function resethandle() {
    shuffleAndResetColors();
    resetState();
  }

  return (
    <div className="colorgame-container">
      <div className="colorset">
        {colorsdata.map((cell) => (
          <div
            key={cell.id}
            className="cell"
            onClick={() => handleclick(cell.id, cell.color)}
            style={{
              backgroundColor: cell.status ? cell.color : "lightgray",
            }}
          ></div>
        ))}
      </div>
      <div className="reset-container">
        <button className="reset" onClick={resethandle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Colorgame;
