import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SleepTrack {
    duration: number; // in hours
    quality: 'good' | 'average' | 'poor';
}

const getSleepAdvice = (track: SleepTrack): string => {
    if (track.quality === 'good') {
        return 'You had a good sleep! Keep maintaining your sleep habits.';
    } else if (track.quality === 'average') {
        return 'Your sleep was average. Try to relax before bed and avoid screens.';
    } else {
        return 'Your sleep quality was poor. Consider improving your sleep environment and routine.';
    }
};

const SleepAdviceScreen: React.FC = () => {
    const [sleepTrack, setSleepTrack] = useState<SleepTrack | null>(null);
    const [advice, setAdvice] = useState<string>('');

    useEffect(() => {
        // Simulate fetching sleep track data
        const fetchSleepTrack = async () => {
            const track: SleepTrack = {
                duration: 7,
                quality: 'average',
            };
            setSleepTrack(track);
            setAdvice(getSleepAdvice(track));
        };

        fetchSleepTrack();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sleep Advice</Text>
            {sleepTrack ? (
                <>
                    <Text style={styles.trackInfo}>Duration: {sleepTrack.duration} hours</Text>
                    <Text style={styles.trackInfo}>Quality: {sleepTrack.quality}</Text>
                    <Text style={styles.advice}>{advice}</Text>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    trackInfo: {
        fontSize: 18,
        marginBottom: 8,
    },
    advice: {
        fontSize: 18,
        fontStyle: 'italic',
        marginTop: 16,
    },
});

export default SleepAdviceScreen;