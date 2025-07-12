import React, { useState } from "react";

// Dummy data for notifications, feedback, and ratings
const dummyNotifications = [
  { id: 1, message: "Order #1234 placed for your product 'Handmade Vase'." },
  { id: 2, message: "Order #1235 placed for your product 'Wooden Frame'." },
];

const dummyFeedback = [
  { id: 1, customer: "Alice", comment: "Beautiful work!", rating: 5 },
  {
    id: 2,
    customer: "Bob",
    comment: "Fast delivery, nice quality.",
    rating: 4,
  },
];

export default function SellerDashboard() {
  const [profile, setProfile] = useState({
    name: "",
    work: "",
    description: "",
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1>Seller Dashboard</h1>

      {/* Profile Section */}
      <section
        style={{
          marginBottom: 32,
          border: "1px solid #ccc",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <h2>Profile</h2>
        {editing ? (
          <div>
            <label>
              Name:{" "}
              <input name="name" value={profile.name} onChange={handleChange} />
            </label>
            <br />
            <label>
              Related Work:{" "}
              <input name="work" value={profile.work} onChange={handleChange} />
            </label>
            <br />
            <label>
              Description:{" "}
              <textarea
                name="description"
                value={profile.description}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {profile.name || "Not set"}
            </p>
            <p>
              <strong>Related Work:</strong> {profile.work || "Not set"}
            </p>
            <p>
              <strong>Description:</strong> {profile.description || "Not set"}
            </p>
            <button onClick={handleEdit}>Edit Profile</button>
          </div>
        )}
      </section>

      {/* Notifications Section */}
      <section
        style={{
          marginBottom: 32,
          border: "1px solid #ccc",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <h2>Order Notifications</h2>
        {dummyNotifications.length === 0 ? (
          <p>No notifications.</p>
        ) : (
          <ul>
            {dummyNotifications.map((notif) => (
              <li key={notif.id}>{notif.message}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Feedback & Ratings Section */}
      <section
        style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}
      >
        <h2>Customer Feedback & Ratings</h2>
        {dummyFeedback.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul>
            {dummyFeedback.map((fb) => (
              <li key={fb.id}>
                <strong>{fb.customer}:</strong> "{fb.comment}"<br />
                Rating: {"★".repeat(fb.rating)}
                {"☆".repeat(5 - fb.rating)}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
