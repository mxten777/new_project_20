import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserProfile, auth } from "../firebase";

export type UserProfile = {
  name: string;
  age: string;
  familyType: string;
  incomeLevel: string;
  region: string;
};

const initialProfile: UserProfile = {
  name: "",
  age: "",
  familyType: "",
  incomeLevel: "",
  region: "",
};

const familyTypes = ["1인가구", "부부", "가족", "한부모", "기타"];
const incomeLevels = ["저소득", "중간", "고소득"];
const regions = ["서울", "경기", "부산", "대구", "광주", "기타"];

export default function UserProfileForm({ onSubmit }: { onSubmit: (profile: UserProfile) => void }) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [submitted, setSubmitted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Firestore에서 프로필 불러오기 등은 추후 구현 가능

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setEditing(true);
  };

  const validate = () => {
    if (profile.name.trim().length < 2) return '이름은 2자 이상 입력하세요.';
    const ageNum = Number(profile.age);
    if (!profile.age || isNaN(ageNum) || ageNum < 0 || ageNum > 120) return '나이는 0~120 사이의 숫자여야 합니다.';
    if (!profile.familyType) return '가구 유형을 선택하세요.';
    if (!profile.incomeLevel) return '소득 수준을 선택하세요.';
    if (!profile.region) return '지역을 선택하세요.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setSubmitted(true);
    setEditing(false);
    const user = auth.currentUser;
    if (user) {
      try {
        await saveUserProfile(user.uid, profile);
        onSubmit(profile);
      } catch (error) {
        setError("프로필 저장 중 오류가 발생했습니다.");
        setSubmitted(false);
        return;
      }
    } else {
      setError("로그인 후 이용해 주세요.");
      setSubmitted(false);
      return;
    }
    setTimeout(() => setSubmitted(false), 2000);
  };

  const handleReset = () => {
    setProfile(initialProfile);
    setEditing(true);
    setError(null);
    // Firestore에서 삭제는 별도 구현 필요(선택)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto bg-white/95 p-8 rounded-2xl shadow-card space-y-7 mt-10 border border-border/70 animate-fade-in">
      {/* 상단 뒤로가기 버튼 */}
      <div className="mb-2 flex justify-between items-center">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-primary hover:text-primary-dark text-base font-semibold px-2 py-1 rounded transition focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          ← 뒤로가기
        </button>
      </div>
      <h2 className="text-2xl font-extrabold mb-6 text-center text-[#23272f] tracking-tight flex items-center justify-center gap-2">
        <span className="inline-block bg-primary-light text-primary text-xl font-bold px-3 py-1 rounded-full shadow-none">👤</span>
        사용자 정보 입력
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block mb-1 font-semibold text-gray-700">이름</label>
          <input name="name" value={profile.name} onChange={handleChange} placeholder="홍길동" className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white" required />
        </div>
        <div className="space-y-1">
          <label className="block mb-1 font-semibold text-gray-700">나이</label>
          <input name="age" type="number" value={profile.age} onChange={handleChange} placeholder="예) 35" min="0" className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white" required />
        </div>
        <div className="space-y-1">
          <label className="block mb-1 font-semibold text-gray-700">가구 유형</label>
          <select name="familyType" value={profile.familyType} onChange={handleChange} className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white" required>
            <option value="">선택</option>
            {familyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="block mb-1 font-semibold text-gray-700">소득 수준</label>
          <select name="incomeLevel" value={profile.incomeLevel} onChange={handleChange} className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white" required>
            <option value="">선택</option>
            {incomeLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="block mb-1 font-semibold text-gray-700">지역</label>
          <select name="region" value={profile.region} onChange={handleChange} className="w-full border border-border/60 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary text-base transition bg-white" required>
            <option value="">선택</option>
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <button type="submit" className="flex-1 bg-primary text-white py-2.5 rounded-lg hover:bg-primary-dark font-bold text-base shadow transition-all duration-150">{editing ? '저장하기' : '수정하기'}</button>
        <button type="button" onClick={handleReset} className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-bold text-base shadow transition hover:bg-gray-200">초기화</button>
      </div>
      {error && <div className="text-red-600 text-center font-semibold mt-2 animate-shake">{error}</div>}
      {submitted && (
        <div className="text-green-600 text-center font-semibold mt-2 animate-pulse">저장되었습니다!</div>
      )}
      <div className="text-center text-gray-400 text-xs mt-3">입력하신 정보는 오직 맞춤형 복지 추천에만 사용됩니다.</div>
    </form>
  );
}
