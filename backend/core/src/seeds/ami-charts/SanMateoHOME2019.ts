import { AmiChartCreateDto } from "../../ami-charts/dto/ami-chart.dto"
import { BaseEntity } from "typeorm"

export const SanMateoHOME2019: Omit<AmiChartCreateDto, keyof BaseEntity> = {
  name: "SanMateoHOME2019",
  items: [
    {
      percentOfAmi: 60,
      householdSize: 1,
      income: 71170,
    },
    {
      percentOfAmi: 60,
      householdSize: 2,
      income: 81340,
    },
    {
      percentOfAmi: 60,
      householdSize: 3,
      income: 91500,
    },
    {
      percentOfAmi: 60,
      householdSize: 4,
      income: 101630,
    },
    {
      percentOfAmi: 60,
      householdSize: 5,
      income: 109830,
    },
    {
      percentOfAmi: 60,
      householdSize: 6,
      income: 117920,
    },
    {
      percentOfAmi: 60,
      householdSize: 7,
      income: 126060,
    },
    {
      percentOfAmi: 60,
      householdSize: 8,
      income: 134219,
    },
  ],
}
