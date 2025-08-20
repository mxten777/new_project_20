import UserProfileForm, { type UserProfile } from "../components/UserProfileForm";
import { useState } from "react";
import Toast from "../components/Toast";

export default function ProfilePage() {
  const [toast, setToast] = useState<{ show: boolean; message: string; type?: 'success' | 'error' | 'info' }>({ show: false, message: '' });

  const handleProfileSubmit = (profile: UserProfile) => {
    setToast({ show: true, message: '프로필이 저장되었습니다!', type: 'success' });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">프로필 입력</h2>
      <UserProfileForm onSubmit={handleProfileSubmit} />
      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
}
