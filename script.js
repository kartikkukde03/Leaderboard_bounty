// 🏴‍☠️ Pirate Treasure Hunt Leaderboard Data
const roundData = {
    1: [
        { position: 1, name: 'Captain Blackbeard', points: '1500' },
        { position: 2, name: 'Captain Anne Bonny', points: '1300' },
        { position: 3, name: 'Captain Henry Morgan', points: '1200' }
    ],
    2: [
        { position: 1, name: 'Captain Blackbeard', points: '1800' },
        { position: 2, name: 'Captain Henry Morgan', points: '1600' },
        { position: 3, name: 'Captain Anne Bonny', points: '1400' }
    ],
    3: [
        { position: 1, name: 'Captain Henry Morgan', points: '2100' },
        { position: 2, name: 'Captain Blackbeard', points: '1900' },
        { position: 3, name: 'Captain Anne Bonny', points: '1700' }
    ]
};

// 🏴‍☠️ Function to update the Leaderboard dynamically
function updateLeaderboard(round) {
    const tbody = document.querySelector(`#leaderboard-round${round} tbody`);
    tbody.innerHTML = ''; // Clear existing data

    roundData[round].forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.position}</td>
            <td>${player.name}</td>
            <td>${player.points}</td>
        `;
        tbody.appendChild(row);
    });
}

// 🏴‍☠️ Initialize all leaderboards
document.addEventListener('DOMContentLoaded', () => {
    updateLeaderboard(1);
    updateLeaderboard(2);
    updateLeaderboard(3);
});
