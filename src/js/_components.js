console.log('components');

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
    'Courtois',
    'Vazquez',
    'Militao',
    'Nacho',
    'Mendy',
    'Casemiro',
    'Valverde',
    'Modrich',
    'Kroos',
    'Vinicius',
    'Benzema',
  ],
  [
    'Stegen',
    'Minqueza',
    'Araujo',
    'Lenglet',
    'Dest',
    'Busquets',
    'Jong',
    'Alba',
    'Messi',
    'Pedri',
    'Dembele',
  ],
],
score: '2:1',
scored: ['Kroos', 'Benzema', 'Mingueza'],
date: 'Apr 10th. 2021',
odds: {
  team1: 1.48,
  draw: 2.53,
  team2: 4.25,
}

};
// Диструктуризация

const [players1, players2] = game.players;
console.log(players1, players2);

//rest

const [gal, ...time] = players1;
console.log(gal, ...time);
