import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// import { getVideoList } from
export default function Video({}) {
  const { id } = useParams();
  console.log(id);

  return <div>Single video card</div>;
}
