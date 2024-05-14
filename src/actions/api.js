export const loginUser = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  