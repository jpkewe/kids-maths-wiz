import React, { useState, useEffect } from 'react';
import useSound from '../../hooks/useSound';
import { Button } from '../ui/button'; // Assuming button component path
import logo from '../../assets/images/kids-maths-wiz_logo.png'; // Assuming logo path
import { createProfile, getAllProfiles } from '../../database'; // Import database functions
import type { Profile } from '../../database'; // Import Profile type

:start_line:7
-------
interface LoginPageProps {
  onEnter: (profileId: number) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onEnter }) => {
  const playWelcomeSound = useSound('/src/assets/sounds/welcome_to_kids_maths_wiz.mp3');
  const [showCreateProfileModal, setShowCreateProfileModal] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    try {
      const profilesList = getAllProfiles();
      setProfiles(profilesList);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setError('Failed to load profiles.');
    }
  };

  const handleEnterClick = () => {
    if (selectedProfileId !== null) {
      playWelcomeSound.play();
      onEnter(selectedProfileId);
    } else {
      setError('Please select a profile to enter.');
    }
  };

  const handleCreateUserClick = () => {
    setShowCreateProfileModal(true);
    setError(null); // Clear any previous errors
  };

  const handleCreateProfileSubmit = async () => {
    if (newProfileName.trim()) {
      try {
        await createProfile(newProfileName.trim());
        setNewProfileName('');
        setShowCreateProfileModal(false);
        fetchProfiles(); // Refresh profile list after creation
        setError(null); // Clear any previous errors
      } catch (error: any) {
        console.error('Error creating profile:', error);
        if (error.message.includes('UNIQUE constraint failed')) {
          setError(`Profile name "${newProfileName.trim()}" already exists.`);
        } else {
          setError('Failed to create profile.');
        }
      }
    } else {
      setError('Profile name cannot be empty.');
    }
  };

  const handleModalClose = () => {
    setShowCreateProfileModal(false);
    setNewProfileName('');
    setError(null); // Clear any errors when closing modal
  };

  const handleProfileSelect = (profileId: number) => {
    setSelectedProfileId(profileId);
    setError(null); // Clear any errors when selecting a profile
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Kids Maths Wiz Logo" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Kids Maths Wiz</h1>

      {/* Profile Selection */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Select Profile</h2>
        {profiles.length === 0 ? (
          <p>No profiles found. Create a new one!</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {profiles.map(profile => (
              <Button
                key={profile.id}
                variant={selectedProfileId === profile.id ? "default" : "outline"}
                onClick={() => handleProfileSelect(profile.id)}
                className="m-1"
              >
                {profile.name}
              </Button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Button onClick={handleEnterClick} className="px-8 py-4 text-xl" disabled={selectedProfileId === null}>
        Enter
      </Button>
      <Button variant="outline" onClick={handleCreateUserClick} className="mt-4 px-8 py-4 text-xl">
        Create User
      </Button>

      {/* Create Profile Modal */}
      {showCreateProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create New Profile</h2>
            <input
              type="text"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              placeholder="Enter profile name"
              className="border p-2 rounded w-full mb-4"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex justify-end">
              <Button variant="outline" onClick={handleModalClose} className="mr-2">
                Cancel
              </Button>
              <Button onClick={handleCreateProfileSubmit}>
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;