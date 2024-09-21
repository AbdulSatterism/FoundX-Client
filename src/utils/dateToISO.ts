interface IDateProps {
  calendar: {
    identifier: string;
  };
  year: number;
  month: number;
  day: number;
  era: string;
}

const dateToISO = (date: IDateProps) => {
  if (!date) {
    return new Date().toISOString();
  }

  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};

export default dateToISO;
