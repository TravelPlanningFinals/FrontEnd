export default function CountDown(startDate) {
  const timeUntilTrip = new Date(startDate) - new Date();
  const daysUntilTrip = timeUntilTrip / (1000 * 60 * 60 * 24);
  const countDown = Math.ceil(daysUntilTrip);

  return countDown;
}
