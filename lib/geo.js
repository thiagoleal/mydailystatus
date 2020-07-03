// alert(calcCrow(59.3293371, 13.4877472, 59.3225525, 13.4619422).toFixed(1));

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

// This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export const distance = (Lat1, Lon1, Lat2, Lon2) => {
  const R = 6371; // km
  const lat1 = toRad(Lat1);
  const lat2 = toRad(Lat2);
  const dLat = toRad(Lat2 - Lat1);
  const dLon = toRad(Lon2 - Lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};
