import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import Images from './images';

@Entity()
class Orphanages {
  @PrimaryColumn({
    unsigned: true,
    primary: true,
    generated: 'increment',
  })
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column('text')
  about: string;

  @Column('text')
  instructions: string;

  @Column('varchar')
  opening_hours: string;

  @Column({ default: false })
  open_on_weekends: boolean;

  @OneToMany(() => Images, images => images.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Images[];
}

export default Orphanages;
