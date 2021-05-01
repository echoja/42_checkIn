import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CardRepository } from './card.repository';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    private readonly cardRepository: CardRepository,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async getAll(): Promise<Card[]> {
    return await this.cardRepository.find({ where: { using: false } });
  }

  async createCard(
    adminId: number,
    start: number,
    end: number,
    type: number,
  ): Promise<void> {
    try {
      await this.userService.checkIsAdmin(adminId);
      for (let i = start; i < end; i++) {
        const card = new Card(type);
        await this.cardRepository.save(card);
      }
    } catch (e) {
      console.info(e);
      throw e;
    }
  }

  async validCheck(cardId: number) {
    try {
      const card = await this.cardRepository.findOne(cardId);
      if (card) return { using: card.getStatus() };
      return { using: true };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getUsingInfo(): Promise<any> {
    try {
      const gaepo = (
        await this.cardRepository.find({
          where: { using: true, type: 0 },
        })
      ).length;
      const seocho = (
        await this.cardRepository.find({
          where: { using: true, type: 1 },
        })
      ).length;
      return { gaepo: gaepo, seocho: seocho };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
