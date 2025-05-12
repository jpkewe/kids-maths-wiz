import React from 'react';
import useSound from '../../hooks/useSound';
import { Button } from '../ui/button'; // Assuming button component path
import logo from '../../assets/images/kids-maths-wiz_logo.png'; // Assuming logo path

interface LoginPageProps {
  onEnter: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onEnter }) => {
  const playWelcomeSound = useSound('/src/assets/sounds/welcome_to_kids_maths_wiz.mp3');

  const handleEnterClick = () => {
    playWelcomeSound.play();
    onEnter();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Kids Maths Wiz Logo" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Kids Maths Wiz</h1>
      <Button onClick={handleEnterClick} className="px-8 py-4 text-xl">
        Enter
      </Button>
    </div>
  );
};

export default LoginPage;