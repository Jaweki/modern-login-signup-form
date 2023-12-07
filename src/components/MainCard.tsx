import { useState } from "react";
import InfoBanner from "./InfoBanner";
import InputForm from "./InputForm";

const MainCard = () => {
  const [action, setAction] = useState("signIn");
  return (
    <div className="w-[65%] h-[65%] rounded-xl bg-white flex relative">
      <InputForm action={action} />
      <InfoBanner action={action} setAction={setAction} />
    </div>
  );
};

export default MainCard;
