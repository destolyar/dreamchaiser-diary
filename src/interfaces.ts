export interface DiaryEntry {
  id: string;
  title: string;
  text: string;
  date: Date;
}

export interface DiaryEntryFirebase {
  name: string;
  fields: {
    title: {
      stringValue: any;
    };
    date: {
      timestampValue: string | number | Date;
    };
    text: {
      stringValue: any;
    };
  };
}

export interface GoalEntry {
  id: string;
  goal: string;
  goalValue: number;
  currentValue: number;
  isAvailable: boolean
}

export interface GoalEntryFirebase {
  name: string;
  fields: {
    goal: { stringValue: any; };
    goalValue: { integerValue: string | number; };
    currentValue: {
      integerValue: string | number;
      doubleValue: string | number;
    };
    isAvailable: { booleanValue: any; };
  };
}


export interface PostEntryFirebase {
  mapValue: GoalEntryFirebase
}