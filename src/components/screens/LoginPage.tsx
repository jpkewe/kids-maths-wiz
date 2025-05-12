import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from '../../hooks/useSound';
import logo from '../../assets/images/kids-maths-wiz_logo.png';
import { Button } from '../ui/button'; // Assuming a button component exists

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const playWelcomeSound = useSound('/assets/sounds/welcome_to_kids_maths_wiz.mp3'); // Need to create this sound file

  const handleEnterClick = () => {
    playWelcomeSound.play();
    // Assuming the homepage route is '/' or '/home'
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Kids Maths Wiz Logo" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold text-blue-600 mb-12">Kids Maths Wiz</h1>
      <Button onClick={handleEnterClick} className="px-8 py-4 text-xl">
        Enter
      </Button>
    </div>
  );
};

export default LoginPage;