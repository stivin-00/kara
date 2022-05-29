import React from "react";
import "./watchLaterItem.scss";
import {
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WatchLaterItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <Link>
      <div
        className="listItemw"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item?.imgSm} alt="" />
        {isHovered && (
          <>
            <Link to={{ pathname: "/watch", movie: item }}>
              <video src={item.trailer} autoPlay={true} loop />
            </Link>
            <div className="itemInfo">
              <div className="icons">
                <Link to={{ pathname: "/watch", movie: item }}>
                  <div class="tooltip">
                    <PlayArrow className="icon" />
                    <span class="tooltiptext">watch</span>
                  </div>
                </Link>
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{item.duration}</span>
                <span className="limit">{item.limit}</span>
                <span>{item.year}</span>
              </div>
              <div className="desc">{item.desc}</div>
              <div className="genre">{item.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
