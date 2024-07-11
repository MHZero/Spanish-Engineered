import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingPage = () => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout (replace with actual data fetching logic)
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after timeout
    }, 3000); // Simulate 3 seconds loading time

    // Clean up function to clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spanish Engineering App</Text>
      {/* Conditional rendering based on isLoading state */}
      {isLoading ? (
        // Show loading indicator if isLoading is true
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        // Show content once isLoading is false
        <View style={styles.content}>
          <Text style={styles.contentText}>Welcome to the Loading Page!</Text>
          {/* Add more UI components or navigation logic here */}
        </View>
      )}
    </View>
  );
};

// Stylesheet for component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default LoadingPage;
