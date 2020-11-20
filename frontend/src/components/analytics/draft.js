// Things I Need For Analytics
// Student
// 1. Time spent playing
// 2. Score per attempt
// 3. Total score per world
// 4. Score
student = {
    name: "Jack Lim",
    minutesPlayed: 56.2,
    scores: [
        {
            worldId: 1,
            stageScore: { 1: 10, 2: 9, 3: 8, 4: 10, 5: 3 }
        },
        {
            worldId: 2,
            stageScore: { 1: 10, 2: 9, 3: 8, 4: 10, 5: 3 }
        },
        {
            worldId: 3,
            stageScore: { 1: 10, 2: 9, 3: 8, 4: 10, 5: 3 }
        }
    ]
}

Class = {
    avgMinutesPlayed: 100,
    student: [Student1, Student2], // student objects? student ids?
    totalWorldScores: { 1: 89, 2: 78, 3: 90, 4: 64, 5: 48, 6: 32 },
    totalScore: 401,
    scoreHistory: [
        { month: "June 20", totalScore: 300 },
        { month: "July 20", totalScore: 400 },
        { month: "Aug 20", totalScore: 500 },
    ],
    easyScore: {
        max: 10,
        min: 1,
        top40: 7,
        bottom40: 3
    },
    medScore: {
        max: 10,
        min: 1,
        top40: 7,
        bottom40: 3
    },
    hardScore: {
        max: 10,
        min: 1,
        top40: 7,
        bottom40: 3
    },
}