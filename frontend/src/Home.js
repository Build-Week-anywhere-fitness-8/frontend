import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterForm from "./registrationForm";

function Home() {
  return (
    <div>
      <h3>Welcome Build Week Crew</h3>
      <RegisterForm />
    </div>
  );
}
export default Home;
