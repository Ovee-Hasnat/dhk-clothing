import React from "react";
import Home from "../../routes/home/home";
import Shop from "../../routes/shop/shop";
import SignIn from "../../routes/Auth/sign-in";
import Checkout from "../../routes/checkout/checkout";

import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Body;
