import { Injectable, NotFoundException } from "@nestjs/common"
import { AssetCreateDto } from "../dto/asset.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Asset } from "../entities/asset.entity"
import { paginate } from "nestjs-typeorm-paginate"
import { PaginationQueryParams } from "../../shared/dto/pagination.dto"

@Injectable()
export class AssetsService {
  constructor(@InjectRepository(Asset) private readonly repository: Repository<Asset>) {}

  async create(assetCreateDto: AssetCreateDto) {
    return await this.repository.save(assetCreateDto)
  }

  async list(queryParams: PaginationQueryParams) {
    const qb = this._getQb()
    return await paginate(qb, { limit: queryParams.limit, page: queryParams.page })
  }

  async findOne(id: string): Promise<Asset> {
    const asset = await this.repository.findOne({ where: { id } })
    if (!asset) {
      throw new NotFoundException()
    }
    return asset
  }

  private _getQb() {
    const qb = this.repository.createQueryBuilder("assets")
    return qb
  }
}
