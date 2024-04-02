const city = [
  { name: 'Alexandria', id: 1 },
  { name: 'Arlington', id: 2 },
  { name: 'Annandale', id: 3 },
  { name: 'Bethesda', id: 4 },
  { name: 'Bowie', id: 5 },
  { name: 'Brians Road', id: 6 },
  { name: 'Burke', id: 7 },
  { name: 'Capitol Heights', id: 8 },
  { name: 'Chevy Chase', id: 9 },
  { name: 'Clinton', id: 10 },
  { name: 'Dumfries', id: 11 },
  { name: 'District Heights', id: 12 },
  { name: 'Falls Church', id: 13 },
  { name: 'Falls Church', id: 14 },
  { name: 'Fairfax', id: 15 },
  { name: 'Fairfax Station', id: 16 },
  { name: 'Fort Washington', id: 17 },
  { name: 'Germantown', id: 18 },
  { name: 'Gaitersburg', id: 19 },
  { name: 'Great Falls', id: 20 },
  { name: 'Hyattsville', id: 21 },
  { name: 'Kensington', id: 22 },
  { name: 'Landover', id: 23 },
  { name: 'Lorton', id: 24 },
  { name: 'Manassas', id: 25 },
  { name: 'McLean', id: 26 },
  { name: 'MC Lean', id: 27 },
  { name: 'Oxon Hill', id: 28 },
  { name: 'Potomac', id: 29 },
  { name: 'Poolesville', id: 30 },
  { name: 'Rockville', id: 31 },
  { name: 'Silver Spring', id: 32 },
  { name: 'Springfield', id: 33 },
  { name: 'Suitland', id: 34 },
  { name: 'Temple Hills', id: 35 },
  { name: 'Upper Marlboro', id: 36 },
  { name: 'Vienna', id: 37 },
  { name: 'Woodbridge', id: 38 },
  { name: 'Washington', id: 39 },
  
  { name: 'Annapolis', id: 40 }, // Saida de Elkridge
  { name: 'Baltimore', id: 41 },
  { name: 'Beltsville', id: 42 },
  { name: 'Catonsville', id: 43 },
  { name: 'Columbia', id: 44 },
  { name: 'College Park', id: 45 },
  { name: 'Edgewood', id: 46 },
  { name: 'Elkrigde', id: 47 },
  { name: 'Frederick', id: 48 },
  { name: 'Greenbelt', id: 49 },
  { name: 'Hanover', id: 50 },
  { name: 'Laurel', id: 51 },
  { name: 'Parksville', id: 52 },
];

export default city;

// Caso a cidade de saida tenha o id menor ou igual a 38, a cidade picked up será Springfield, caso contrário, a cidade picked up será Elkridge

// Picked up antes das 04:00 = vencimento até as 08:00
// Picked up entre as 04:00 e 07:00 = vencimento até as 11:00
// Picked up entre as 11:00 e 13:00 = vencimento até as 18:00
// Picked up após as 13:00 = vencimento até as 22:00
