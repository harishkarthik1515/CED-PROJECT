import React, { useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import { SiVectorlogozone } from "react-icons/si";
import {
  Pie,
  PieChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  LineChart,
  Line,
  Tooltip,
  Cell,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [genderData, setGenderData] = useState([]);
  const [checkedInStatusData, setCheckedInStatusData] = useState([]);
  const [registrationByDaysData, setRegistrationByDaysData] = useState([]);
  const [registrationByCitiesData, setRegistrationByCitiesData] = useState([]);

  const COLORS = ["#FFB700", "#000000"];

  const handleFileUpload = (event) => {
    setLoading(true); // Set loading state to true when file upload begins

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post("http://localhost:5000/upload_csv", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const { genderData, checkedInStatusData, registrationByDaysData, registrationByCitiesData } = response.data;
      setGenderData(genderData);
      setCheckedInStatusData(checkedInStatusData);
      setRegistrationByDaysData(registrationByDaysData);
      setRegistrationByCitiesData(registrationByCitiesData);
      setLoading(false); // Set loading state to false after data is fetched
    })
    .catch((error) => {
      console.error("Error uploading file: ", error);
      setLoading(false); // Set loading state to false if there's an error
    });
  };

  return (
    <div className="dashb-container">
      <div className="dashb-menu">
        <div className="logo-div">
          <SiVectorlogozone className="logo" />
        </div>
        <div className="prod-name">Event Manager</div>
        <div className="dashb-menu-items">
          <div className="dashb-menu-item">Dashboard</div>
          <div className="dashb-menu-item">Admin Sign in</div>
          <div className="dashb-menu-item">Admin Sign Up</div>
          <div className="dashb-menu-item">User Sign in</div>
          <div className="dashb-menu-item">User Sign Up</div>
          <input type="file" onChange={handleFileUpload} />
        </div>
      </div>
      <div className="dashb-main">
        <div className="dashb-header">
          <h2 className="dashb-head">Dashboard</h2>
          <div className="dashb-rest-comp">
            <div className="dashb-search">
              <CiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <div className="dashb-profile">
              <FaUserCircle className="profile-icon" />
            </div>
          </div>
        </div>
        <div className="dashb-body">
          <div className="numbers-cards">
            <div className="num-card" style={{ backgroundColor: "#FFB700" }}>
              <div className="num-title">Total Registrations</div>
              <h3 className="num-value">100</h3>
            </div>
            <div className="num-card" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="num-title">Todays Registrations</div>
              <h3 className="num-value">30</h3>
            </div>
            <div className="num-card" style={{ backgroundColor: "#FFB700" }}>
              <div className="num-title">Todays Revenue</div>
              <h3 className="num-value">$20K</h3>
            </div>
            <div className="num-card" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="num-title">Total Revenue</div>
              <h3 className="num-value">$500K</h3>
            </div>
          </div>
          <div className="charts-cards">
            <div className="chart-card">
              {loading ? (
                <div className="chart-loading">Loading Gender Data...</div>
              ) : (
                <BarChart width={450} height={260} data={genderData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Members" fill="#FFB700" />
                </BarChart>
              )}
              <h4 className="chart-label">Gender Data</h4>
            </div>
            <div className="chart-card">
              {loading ? (
                <div className="chart-loading">Loading Registrations by Days Data...</div>
              ) : (
                <AreaChart width={450} height={260} data={registrationByDaysData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="Registrations" stroke="#FFB700" fill="#FFB700" />
                </AreaChart>
              )}
              <h4 className="chart-label">Registrations by Days</h4>
            </div>
            <div className="chart-card">
              {loading ? (
                <div className="chart-loading">Loading Registrations by Cities Data...</div>
              ) : (
                <LineChart width={525} height={260} data={registrationByCitiesData}>
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="Registrations" stroke="#FFB700" />
                </LineChart>
              )}
              <h4 className="chart-label">Registrations by Cities</h4>
            </div>
          </div>
          <div className="dashb-data">
            <div className="piechart">
              {loading ? (
                <div className="chart-loading">Loading Checked-in Status Data...</div>
              ) : (
                <PieChart width={300} height={300}>
                  <Pie
                    data={checkedInStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    label
                  >
                    {checkedInStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              )}
              <h4 className="chart-label">Checked-in Status</h4>
            </div>
            <div className="user-data">
              <div className="user-head">
                <div className="user-title">Registered Users</div>
                <div className="time">
                  Week <FaAngleDown className="drop-icon" />
                </div>
              </div>
              <div className="user-category">
                <div id="selected-category" className="user-category-item">
                  All
                </div>
                <div id="not-selcat" className="user-category-item">
                  Active
                </div>
                <div id="not-selcat" className="user-category-item">
                  Inactive
                </div>
              </div>
              <div className="user-list">
                <div
                  className="marking"
                  style={{ backgroundColor: "#3F3E3E" }}
                ></div>
                <div className="user-name">Harish</div>
              </div>
              <div className="user-list">
                <div
                  className="marking"
                  style={{ backgroundColor: "#FFB700" }}
                ></div>
                <div className="user-name">Karthik</div>
              </div>
              <div className="user-list">
                <div
                  className="marking"
                  style={{ backgroundColor: "#3F3E3E" }}
                ></div>
                <div className="user-name">Maya</div>
              </div>
              <div className="user-list">
                <div
                  className="marking"
                  style={{ backgroundColor: "#FFB700" }}
                ></div>
                <div className="user-name">Uday</div>
              </div>
              <div className="user-list">
                <div
                  className="marking"
                  style={{ backgroundColor: "#FFB700" }}
                ></div>
                <div className="user-name">Kaira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
