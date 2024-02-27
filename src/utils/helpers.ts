export const getHoursString = (hour: number) => {
  return `${hour}hr${hour !== 1 ? 's' : ''}`;
};
