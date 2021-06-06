import { CardInstance, CardRepository, CardType, UserRepository } from "@/type";

export class CardService {
  user: UserRepository;
  card: CardRepository;
  constructor(user: UserRepository, card: CardRepository) {
    this.user = user;
    this.card = card;
  }
  async create(type: CardType, start: number, end: number): Promise<void> {
    const promises: Promise<CardInstance>[] = [];
    for (let i = start; i < end; i++) {
      promises.push(this.card.create({ type }));
    }
    const len = promises.length;
    const settled = await Promise.allSettled(promises);
    const count = settled.filter((p) => p.status === "fulfilled").length;
    if (len !== count)
      console.error(
        `${len} 개가 생성되어야 하는데, 실제로 ${count} 만큼 생성되었습니다.`
      );
    settled.forEach((i) => {
      if (i.status === "rejected") {
        console.log(i.reason);
      }
    });
  }
  async valid(cardId: number): Promise<{ using: boolean }> {
    const found = await this.card.findOne({ where: { cardId } });
    if (!found || (found.using ?? true)) return { using: true };
    return { using: false };
  }
}
