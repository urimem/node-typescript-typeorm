import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number

    @Column("timestamp")
    sentAt: Date

    @ManyToOne(() => User, (user) => user.sentMessages)
    from: User

    @ManyToOne(() => User)
    to: User

    @Column({ length: 250 })
    title: string

    @Column({ type: "text", nullable: true })
    content: string

    @Index({ unique: false })
    @Column()
    published: boolean
}
