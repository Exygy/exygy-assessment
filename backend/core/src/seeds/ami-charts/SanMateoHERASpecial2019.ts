import { AmiChartCreateDto } from "../../ami-charts/dto/ami-chart.dto"
import { BaseEntity } from "typeorm"

export const SanMateoHERASpecial2019: Omit<AmiChartCreateDto, keyof BaseEntity> = {
  name: "SanMateoHERASpecial2019",
  items: [
    {
      percentOfAmi: 50,
      householdSize: 1,
      income: 56450,
    },
    {
      percentOfAmi: 50,
      householdSize: 2,
      income: 64500,
    },
    {
      percentOfAmi: 50,
      householdSize: 3,
      income: 72550,
    },
    {
      percentOfAmi: 50,
      householdSize: 4,
      income: 80600,
    },
    {
      percentOfAmi: 50,
      householdSize: 5,
      income: 87050,
    },
    {
      percentOfAmi: 50,
      householdSize: 6,
      income: 93500,
    },
    {
      percentOfAmi: 50,
      householdSize: 7,
      income: 99950,
    },
    {
      percentOfAmi: 50,
      householdSize: 8,
      income: 106400,
    },
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
      income: 91502,
    },
    {
      percentOfAmi: 60,
      householdSize: 4,
      income: 101630,
    },
    {
      percentOfAmi: 60,
      householdSize: 5,
      income: 109833,
    },
    {
      percentOfAmi: 60,
      householdSize: 6,
      income: 117924,
    },
    {
      percentOfAmi: 60,
      householdSize: 7,
      income: 126059,
    },
    {
      percentOfAmi: 60,
      householdSize: 8,
      income: 134219,
    },
  ],
}
