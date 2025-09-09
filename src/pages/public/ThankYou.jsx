// src/pages/public/ThankYou.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to Home
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="text-gray-300">
          Your order has been placed successfully.  
          You’ll be redirected to the homepage shortly.
        </p>
      </div>
    </div>
  );
}
