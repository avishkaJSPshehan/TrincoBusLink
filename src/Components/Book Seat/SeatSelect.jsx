import React, { useEffect, useState } from "react";
import "./SeatSelect.css";
import Steering from "../../Assets/steering.jpg";

const SeatButton = ({id, handleChange, seatMap}) => {
  let btnCls = ""
  let disabled = false
  if(seatMap && seatMap[id].status){
    if(seatMap[id].status === "selected")
      btnCls = "selected"
    else if(seatMap[id].status === "processing"){
      btnCls = "processing"
    }
    else if(seatMap[id].status === "booked"){
      btnCls = "booked"
    }
  }
  return <button className={`seat ${btnCls}`} 
          onClick={()=>handleChange(id)}
          disabled={disabled}
          >
            {id}
        </button>;
};

const SeatSelect = () => {
  const [seatMap, setSeatMap] = useState(
    {
      1: { status: "free" },
      2: { status: "free" },
      3: { status: "free" },
      4: { status: "free" },
      5: { status: "free" },
      6: { status: "processing" },
      7: { status: "free" },
      8: { status: "free" },
      9: { status: "processing" },
      10: { status: "free" },
      11: { status: "free" },
      12: { status: "free" },
      13: { status: "free" },
      14: { status: "free" },
      15: { status: "free" },
      16: { status: "free" },
      17: { status: "free" },
      18: { status: "booked" },
      19: { status: "free" },
      20: { status: "free" },
      21: { status: "free" },
      22: { status: "free" },
      23: { status: "free" },
      24: { status: "free" },
      25: { status: "free" },
      26: { status: "free" },
      27: { status: "free" },
      28: { status: "free" },
      29: { status: "free" },
      30: { status: "free" },
      31: { status: "free" },
      32: { status: "free" },
      33: { status: "free" },
      34: { status: "free" },
      35: { status: "free" },
      36: { status: "free" },
      37: { status: "free" },
      38: { status: "free" },
      39: { status: "free" },
      40: { status: "free" },
      41: { status: "free" },
      42: { status: "free" },
      43: { status: "free" },
      44: { status: "free" },
      45: { status: "free" },
      46: { status: "free" },
      47: { status: "free" },
      48: { status: "free" },
      49: { status: "free" },
      50: { status: "free" },
      51: { status: "free" },
      52: { status: "free" },
      53: { status: "free" },
      54: { status: "free" }
    }
  );

  const [selectedSeats, setSelecteSeats] = useState([])

  const handleChange = (id) => {
    if(["processing", "booked"].includes(seatMap[id].status)) return
    let state = ""
    if(seatMap[id].status === "free"){
      state = "selected"
      selectedSeats.push(id)
      setSelecteSeats(selectedSeats)
    }
    else if(seatMap[id].status === "selected"){
      state = "free"
      setSelecteSeats(selectedSeats.filter(seat => seat !== id))
    }     
    setSeatMap(prev => ({...prev, [id]:{status:state}}))

  };

  const rows = [];
  const seatRow = (row) => {
    if (row === 10) {
      return (
        <div className="seat-row">
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 - 1} id={row * 5 - 1} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5} id={row * 5} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 1} id={row * 5 + 1} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 2} id={row * 5 + 2} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 3} id={row * 5 + 3} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 4} id={row * 5 + 4} />
        </div>
      );
    } else if (row === 9) {
      return (
        <div className="seat-row">
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="empty"></div>
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 1} id={row * 5 + 1} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 2} id={row * 5 + 2} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 3} id={row * 5 + 3} />
        </div>
      );
    } else {
      return (
        <div className="seat-row">
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 1} id={row * 5 + 1} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 2} id={row * 5 + 2} />
          <div className="empty"></div>
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 3} id={row * 5 + 3} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 4} id={row * 5 + 4} />
          <SeatButton handleChange={handleChange} seatMap={seatMap} key={row * 5 + 5} id={row * 5 + 5} />
        </div>
      );
    }
  };

  const renderSeats = () => {
    for (let i = 0; i < 11; i++) {
      rows.push(seatRow(i));
    }
  };

  const handleProceed = () =>{
    console.log(selectedSeats)
  }

  renderSeats()

  return (
    <div className="select-container">
      <div className="bus-layout">
        <div className="driver"><img src={Steering} alt="Driver" /></div>
        <div className="bus-seats">{rows}</div>
      </div>
      <div className="submit-section">
        <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  );
};

export default SeatSelect;
