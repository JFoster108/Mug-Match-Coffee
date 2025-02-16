import { useEffect, useState } from 'react';
import { fetchQuizResults, updateUserCredentials } from '../utils/api';

const ProfileSettings = () => {
  const [quizResults, setQuizResults] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchQuizResults().then(setQuizResults);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserCredentials(formData.email, formData.password);
      setMessage('Credentials updated successfully!');
    } catch (error) {
      setMessage('Error updating credentials.');
    }
  };

  return (
    <div className="profile-settings">
      <h1>Profile Settings</h1>
      <section className="quiz-results">
        <h2>Your Quiz Results</h2>
        {quizResults ? <p>{quizResults}</p> : <p>Loading quiz results...</p>}
      </section>
      
      <section className="update-credentials">
        <h2>Update Login Credentials</h2>
        <form onSubmit={handleUpdateCredentials}>
          <input type="email" name="email" placeholder="New Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="New Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Update</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
};

export default ProfileSettings;
