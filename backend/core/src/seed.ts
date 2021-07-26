import { SeederModule } from "./seeder/seeder.module"
import { NestFactory } from "@nestjs/core"
import yargs from "yargs"

import { Repository } from "typeorm"
import { getRepositoryToken } from "@nestjs/typeorm"
import { INestApplicationContext } from "@nestjs/common"
import { ListingDefaultSeed } from "./seeds/listings/listing-default-seed"
import { Listing } from "./listings/entities/listing.entity"
import { ListingGondorSeed } from "./seeds/listings/listing-gondor-seed"
import { ListingShireSeed } from "./seeds/listings/listing-shire-seed"
import { ListingRivendellSeed } from "./seeds/listings/listing-rivendell-seed"

const argv = yargs.scriptName("seed").options({
  test: { type: "boolean", default: false },
}).argv

const seedListings = async (app: INestApplicationContext) => {
  const seeds = []

  const allSeeds = [
    app.get<ListingDefaultSeed>(ListingShireSeed),
    app.get<ListingDefaultSeed>(ListingGondorSeed),
    app.get<ListingDefaultSeed>(ListingRivendellSeed),
  ]

  const listingRepository = app.get<Repository<Listing>>(getRepositoryToken(Listing))

  for (const [_, listingSeed] of allSeeds.entries()) {
    const listing = await listingSeed.seed()
    await listingRepository.save(listing)
    seeds.push(listing)
  }

  return seeds
}

async function seed() {
  const app = await NestFactory.create(SeederModule.forRoot({ test: argv.test }))

  await seedListings(app)
  await app.close()
}

void seed()
