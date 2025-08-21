import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../firebase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await signUp(email, password);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err: any) {
      setError("이미 가입된 이메일이거나 비밀번호가 약합니다.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">회원가입</h2>
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
          placeholder="비밀번호 (6자 이상)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white"
          required
        />
        {error && <div className="text-red-600 text-center font-semibold animate-shake">{error}</div>}
        {success && <div className="text-green-600 text-center font-semibold animate-pulse">회원가입 성공! 로그인 페이지로 이동합니다.</div>}
        <button type="submit" className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary-dark font-bold text-base shadow transition-all duration-150">회원가입</button>
        <button type="button" onClick={() => navigate("/login")}
          className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-bold text-base shadow transition hover:bg-gray-200 mt-2">
          로그인
        </button>
      </form>
    </div>
  );
}
