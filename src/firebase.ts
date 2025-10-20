import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 회원가입
export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// 로그인
export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 로그아웃
export function logOut() {
  return signOut(auth);
}

// Firestore에 사용자 프로필 저장
export async function saveUserProfile(uid: string, profile: any) {
  await setDoc(doc(db, 'users', uid), profile);
}
