import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from "typeorm"
import { Message } from "./Message"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column({ length: 100 })
    username: string

    @Column({ length: 100 })
    firstName: string

    @Column({ length: 100 })
    lastName: string

    @Index({ unique: false })
    @Column()
    active: boolean

    @OneToMany(() => Message, (message) => message.from, { cascade: true })
    sentMessages: Message[]
}
