import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(name: string, description: string) {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Category };
