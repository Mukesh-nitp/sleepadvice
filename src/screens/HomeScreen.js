import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Sleep Activity & Advice" />
      </Appbar.Header>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Sleep Tracker</Title>
            <Paragraph>Track your sleep patterns and get insights.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => navigation.navigate('SleepActivity')}>View Details</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Sleep Advice</Title>
            <Paragraph>Get personalized advice to improve your sleep.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => {}}>Get Advice</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;