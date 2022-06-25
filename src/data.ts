// its better to diclare using enum

export enum ReportType {
    EXPENSE = 'expense',
    INCOME = 'income',
  }

export const data: Data = {
  report: [
      {
          id:"uuid1",
          source:"salary",
          amount:500,
          created_at: new Date(),
          updated_at: new Date(),
          type:ReportType.INCOME

      },
      {
          id:"uuid2",
          source:"online",
          amount:300,
          created_at: new Date(),
          updated_at: new Date(),
          type:ReportType.INCOME

      },
      {
          id:"uuid3",
          source:"from:YouTube",
          amount:1000,
          created_at: new Date(),
          updated_at: new Date(),
          type:ReportType.INCOME

      },
      {
          id:"uuid1",
          source:"food",
          amount:500,
          created_at: new Date(),
          updated_at: new Date(),
          type:ReportType.EXPENSE

      },
      {
          id:"uuid2",
          source:"grosery",
          amount:200,
          created_at: new Date(),
          updated_at: new Date(),
          type:ReportType.EXPENSE

      },
  ],
};

interface Data {
  report: {
    id: String;
    source: String;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType; //in place of ReportType we can use "expense" | "income"  //to diclare in generic [we can also use enum both are same]
  }[];
}


// data.report.push("asdfg") // string value
// data.report.push(123456) // integer/number value
// data.report.push(true)  // boolean value

// data.report.push({
//     id: "uid",
//     source: "salary",
//     amount:123,
//     created_at: new Date(),
//     updated_at: new Date(),
//     type: ReportType
// })
