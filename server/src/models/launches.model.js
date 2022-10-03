const launches = new Map();

// MAPS

const launch = {
  flightNumber: 100,
  launchDate: new Date('December 27,2030'),
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  customers: ['nasa', 'ztm'],
  target: 'Kepler-442 b',
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
