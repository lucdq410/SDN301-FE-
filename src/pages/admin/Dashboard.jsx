import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../layouts";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-5 ">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/mv/movies" className="card bg-primary text-white p-5">
          <h2 className="text-xl font-bold">Quản lý phim</h2>
          <p>Thêm, chỉnh sửa và xóa phim.</p>
        </Link>
        <div className="card bg-secondary text-white p-5">
          <h2 className="text-xl font-bold">Thống kê</h2>
          <p>Xem số liệu thống kê về người dùng, phim và doanh thu.</p>
        </div>
        {/* Thêm các liên kết hoặc card khác cho các chức năng khác của admin */}
      </div>
    </div>
  );
};

export default Dashboard;
