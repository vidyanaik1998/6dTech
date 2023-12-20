import { useState } from "react";
import "./Header.css";
import {
  HomeOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  QrcodeOutlined,
  DollarOutlined,
  FileTextOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header ">
      <div className="d-flex gap-12">
        <HomeOutlined className="header-icon d-flex " />
        <p className="title">Grave sites Management</p>
      </div>
      <div className="d-flex gap-30 header-list">
        <div className="d-flex gap-12 maintain">
          <QrcodeOutlined />
          <p className="title">Maintain</p>
        </div>
        <div className="d-flex gap-12">
          <DollarOutlined />
          <p>Payments</p>
        </div>
        <div className="d-flex gap-12">
          <FileTextOutlined />
          <p>Reports</p>
        </div>
      </div>
      <div className="d-flex gap-30">
        <div className="d-flex gap-30 header-list">
          <SearchOutlined />
          <SettingOutlined />
          <QuestionCircleOutlined />
          <div className="header-icon d-flex ">VN</div>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="d-flex gap-12">
          <div className="profile">
            <p>Vidya Naik</p>
            <p>Developer</p>
          </div>
          <DownOutlined />
          {isOpen && (
            <div className="profile-dropdown">
              <p>Vidya Naik</p>
              <p>Developer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
