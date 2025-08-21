import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (err: any) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">로그인</h2>
      <form onSubmit={handleSubmit} className="max-w-sm w-full bg-white/95 p-8 rounded-2xl shadow-card space-y-6 border border-border/70">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white"
          required
        />
        {error && <div className="text-red-600 text-center font-semibold animate-shake">{error}</div>}
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark font-bold text-lg shadow transition-all duration-150 mb-3">로그인</button>
        <button type="button" onClick={() => navigate("/signup")}
          className="w-full bg-accent-yellow text-primary py-3 rounded-lg font-bold text-lg shadow-md transition hover:bg-yellow-200 border-2 border-primary">
          회원가입
        </button>
      </form>
    </div>
  );
}
