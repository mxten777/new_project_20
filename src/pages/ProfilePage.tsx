import UserProfileForm, { type UserProfile } from "../components/UserProfileForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

export default function ProfilePage() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type?: 'success' | 'error' | 'info' }>({ show: false, message: '' });
  const navigate = useNavigate();

  const handleProfileSubmit = (_profile: UserProfile) => {
    setToast({ show: true, message: '프로필이 저장되었습니다!', type: 'success' });
    setTimeout(() => {
      navigate('/recommend');
    }, 600); // 토스트 UX 후 이동
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-4 py-8 md:py-16 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-blue-700 text-center">프로필 입력</h2>
      <UserProfileForm onSubmit={handleProfileSubmit} />
      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
}
