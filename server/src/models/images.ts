import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import Orphanages from './orphanages';

@Entity()
class Images {
  @PrimaryColumn({
    unsigned: true,
    primary: true,
    generated: 'increment',
  })
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanages, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanages;
}

export default Images;
