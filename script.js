// 🏴‍☠️ Pirate Treasure Hunt Leaderboard Data (10 Teams)
const roundData = {
    1: [
        { position: 1, name: 'Captain Blackbeard', points: '2000' },
        { position: 2, name: 'Captain Anne Bonny', points: '1900' },
        { position: 3, name: 'Captain Henry Morgan', points: '1850' },
        { position: 4, name: 'Captain Jack Rackham', points: '1800' },
        { position: 5, name: 'Captain Charles Vane', points: '1750' },
        { position: 6, name: 'Captain Mary Read', points: '1700' },
        { position: 7, name: 'Captain Samuel Bellamy', points: '1650' },
        { position: 8, name: 'Captain Bartholomew Roberts', points: '1600' },
        { position: 9, name: 'Captain Stede Bonnet', points: '1550' },
        { position: 10, name: 'Captain William Kidd', points: '1500' }
    ],
    2: [
        { position: 1, name: 'Captain Blackbeard', points: '2200' },
        { position: 2, name: 'Captain Anne Bonny', points: '2100' },
        { position: 3, name: 'Captain Henry Morgan', points: '2050' },
        { position: 4, name: 'Captain Jack Rackham', points: '2000' },
        { position: 5, name: 'Captain Charles Vane', points: '1950' },
        { position: 6, name: 'Captain Mary Read', points: '1900' },
        { position: 7, name: 'Captain Samuel Bellamy', points: '1850' },
        { position: 8, name: 'Captain Bartholomew Roberts', points: '1800' },
        { position: 9, name: 'Captain Stede Bonnet', points: '1750' },
        { position: 10, name: 'Captain William Kidd', points: '1700' }
    ],
    3: [
        { position: 1, name: 'Captain Blackbeard', points: '2500' },
        { position: 2, name: 'Captain Anne Bonny', points: '2400' },
        { position: 3, name: 'Captain Henry Morgan', points: '2350' },
        { position: 4, name: 'Captain Jack Rackham', points: '2300' },
        { position: 5, name: 'Captain Charles Vane', points: '2250' },
        { position: 6, name: 'Captain Mary Read', points: '2200' },
        { position: 7, name: 'Captain Samuel Bellamy', points: '2150' },
        { position: 8, name: 'Captain Bartholomew Roberts', points: '2100' },
        { position: 9, name: 'Captain Stede Bonnet', points: '2050' },
        { position: 10, name: 'Captain William Kidd', points: '2000' }
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
