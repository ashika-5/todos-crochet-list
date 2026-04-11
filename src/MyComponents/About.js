import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const getInitialOrders = () => {
    const saved = localStorage.getItem("crochet_orders");
    return saved ? JSON.parse(saved) : [];
  };

  const [orders, setOrders] = useState(getInitialOrders);
  const [newOrderTitle, setNewOrderTitle] = useState("");
  const [newOrderDesc, setNewOrderDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("crochet_orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = () => {
    if (!newOrderTitle) return alert("Please enter order title!");

    const newOrder = {
      id: Date.now(),
      title: newOrderTitle,
      desc: newOrderDesc || "No description provided",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Pending", // default status
    };

    setOrders([newOrder, ...orders]);
    setNewOrderTitle("");
    setNewOrderDesc("");
  };

  const toggleStatus = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status: order.status === "Pending" ? "Completed" : "Pending",
            }
          : order,
      ),
    );
  };

  const deleteOrder = (id) => {
    if (window.confirm("Delete this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-hero">🧶</div>
        <h2 className="about-title">My Crochet Orders</h2>
        <p className="about-body">
          Track all the orders you've received. Add new orders, mark them as
          completed, and keep everything organised 💕
        </p>

        {/* Add New Order Form */}
        <div className="add-order-section">
          <h3>Add New Order</h3>
          <input
            type="text"
            placeholder="Order Title (e.g. Kuromi Plushie)"
            value={newOrderTitle}
            onChange={(e) => setNewOrderTitle(e.target.value)}
            className="order-input"
          />
          <textarea
            placeholder="Description / Customer notes..."
            value={newOrderDesc}
            onChange={(e) => setNewOrderDesc(e.target.value)}
            className="order-textarea"
            rows={3}
          />
          <button onClick={addOrder} className="btn-add-order">
            Add Order 🌸
          </button>
        </div>

        {/* Orders List */}
        <div className="orders-list">
          {orders.length === 0 ? (
            <p className="empty-orders">
              No orders yet. Add your first order above! ✨
            </p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className={`order-card ${order.status === "Completed" ? "order-completed" : ""}`}
              >
                <div className="order-header">
                  <h4>{order.title}</h4>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="order-desc">{order.desc}</p>

                <div className="order-meta">
                  <span>📅 {order.date}</span>
                  <span>⏰ {order.time}</span>
                </div>

                <div className="order-actions">
                  <button
                    onClick={() => toggleStatus(order.id)}
                    className="btn-toggle"
                  >
                    Mark as{" "}
                    {order.status === "Pending" ? "Completed" : "Pending"}
                  </button>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <p className="about-sub">Made with love for crochet enthusiasts 💕</p>
      </div>
    </div>
  );
};

export default About;
