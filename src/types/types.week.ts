
export interface CustomWeekTypes {
  createWeek: (day: number) => void;
  deleteWeek: () => void;
  saveWeek: () => void;
  handleInputChange: (value: string, id: number) => void;
  week: {id: number, day: string, content: string}[]
}

export interface PropsTableWeek {
  deleteWeek: () => void;
  saveWeek: () => void;
  handleInputChange: (value: string, id: number) => void;
  week: {id: number, day: string, content: string}[]
}
