"use client";
import { useEffect, useState } from "react";
import { getSocket } from "../../lib/socketClient";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = getSocket();

    // Server should emit 'notifications' on connect and after changes
    socket.on("notifications", (data) => {
      setNotifications(data);
    });

    // Optional: server may send single notification events
    socket.on("notification", (n) => {
      setNotifications(prev => [n, ...prev]);
    });

    return () => {
      socket.off("notifications");
      socket.off("notification");
    };
  }, []);

  const markRead = (id) => {
    const socket = getSocket();
    socket.emit("mark-read", id);
    // locally optimistically update:
    setNotifications(prev => prev.map(n => n.id === id ? {...n, read: true} : n));
  };

  return (
    <div className="p-6 mt-14 text-black">
      <h2 className="text-2xl mb-4">Notifications</h2>
      <ul>
        {notifications.length === 0 && <li>No notifications yet</li>}
        {notifications.map(n => (
          <li key={n.id} className={`p-2 mb-2 rounded ${n.read ? 'bg-gray-100' : 'bg-blue-50'}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">{n.message}</p>
                <p className="text-xs text-gray-500">{new Date(n.timestamp).toLocaleString()}</p>
              </div>
              {!n.read && <button onClick={() => markRead(n.id)} className="text-sm text-blue-600">Mark read</button>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
