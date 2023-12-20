import { useState } from "react";
import "./Payment.css";
import { AlertOutlined, UserOutlined, SaveOutlined } from "@ant-design/icons";

function Payment() {
  const initialdata = [
    {
        id:0 ,
      title: "Grave site",
      icon: <AlertOutlined />,
      content: "01-1001-05.0",
    },
    {
        id:1 ,
      title: "Owner",
      icon: <UserOutlined />,
      content: "Lorraine & Russ stewaart",
    },
    {
        id:2 ,
      title: "Person buried",
      icon: <SaveOutlined />,
      content: "Edgar steward",
    },
  ];

  const [data, setData] = useState(initialdata);
  return (
    <div className="payment-section">
      <h2 className="payment-heading">Create Payment</h2>
      {data.map((item)=>{
        return(
            <div key={item.id} className="payment-container">
            <p className="m-auto">{item.title}</p>
            <div className="payment-title">
             {item.icon}
              <p className="m-auto">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Payment;
